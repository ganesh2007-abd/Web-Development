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

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    const result = await bcrypt.compare(password, user.password)
    // console.log(result)
    if (result) {
        res.send('Success')

    }
    else {
        res.send('Failed')
    }
    // console.log(user)
})

app.get('/secret', (req, res) => {
    res.send('this is a secret!!')

})
app.listen(3000, () => {
    console.log('listening on 3000...')
})