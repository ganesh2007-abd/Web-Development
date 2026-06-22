const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log("Connection Open!")
    })
    .catch((err) => {
        console.log(err)
    })


const product = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String
    }
})

const Product = mongoose.model('Product', product)
const bike = new Product({ name: 'Mountain Bike', price: 200000 })
bike.save()
    .then(data => {
        console.log("It worked")
        console.log(data)
    })
    .catch(err => {
        console.log("Error")
        console.log(err)
    })