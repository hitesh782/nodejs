const express = require('express');
// const moviesController = require('./../Controllers/moviesControllers');
const moviesControllerDb = require('./../Controllers/moviesControllerDb')

const router = express.Router();

//executes for those request which contains id parameter
//middleware
// router.param('id', (req, res, next, value) => {
//     console.log('Movie id is ' + value);
//     next();
// })

// router.param('id', moviesController.checkId)

// router.route('/')
//     .get(moviesController.getAllMovies)
//     .post(moviesController.validateBody, moviesController.createMovie)


// router.route('/:id')
//     .get(moviesController.getMovieById)
//     .patch(moviesController.patchMovieById)
//     .put(moviesController.putMovieById)
//     .delete(moviesController.deleteMovieById)

router.route('/')
    .get(moviesControllerDb.getAllMovies)
    .post(moviesControllerDb.createMovie)


router.route('/:id')
    .get(moviesControllerDb.getMovieById)
    .patch(moviesControllerDb.patchMovieById)
    .put(moviesControllerDb.putMovieById)
    .delete(moviesControllerDb.deleteMovieById)

module.exports = router;