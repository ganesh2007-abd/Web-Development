const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    if (req.query.isadmin) {
        next();
    }
    res.send("Fuck you!you are not admin!!")
})

router.get('/', (req, res) => {
    res.send("Viwing important info")
})

router.get('/area51', (req, res) => {
    res.send("Viweing area 51")
})

router.get('/pyramids', (req, res) => {
    res.send('Viweing pyramids')
})

module.exports = router