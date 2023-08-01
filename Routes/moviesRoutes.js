const express = require('express');
const moviesController = require('./../Controllers/moviesControllers');

const router = express.Router();

router.route('/')
    .get(moviesController.getAllMovies)
    .post(moviesController.createMovie)


router.route('/:id')
    .get(moviesController.getMovieById)
    .patch(moviesController.patchMovieById)
    .put(moviesController.putMovieById)
    .delete(moviesController.deleteMovieById)

module.exports = router;