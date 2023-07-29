const http = require('http');

const fs = require('fs');

const html = fs.readFileSync('./template/index.html', 'utf-8');


//1 : creating a server
const server = http.createServer((req, res) => {
    // res.end("hello from the server");
    // res.end("<h1>hello from the server</h1>");
    res.end(html);
    console.log('a new request received');
    // console.log(req);
    console.log(res);
})

//2 : start the server
server.listen(5000, '127.0.0.1', () => {
    console.log('server has started');
})
