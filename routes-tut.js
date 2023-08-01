const express = require('express');
const app = express();

const moviesRouter = require('./Routes/moviesRoutes');

app.use(express.json());
app.use('/api/v1/movies', moviesRouter);

module.exports = app;
