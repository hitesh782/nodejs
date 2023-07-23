const fs = require('fs');

//it is run in background, not in main thread, so that is non blocking
fs.readFile('./files/input.txt', 'utf-8', (err, data) => {
    console.log(data);
})

console.log('reading file...');