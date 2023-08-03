const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./routes-tut');  // put app after dotenv config

//enviroment variables are global variables

// console.log(app.get('env'));  //development (default environment)

console.log(process.env); //print all environment variables

//connecting to the database
mongoose.connect(process.env.CONN_STR, {
    useNewUrlParser: true
}).then((conn) => {
    console.log(conn);
    console.log('DB connected succesfully');
}).catch((err) => {
    console.log('some error has occured when connecting to the database');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is listing on port ${PORT}`);
})


//SET NODE_ENV=development   (in terminal)