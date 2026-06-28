const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('tiny'))

// app.use((req, res, next) => {
//     console.log("First Middleware")
//     next()
//     console.log("First Middleware 2")
// })
// app.use((req, res, next) => {
//     console.log("second Middleware")
//     next()
//     console.log("second Middleware 2")
// })
// app.use((req, res, next) => {
//     console.log("third Middleware")
//     return next()
//     console.log("third Middleware - 2")
// })
// app.use((req, res, next) => {
//     console.log("fourth Middleware")
//     next()
//     console.log("fourth Middleware - 2")
// })

const verify = (req, res, next) => {
    // console.log(req.method.toUpperCase(), req.path)
    const { password } = req.query
    if (password === 'chickennugget') {
        next()
    }
    // res.send('you need pass')
    throw new Error("Here is your error!")
}

app.use('/dogs', (req, res, next) => {
    console.log('I love dogs')
    next()
})



app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/dogs', (req, res) => {
    res.send('Woof Woof!!')
})

app.get('/secret', verify, (req, res) => {
    res.send('I wont tell you a secret')
})

app.use((req, res) => {
    res.status(404).send('Not Found')
})

app.listen(3000, () => {
    console.log("Listening on 3000...")
})