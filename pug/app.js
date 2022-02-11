const express = require('express');
const path = require('path');
const app = express()

const homeRouter = require('./routes/home')

app.use("/static", express.static(path.join(__dirname, 'public')))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views')
app.set('view engine', 'pug')

app.use('/', homeRouter)


app.listen(8080, () => console.log('listening on http://localhost:8080'))