const express = require('express')
const app = express()

app.get('/greet', (req, res) => {
    const { name } = req.cookies
    res.send(`Hey!${name}`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'ganesh')
    res.send('set the name')
})

app.listen(3000, () => {
    console.log('Listening..')
})