const mongoose = require('mongoose');

//schema for the documents
const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required field!'],
        unique: true
    },
    description: String,
    duration: {
        type: Number,
        required: [true, 'duration is required field!']
    },
    rating: {
        type: Number,
        default: 1.0
    }
})

//creating model from the schema
//with name Movie a collection will be created in the mongodb
//in plural form
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;