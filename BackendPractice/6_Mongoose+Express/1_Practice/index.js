const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const methodOverride = require('method-override')

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

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

const categories = ['fruit', 'vegetable', 'dairy']


app.get('/products', async (req, res) => {
    const prods = await Product.find({})
    res.render('products/index.ejs', { prods })
})

app.get('/products/new', (req, res) => {
    res.render('products/new.ejs', { categories })
    // res.send("New product")
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    // console.log(product)
    res.render('products/show.ejs', { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render('products/edit.ejs', { product, categories })
})

app.post('/products', async (req, res) => {
    const newprod = new Product(req.body)
    // console.log(newprod)
    await newprod.save(
        res.redirect('/products/')
    )
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params
    const foundproduct = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    res.redirect(`/products/${foundproduct._id}`)
})

app.listen(3000, () => {
    console.log("Listening on 3000 port")
})