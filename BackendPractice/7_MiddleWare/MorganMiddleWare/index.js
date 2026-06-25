const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/dogs', (req, res) => {
    res.send('Woof Woof!!')
})

app.listen(3000, () => {
    console.log("Listening on 3000...")
})