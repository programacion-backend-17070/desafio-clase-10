const { Router } = require('express')
const axios = require('axios')

const router = Router()
const RICK_MORTY_API_URL = 'https://rickandmortyapi.com/api/character' 

const personajesLocal = []
router.get('/', async (req, res) => {
  // {
  //   data: RESULTADO
  // }
  const { data } = await axios.get("http:/localhost:8080/api/productos")

  const personajes = personajesLocal.concat(data.results)
  res.render('index', { personajes })
})

router.get('/add', (req, res) => res.render('add'))

router.post('/add', (req, res) => {
  const { name } = req.body

  personajesLocal.push({
    name,
    image: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/08/16/15344206335212.jpg"
  })

  res.redirect("/")
})

module.exports = router