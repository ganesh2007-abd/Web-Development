const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('tiny'))

app.use((req, res, next) => {
    console.log("First Middleware")
    next()
    console.log("First Middleware 2")
})
app.use((req, res, next) => {
    console.log("second Middleware")
    next()
    console.log("second Middleware 2")
})
app.use((req, res, next) => {
    console.log("third Middleware")
    return next()
    console.log("third Middleware - 2")
})
app.use((req, res, next) => {
    console.log("fourth Middleware")
    next()
    console.log("fourth Middleware - 2")
})

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/dogs', (req, res) => {
    res.send('Woof Woof!!')
})

app.listen(3000, () => {
    console.log("Listening on 3000...")
})