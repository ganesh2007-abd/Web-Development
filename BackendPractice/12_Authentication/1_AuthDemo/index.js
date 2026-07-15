const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const app = express()

const bcrypt = require('bcrypt')
const User = require('./models/user')

app.use(session({ secret: 'helloboyzz' }))

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

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next()
}

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body
    // const hash = await bcrypt.hash(password, 12)
    const user = new User({ username, password })
    await user.save()
    req.session.user_id = user._id
    res.redirect('/secret')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body
    const foundUser = await User.findAndValidate(username, password)
    // console.log(foundUser)
    if (foundUser) {
        req.session.user_id = foundUser._id
        res.redirect('/secret')
    }
    else {
        res.send('Failed')
    }
    // console.log(user)
})

app.get('/secret', requireLogin, (req, res) => {
    // if (!req.session.user_id) {
    //     return res.redirect('/login')
    // }
    res.render('secret.ejs')

})

app.post('/logout', (req, res) => {
    req.session.user_id = null
    res.redirect('/login')
})

app.listen(3000, () => {
    console.log('listening on 3000...')
})