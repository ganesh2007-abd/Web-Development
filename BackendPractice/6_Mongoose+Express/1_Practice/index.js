const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const methodOverride = require('method-override')
const AppError = require('./AppError')

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

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e))
    }
}

app.get('/products', async (req, res) => {
    const prods = await Product.find({})
    res.render('products/index.ejs', { prods })
})

app.get('/products/new', (req, res) => {
    res.render('products/new.ejs', { categories })

    // res.send("New product")
})

app.get('/products/:id', wrapAsync(async (req, res, next) => {

    const { id } = req.params
    const product = await Product.findById(id)
    if (!product) {
        throw next(new AppError('Good bye', 401))
    }
    // console.log(product)
    res.render('products/show.ejs', { product })

}))

app.get('/products/:id/edit', wrapAsync(async (req, res) => {

    const { id } = req.params
    const product = await Product.findById(id)
    res.render('products/edit.ejs', { product, categories })

}))

app.post('/products', wrapAsync(async (req, res, next) => {

    const newprod = new Product(req.body)
    // console.log(newprod)
    await newprod.save()
    res.redirect('/products/')


}))

app.put('/products/:id', wrapAsync(async (req, res) => {

    const { id } = req.params
    const foundproduct = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    res.redirect(`/products/${foundproduct._id}`)


}))

app.delete('/products/:id', wrapAsync(async (req, res) => {
    const { id } = req.params
    const delprod = await Product.findByIdAndDelete(id)
    console.log("deleetd csuccessfully")
    res.redirect('/products')
}))

function handleValidationErr(err) {
    return new AppError(`Validation failed...${err.message}`, 404)
}

app.use((err, req, res, next) => {
    if (err.name === 'Validation Error') {
        err = handleValidationErr(err)
    }
    next(err)
})

app.use((err, req, res, next) => {
    const { status = 500, message = "Somthing Wrong" } = err;
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log("Listening on 3000 port")
})