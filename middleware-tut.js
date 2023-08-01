const express = require('express');
const app = express();

const logger = (req, res, next) => {
    console.log('custom middleware called');
    next();                    //must to call next method at end 
}

//middlewares (inbuilt + custom)
//we can any numbers of middlewared in our code
//we can use it via app.use 
//it is executed in the order they are specified
//request cannot process further until the execution of the current middlewares
//middleware function is called in every api request
app.use(express.json());
app.use(logger);
app.use((req, res, next) => {
    req.requestedAt = new Date().toISOString();
    next();
})

app.get('/api/v1/movies', (req, res) => {

    console.log(req);
    console.log('/api/v1/movies api is called');

    let movies = ["first", 'second', 'third'];

    // res.send('api called');
    res.status(200).json({
        status: 'Success',
        requestedAt: req.body.requestedAt,
        data: {
            movies: movies
        },
        totalElements: movies.length
    })
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
})