// console.log('hello');
// console.log('hello world from the above');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Please enter your name: ", (name) => {
    console.log("you entered: " + name);
    rl.close();
})

//called when interface will closed
rl.on('close', () => {
    console.log('interface closed');
    process.exit(0);
})