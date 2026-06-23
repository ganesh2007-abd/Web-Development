const express = require('express')
const app = express()

app.get('/search', (req, res) => {
    const { q, cpolor } = req.query
    console.log(q)
    console.log(cpolor)
    res.send(`${q} and  color is ${cpolor}`)
})

app.listen(3000, () => {
    console.log("Listening at 3000")
})