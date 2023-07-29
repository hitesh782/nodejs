const http = require('http');

const fs = require("fs");

// const html = fs.readFileSync('./template/index.html', 'utf-8');
const html = fs.readFileSync('./template/index2.html', 'utf-8');

let products = JSON.parse(fs.readFileSync('./data/product.json', 'utf-8'));

//1 : creating a server
const server = http.createServer((req, res) => {
    let path = req.url;
    // res.end(path);

    if (path === '/' || path.toLocaleLowerCase() === '/home') {
        // res.end('you are on home page');

        //for setting the header
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'my-Header': 'hello world'
        });
        // res.end(html);
        res.end(html.replace('{{%CONTENT%}}', 'You are in Home page'))
    }

    else if (path.toLocaleLowerCase() === '/about') {
        // res.end('you are on about page');
        res.writeHead(200);
        // res.end(html);
        res.end(html.replace('{{%CONTENT%}}', 'You are in About page'))
    }
    else if (path.toLocaleLowerCase() === '/contact') {
        // res.end('you are on about page');
        res.writeHead(200);
        // res.end(html);
        res.end(html.replace('{{%CONTENT%}}', 'You are in Contact page'))
    }
    else if (path.toLocaleLowerCase() === '/products') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        // fs.readFile('./data/product.json', 'utf-8', (error, data) => {
        //     let products = JSON.parse(data);
        //     res.end(data)
        // })
        res.end('products page');
        console.log(products);
    }
    else {
        res.writeHead(404);
        res.end('there is no path match');
    }

})

//2 : start the server
server.listen(5000, '127.0.0.1', () => {
    console.log('server has started');
})
