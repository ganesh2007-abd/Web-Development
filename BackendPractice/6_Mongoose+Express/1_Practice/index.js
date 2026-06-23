const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')

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

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', ejs)

app.get('/products', async (req, res) => {
    const prods = await Product.find({})
    res.render('products/index.ejs', { prods })
})

app.listen(3000, () => {
    console.log("Listening on 3000 port")
})