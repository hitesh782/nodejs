const express = require('express');
const morgan = require('morgan');
const moviesRouter = require('./Routes/moviesRoutes');

const app = express();

const logger = (req, res, next) => {
    console.log(req);
    next();
}

app.use(express.json());
app.use(morgan('dev'));
app.use(logger);
app.use((req, res, next) => {
    req.requestedAt = new Date().toUTCString();
    next();
})
app.use('/api/v1/movies', moviesRouter);

module.exports = app;
