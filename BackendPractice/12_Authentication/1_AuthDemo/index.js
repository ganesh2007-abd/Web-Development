const express = require('express')
const mongoose = require('mongoose')
const app = express()

const bcrypt = require('bcrypt')
const User = require('./models/user')

mongoose.connect('mongodb://127.0.0.1:27017/AuthDemo')
    .then(() => {
        console.log("Mongodb Connection Open!")
    })
    .catch((err) => {
        console.log("MongoDB connection error")
        console.log(err)
    })

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body
    const hash = await bcrypt.hash(password, 12)
    const user = new User({
        username,
        password: hash
    })
    await user.save()
    res.redirect('/secret')
})

app.get('/secret', (req, res) => {
    res.send('this is a secret!!')

})
app.listen(3000, () => {
    console.log('listening on 3000...')
})