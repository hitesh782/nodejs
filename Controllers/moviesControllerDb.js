const Movie = require('./../models/movieModel');


exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();

        res.status(200).json({
            status: 'Success',
            length: movies.length,
            data: {
                // movies:movies 
                movies
            }
        })
    }
    catch (err) {
        res.status(404).json({
            status: 'Fail',
            message: err.message
        })
    }
}

exports.getMovieById = async (req, res) => {
    try {
        //   const movie = await Movie.find({_id:req.params.id})
        const movie = await Movie.findById(req.params.id);

        res.status(200).json({
            status: 'Success',
            data: {
                movie
            }
        })
    }
    catch (err) {
        res.status(404).json({
            status: 'Fail',
            message: err.message
        })
    }
}

exports.patchMovieById = async (req, res) => {
    try {

        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        res.status(200).json({
            status: 'Success',
            data: {
                movie: updatedMovie
            }
        })

    } catch (err) {
        res.status(404).json({
            status: 'Fail',
            message: err.message
        })
    }
}

exports.putMovieById = async (req, res) => {
    try {

        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        res.status(200).json({
            status: 'Success',
            data: {
                movie: updatedMovie
            }
        })

    } catch (err) {
        res.status(404).json({
            status: 'Fail',
            message: err.message
        })
    }
}

exports.createMovie = async (req, res) => {
    // const testMovie = new Movie({});
    // testMovie.save();

    try {
        const movie = await Movie.create(req.body);

        res.status(201).json({
            status: 'Success',
            data: {
                movie
            }
        })

    }
    catch (err) {
        res.status(404).json({
            status: 'Fail',
            message: err.message
        })
    }
}

exports.deleteMovieById = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'Success',
            data: null
        })

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
}