const express = require('express')
const app = express()
const path = require('path')
const Rdata = require('./data.json')

app.use(express.static(path.join(__dirname, 'Public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

// app.get('/', (req, res) => {
//     const rand = Math.floor(Math.random() * 10) + 1
//     // res.send('Hello')
//     res.render('home.ejs', { rand: rand })
// })

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params
    const data = Rdata[subreddit]
    // console.log(data)
    // res.render('home.ejs', { subreddit: subreddit })
    res.render('subreddit.ejs', { data })

})

// app.get('/conditionals', (req, res) => {
//     res.render('conditionals.ejs')
// })

// app.get('/cats', (req, res) => {
//     const cats = ['ganesh', 'honey', 'suvarna', 'rambabu']
//     res.render('loops', { cats })
// })

app.listen(3000, () => {
    console.log("Listening on 3000")
})