const readline = require('readline');
const fs = require('fs');

//read file synchronously
let text = fs.readFileSync('./files/input.txt', 'utf-8');

console.log(text)


//javascript is a single threaded language
//sychronous code is a blocking code
let content = `this content will be write in the output.txt file\nand data read from the input.txt: ${text}\nDate created: ${new Date()}`
fs.writeFileSync('./files/output.txt', content);
