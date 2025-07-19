// Import the Express module
const express = require('express');

// Initialize the Express app
const app = express();

// Define the port number
const PORT = 3000;

// Route 1: Basic text response
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route 2: JSON response with user data
app.get('/user', (req, res) => {
  res.json({
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});