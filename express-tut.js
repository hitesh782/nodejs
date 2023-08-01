const express = require('express');
const fs = require('fs');

const app = express();
let movies = JSON.parse(fs.readFileSync('./data/movies.json'));

//for handling req.body
app.use(express.json());

//GET - api/movies
app.get('/api/v1/movies', (req, res) => {
    res.status(200).json({
        status: 'success',
        count: movies.length,
        res: {
            content: movies
        }
    })
});

//Route parameters ex:1
app.get('/api/v1/movies/:id', (req, res) => {
    console.log(req.params); //params of a request { id: '5' } object of a request

    const id = +req.params.id;             //added + to convert string id into number

    const movie = movies.find((movie) => movie.id === id);

    //if any movie with id is not found
    if (!movie) {
        return res.status(404).json({                               //return it otherwise it gives error
            status: 'Failed',
            message: 'Movie with ID ' + id + ' is not found'
        })
    }

    //sending movie in the response if movie is present in database
    res.status(200).json({
        status: 'Success',
        data: {
            movie: movie
        }
    })
});

//Route parameters ex:2
//pass any number of parameters
//if we want to make parameter optional /:id?/:name?
app.get('/api/v1/movies/:id/:name', (req, res) => {
    console.log(req.params); //{ id: '8', name: 'fav' }

    res.send('Test Movie');
})

app.patch('/api/v1/movies/:id', (req, res) => {
    console.log(req.params.id);

    const id = +req.params.id;

    let movieToUpdate = movies.find((movie) => movie.id === id);

    if (!movieToUpdate) {
        return res.status(404).json({
            status: 'Failed',
            message: 'No Movie With ID ' + id + ' is Found'
        })
    }

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

})

app.put('/api/v1/movies/:id', (req, res) => {
    console.log(req.params.id);

    const id = +req.params.id;

    let movieToUpdate = movies.find((movie) => movie.id === id);

    if (!movieToUpdate) {
        return res.status(404).json({
            status: 'Failed',
            message: 'No Movie With ID ' + id + ' is Found'
        })
    }

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

})


app.post('/api/v1/movies', (req, res) => {
    // console.log(req.body);
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

    // res.send('created');
})

app.delete('/api/v1/movies/:id', (req, res) => {
    const id = +req.params.id;

    const movieToDelete = movies.find((movie) => movie.id === id);

    if (!movieToDelete) {
        return res.status(404).json({
            status: 'Failed',
            message: 'No Movie with ID ' + id + ' is Found'
        })
    }

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

})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server is listing on port ${PORT}`);
})