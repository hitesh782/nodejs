const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const Movie = require('./../models/movieModel');

dotenv.config({ path: './config.env' });

mongoose.connect(process.env.CONN_STR, {
    useNewUrlParser: true
}).then((conn) => {
    console.log('DB connected successfully');
}).catch((err) => {
    console.log('some error has occured');
})

const movies = JSON.parse(fs.readFileSync('./data/moviesForDb.json', 'utf-8'));

//delete all the existing data from the collection
const deleteMovies = async () => {
    try {
        await Movie.deleteMany();
        console.log('data deleted successfully');
    } catch (err) {
        console.log(err.message);
    }
}

//import dummy data in the db for dev
const importMovies = async () => {
    try {
        await Movie.create(movies);
        console.log('data inserted successfully');
    } catch (err) {
        console.log(err.message);
    }
}

// deleteMovies();
// importMovies();

// console.log(process.argv);  //[
// 'C:\\Program Files\\nodejs\\node.exe',
// 'C:\\Users\\hitesh parmar\\Desktop\\nodejs\\data\\import-dev-data.js'
//   ]

// node .\data\import-dev-data.js --import
if (process.argv[2] == '--import') {
    importMovies();
}
// node .\data\import-dev-data.js --delete
if (process.argv[2] == '--delete') {
    deleteMovies();
}