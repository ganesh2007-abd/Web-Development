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

const userschema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: { _id: false },
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userschema)

const makeuser = async () => {
    const u = new User({
        first: 'ganesh',
        last: 'bonda',
    })
    u.addresses.push({
        street: 'chaganti vari street',
        city: 'Tanuku',
        state: 'Ap',
        country: 'India'
    })
    const res = await u.save()
    console.log(res)
}

const addaddress = async (id) => {
    const user = await User.findById(id)
    user.addresses.push({
        street: 'sasi colony',
        city: 'velivennu',
        state: 'ap',
        country: 'India'
    })
    const res = await user.save()
    console.log(res)
}

