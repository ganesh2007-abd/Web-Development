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
        type: Number,
        min: [0, 'price must be positive']
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
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
})

product.statics.firesale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}

product.methods.greet = function () {
    console.log(`Hello from ${this.name}`)
}

product.methods.toggleonsale = function () {
    this.onSale = !this.onSale
    return this.save()
}

product.methods.addcategory = function (newcat) {
    this.categories.push(newcat)
    return this.save()
}

const Product = mongoose.model('Product', product)

const findproduct = async () => {
    const foundprod = await Product.findOne({ name: 'Tire Pump' })
    foundprod.greet()
    await foundprod.toggleonsale()
    await foundprod.addcategory('air filling')
}


// const jersey = new Product({ name: 'RCB Jersey', price: -1400, categories: ['RCB', 'cricket', 'virat', 'bengaluru'], size: 'M' })
// jersey.save()
//     .then(data => {
//         console.log("It worked")
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("Error")
//         console.log(err)
//     })


// Product.findOneAndUpdate({ name: "Mountain Bike" }, { name: "Speeding car", price: -300000, categories: ['Racing', 'Car'] }, { new: true, runValidators: true })
//     .then(data => {
//         console.log("It worked")
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("Error")
//         console.log(err)
//     })