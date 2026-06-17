const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/home', (req, res) => {
    res.send("This is get response")
})

app.post('/home', (req, res) => {
    const data = req.body
    // console.log(data)
    res.send(`Details are ${data.username} and ${data.password}`)
})

app.listen(3000, () => {
    console.log("listening on 3000")
})