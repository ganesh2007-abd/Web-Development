const mongoose = require('mongoose')

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/MRDemo')
    .then(() => {
        console.log("Mongodb Connection Open!")
    })
    .catch((err) => {
        console.log("MongoDB connection error")
        console.log(err)
    })



const productschema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['spring', 'summer', 'fall', 'winter']
    }
})

const farmschema = new mongoose.Schema({
    name: String,
    city: String,
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

const Product = mongoose.model('Product', productschema)
const Farm = mongoose.model('Farm', farmschema)
// Product.insertMany([
//     { name: 'carrot', price: 12, season: 'summer' },
//     { name: 'pineapple', price: 58, season: 'fall' },
//     { name: 'chicken', price: 189, season: 'winter' },
//     { name: 'cashew', price: 650, season: 'spring' },
//     { name: 'munjulu', price: 60, season: 'summer' },
// ])

const userschema = mongoose.Schema({
    name: String,
    age: Number
})

const tweetschema = mongoose.Schema({
    text: String,
    likes: Number,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const User = mongoose.model('User', userschema)
const Tweet = mongoose.model('Tweet', tweetschema)

const maketweets = async () => {
    // const user = new User({ name: 'ganesh', age: 19 })
    const user = await User.findOne({ name: 'ganesh' })
    const tweet2 = new Tweet({ text: 'I love coding', likes: 1234 })
    tweet2.user = user
    // await user.save()
    await tweet2.save()
}

const findtweet = async () => {
    const tweets = await Tweet.find({}).populate('user')
    console.log(tweets)
}

findtweet()

// maketweets()