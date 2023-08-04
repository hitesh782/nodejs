const mongoose = require('mongoose');

//schema for the documents
const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required field!'],
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required field!'],
        trim: true
    },
    duration: {
        type: Number,
        required: [true, 'duration is required field!']
    },
    rating: {
        type: Number,
    },
    totalRating: {
        type: Number,
    },
    releaseYear: {
        type: Number,
        required: [true, 'Release year is required field!']
    },
    releaseDate: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    genres: {
        type: [String],
        required: [true, 'Genres is required field!']
    },
    coverImage: {
        type: String,
        required: [true, 'Cover image is required Field!']
    },
    actors: {
        type: [String],
        required: [true, 'actors is required field!']
    },
    price: {
        type: Number,
        required: [true, 'price is required Field!']
    },
})

//creating model from the schema
//with name Movie a collection will be created in the mongodb
//in plural form
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;