const express = require('express')
const cookieparser = require('cookie-parser')
const app = express()

app.use(cookieparser('My name is ganesh'))

app.get('/greet', (req, res) => {
    const { name } = req.cookies
    res.send(`Hey!${name}`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'ganesh')
    res.send('set the name')
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'lafangi', { signed: true })
    res.send('Ok signed!')
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies)
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})

app.listen(3000, () => {
    console.log('Listening..')
})