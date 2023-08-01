const fs = require('fs');

let movies = JSON.parse(fs.readFileSync('./data/movies.json'));

exports.checkId = (req, res, next, value) => {
    console.log('Movie id is ' + value);

    const movie = movies.find((movie) => movie.id === +value);

    //if any movie with id is not found
    if (!movie) {
        return res.status(404).json({                               //return it otherwise it gives error
            status: 'Failed',
            message: 'Movie with ID ' + value + ' is not found'
        })
    }

    next();
}

exports.getAllMovies = (req, res) => {
    res.status(200).json({
        status: 'success',
        count: movies.length,
        res: {
            content: movies
        }
    })
}

exports.getMovieById = (req, res) => {
    console.log(req.params); //params of a request { id: '5' } object of a request
    const id = +req.params.id;             //added + to convert string id into number
    const movie = movies.find((movie) => movie.id === id);

    // //if any movie with id is not found
    // if (!movie) {
    //     return res.status(404).json({                               //return it otherwise it gives error
    //         status: 'Failed',
    //         message: 'Movie with ID ' + id + ' is not found'
    //     })
    // }

    //sending movie in the response if movie is present in database
    res.status(200).json({
        status: 'Success',
        data: {
            movie: movie
        }
    })
}

exports.patchMovieById = (req, res) => {
    const id = +req.params.id;

    let movieToUpdate = movies.find((movie) => movie.id === id);

    // if (!movieToUpdate) {
    //     return res.status(404).json({
    //         status: 'Failed',
    //         message: 'No Movie With ID ' + id + ' is Found'
    //     })
    // }

    let index = movies.indexOf(movieToUpdate);

    Object.assign(movieToUpdate, req.body);   // will assign second objects value in first

    movies[index] = movieToUpdate;

    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        res.status(200).json({
            status: 'Success',
            data: {
                movie: movieToUpdate
            }
        })
    })
}

exports.putMovieById = (req, res) => {
    const id = +req.params.id;

    let movieToUpdate = movies.find((movie) => movie.id === id);

    // if (!movieToUpdate) {
    //     return res.status(404).json({
    //         status: 'Failed',
    //         message: 'No Movie With ID ' + id + ' is Found'
    //     })
    // }

    let index = movies.indexOf(movieToUpdate);
    movies[index] = req.body;

    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        res.status(200).json({
            status: 'Success',
            data: {
                movie: req.body
            }
        })
    })
}

exports.createMovie = (req, res) => {
    const newId = movies[movies.length - 1].id + 1;
    const newMovie = Object.assign({ id: newId }, req.body);

    movies.push(newMovie);

    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        res.status(201).json({
            status: 'Success',
            res: {
                movie: newMovie
            }
        })
    })
}

exports.deleteMovieById = (req, res) => {
    const id = +req.params.id;
    const movieToDelete = movies.find((movie) => movie.id === id);

    // if (!movieToDelete) {
    //     return res.status(404).json({
    //         status: 'Failed',
    //         message: 'No Movie with ID ' + id + ' is Found'
    //     })
    // }

    const index = movies.indexOf(movieToDelete);
    movies.splice(index, 1);       //delete 1 data starting from the index

    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        res.status(204).json({
            status: 'Success',
            res: {
                movie: null
            }
        })
    })
}