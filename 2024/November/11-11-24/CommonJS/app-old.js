const http = require('http')

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === "GET") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Hello World!")
    } else if (req.url === '/user' && req.method === "GET") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            name: 'John Doe',
            age: 30,
            email: 'johndoe@example.com'
        }))
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})



















// const { add, sub, divide, multiply } = require('./math.js')

// console.log("Hello World");

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(divide(1, 2));
// console.log(multiply(1, 2));

