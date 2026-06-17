const express = require('express')
const path = require('path')
const app = express()

const comments = [
    {
        user: 'ganesh',
        text: 'I have a group of companies'
    },
    {
        user: 'lakshmi',
        text: 'i have a son having group of companies,lol'
    },
    {
        user: 'suvarna',
        text: 'I have a brother having group of companies'
    },
    {
        user: 'rambabu',
        text: 'If my boy has comapany i too have a company'
    }
]

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/home', (req, res) => {
    res.send("This is get response")
})

app.post('/home', (req, res) => {
    const data = req.body
    // console.log(data)
    res.send(`Details are ${data.username} and ${data.password}`)
})

app.listen(3000, () => {
    console.log("listening on 3000")
})