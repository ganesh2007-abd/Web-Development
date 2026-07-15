const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Cannot be empty']
    },
    password: {
        type: String,
        required: [true, 'Cannot be empty']
    },
})

module.exports = mongoose.model('User', userSchema)