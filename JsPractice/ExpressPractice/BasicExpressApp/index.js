const express = require('express')
const app = express()

app.use((req, res) => {
    console.log("Got a request!!")
    // res.send('<button>This is a response</button>')
    // res.send({ name: 'ganesh', age: 19 })
    res.send("Ganesh")
})

app.listen(3000, () => {
    console.log("LIstening to 3000 bruhh")
})