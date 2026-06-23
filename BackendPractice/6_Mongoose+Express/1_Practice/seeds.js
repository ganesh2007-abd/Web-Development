const mongoose = require('mongoose')

const Product = require('./models/product')

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/FarmStand')
    .then(() => {
        console.log("Mongodb Connection Open!")
    })
    .catch((err) => {
        console.log("MongoDB connection error")
        console.log(err)
    })

const prodarr = [
    {
        name: 'Carrot',
        price: 6,
        category: 'vegetable'
    },
    {
        name: 'Jack Fruit',
        price: 49,
        category: 'fruit'
    },
    {
        name: 'Cucumber',
        price: 22,
        category: 'vegetable'
    },
    {
        name: 'Paneer',
        price: 29,
        category: 'dairy'
    },
]

Product.insertMany(prodarr)