const express = require('express')
const mongoose = require('mongoose')
const app = express()

const bcrypt = require('bcrypt')
const User = require('./models/user')

app.set('view engine', 'ejs')
app.set('views', 'views')

app.get('/register', (req, res) => {
    res.render('register.ejs')
})


app.get('/secret', (req, res) => {
    res.send('this is a secret!!')

})
app.listen(3000, () => {
    console.log('listening on 3000...')
})