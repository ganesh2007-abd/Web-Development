const express = require('express')
const app = express()
const shelterroutes = require('./routes/shelter')
const dogroutes = require('./routes/dogs')
const adminroutes = require('./routes/admin')

app.use('/admin', adminroutes)
app.use('/shelters', shelterroutes)
app.use('/dogs', dogroutes)

app.listen(3000, () => {
    console.log('Listening..')
})