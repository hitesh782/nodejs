const http = require('http');


//1 : creating a server
const server = http.createServer((req, res) => {
    res.end("hello from the server");
    console.log('a new request received');
    // console.log(req);
    console.log(res);
})

//2 : start the server
server.listen(5000, '127.0.0.1', () => {
    console.log('server has started');
})
