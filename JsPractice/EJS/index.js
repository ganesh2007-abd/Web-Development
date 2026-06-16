const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    console.dir(req)
    // res.send('Hello')
    res.render('home.ejs')
})

app.listen(3000, () => {
    console.log("Listening on 3000")
})