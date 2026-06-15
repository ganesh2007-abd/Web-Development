const express = require('express')
const app = express()

// app.use((req, res) => {
//     console.log("Got a request!!")
//     // res.send('<button>This is a response</button>')
//     // res.send({ name: 'ganesh', age: 19 })
//     // res.send("Ganesh")
// })

app.get('/cats', (req, res) => {
    res.send("MEOW")
})

app.get('/dogs', (req, res) => {
    res.send("WOOF")
})

app.get('/', (req, res) => {
    res.send("Welcome Home!")
})

app.post('/cats', (req, res) => {
    res.send("MEOW(POST)")
})

app.post('/dogs', (req, res) => {
    res.send("WOOF(POST)")
})

app.post('/', (req, res) => {
    res.send("WELCOME HOME!(POST)")
})

app.get('/{*path}', (req, res, next) => {
    res.send("No route found!")
})

app.listen(3000, () => {
    console.log("LIstening to 3000 bruhh")
})