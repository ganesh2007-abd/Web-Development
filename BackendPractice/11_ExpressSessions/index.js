const express = require('express')
const session = require('express-session')

const app = express()

app.use(session({ secret: 'Hello friends' }))

app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1
    }
    else {
        req.session.count = 1;
    }
    res.send(`you viewed ${req.session.count} times`)
})

app.listen(3000, () => {
    console.log('Listening...')
})