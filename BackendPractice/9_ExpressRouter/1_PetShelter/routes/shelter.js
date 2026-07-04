const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Viwing shelter")
})

router.get('/:id', (req, res) => {
    res.send("Viweing one pet")
})

router.get('/:id/edit', (req, res) => {
    res.send('editing one shelter')
})

module.exports = router