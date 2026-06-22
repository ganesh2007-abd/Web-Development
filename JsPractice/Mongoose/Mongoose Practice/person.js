const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("Connection Open!")
    })
    .catch((err) => {
        console.log(err)
    })

const personschema = new mongoose.Schema({
    first: String,
    last: String
})

personschema.virtual('fullname').get(function () {
    return `${this.first} ${this.last}`
})

const Person = mongoose.model('Person', personschema)