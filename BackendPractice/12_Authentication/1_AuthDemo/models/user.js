const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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


userSchema.statics.findAndValidate = async function (username, password) {
    const foundUser = await this.findOne({ username })
    const isvalid = await bcrypt.compare(password, foundUser.password)
    if (isvalid) return foundUser
    return false;
}


userSchema.pre('save', async function () {
    if (!this.isModified('password')) return;
    this.password = await bcrypt.hash(this.password, 12)

})

module.exports = mongoose.model('User', userSchema)