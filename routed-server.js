const http = require('http');

const fs = require("fs");

const html = fs.readFileSync('./template/index.html', 'utf-8');

//1 : creating a server
const server = http.createServer((req, res) => {
    let path = req.url;
    // res.end(path);

    if (path === '/' || path.toLocaleLowerCase() === '/home') {
        // res.end('you are on home page');
        res.end(html);
    }

    else if (path.toLocaleLowerCase() === '/about') {
        // res.end('you are on about page');
        res.end(html);
    }
    else {
        res.end('there is no path match');
    }

})

//2 : start the server
server.listen(5000, '127.0.0.1', () => {
    console.log('server has started');
})
