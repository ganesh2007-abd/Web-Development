const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("Connection Open!")
    })
    .catch((err) => {
        console.log(err)
    })


const product = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20
    },
    price: {
        type: String,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: true
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        onstore: {
            type: Number,
            default: 0
        }
    }
})

const Product = mongoose.model('Product', product)
const bike = new Product({ name: 'Mountain Bike', price: 200000, categories: ['bike', 'safety', 'cycling'] })
bike.save()
    .then(data => {
        console.log("It worked")
        console.log(data)
    })
    .catch(err => {
        console.log("Error")
        console.log(err)
    })