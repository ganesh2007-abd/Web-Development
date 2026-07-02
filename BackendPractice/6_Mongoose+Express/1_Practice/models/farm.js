const mongoose = require('mongoose')
const { Schema } = mongoose

const farmschema = new Schema({
    name: {
        type: String,
        required: [true, 'Farm name is required']
    },
    city: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

const Farm = mongoose.model('Farm', farmschema)

farmschema.post('findOneAndDelete', async function (farm) {
    if (farm.products.length) {
        const res = await Product.deleteMany({ _id: { $in: farm.products } })
        console.log(res)
    }
})

module.exports = Farm