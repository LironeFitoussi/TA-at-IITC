// Day Summary - MVC Examples in Node.js
// Topics: MVC Structure, Role of Each Component, Basic Code Examples
// =======================================

// 1. Basic Model Example
// ----------------------------
// The Model is responsible for managing data and interacting with the database
const users = []; // Mock database for user data

// Function to add a new user
function addUser(user) {
  users.push(user);
}

// Function to retrieve all users
function getAllUsers() {
  return users;
}

// Exporting functions for external use
module.exports = {
  addUser,
  getAllUsers,
};

// =======================================

// 2. Basic Controller Example
// --------------------------------
// The controller handles client requests, interacts with the model, and returns JSON responses
const usersModel = require('./models/userModel'); // Importing the user model

// Function to handle request for creating a new user
function createUser(req, res) {
  const user = req.body; // Receiving data from the request
  usersModel.addUser(user);
  res.status(201).json({ message: 'User added successfully!' });
}

// Function to handle request to get all users
function getAllUsers(req, res) {
  const users = usersModel.getAllUsers();
  res.status(200).json(users);
}

// Exporting functions for use in routes
module.exports = {
  createUser,
  getAllUsers,
};

// =======================================

// 3. Basic Routes Example
// -----------------------------------
// Routes define the entry points to the application and link requests to controller functions
const express = require('express');
const userController = require('./controllers/userController'); // Importing the user controller

const router = express.Router();

// POST route to add a new user
router.post('/users', userController.createUser);

// GET route to retrieve all users
router.get('/users', userController.getAllUsers);

module.exports = router;

// =======================================

// 4. Main App File (app.js)
// -----------------------
// Connects routes, controllers, and models, and starts the server
const express = require('express');
const userRoutes = require('./routes/userRoutes'); // Importing user routes

const app = express();
app.use(express.json()); // Supporting JSON in requests

// Connecting routes to the app
app.use('/api', userRoutes);

// Starting the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
