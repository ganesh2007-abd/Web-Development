const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log("Connection Open!")
    })
    .catch((err) => {
        console.log(err)
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    review: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema)
const amadeus = new Movie({ title: "Amadeus", year: 1996, review: 9.2, rating: 'R' })