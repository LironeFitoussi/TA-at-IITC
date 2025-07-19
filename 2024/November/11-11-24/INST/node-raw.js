// Import the HTTP module
const http = require('http');

// Define the port number
const PORT = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Check the URL path
  if (req.url === '/' && req.method === 'GET') {
    // Set the response header for text response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
  } else if (req.url === '/user' && req.method === 'GET') {
    // Set the response header for JSON response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    // Send a JSON object as the response
    res.end(JSON.stringify({
      name: 'John Doe',
      age: 30,
      email: 'johndoe@example.com'
    }));
  } else {
    // Handle 404 Not Found
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});