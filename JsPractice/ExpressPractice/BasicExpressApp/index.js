const express = require('express')
const app = express()

app.use(() => {
    console.log("Got a request!!")
})

app.listen(3000, () => {
    console.log("LIstening to 3000 bruhh")
})