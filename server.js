
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./routes-tut');  // put app after dotenv config

//enviroment variables are global variables

// console.log(app.get('env'));  //development (default environment)

console.log(process.env); //print all environment variables

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is listing on port ${PORT}`);
})


//SET NODE_ENV=development   (in terminal)