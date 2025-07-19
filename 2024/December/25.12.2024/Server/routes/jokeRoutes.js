const express = require('express');
const {
    getAllJokes,
    createJoke,
    getJokeById,
    updateJoke,
    deleteJoke,
    getRandomJoke,
    getJokeByAuthorId
} = require('../controllers/jokesController.js');

const router = express.Router();

// Get all jokes
//? DONE: Add to Postman
router.get('/', getAllJokes);

// Create a new joke
//? DONE: Add to Postman
router.post('/', createJoke);

// Get a random joke
//? DONE: Add to Postman
router.get('/random', getRandomJoke);

// Get Joke by author (User) id
// TODO: Add to Postman
router.get('/user/:id', getJokeByAuthorId)

// Get a single joke by ID
//? DONE: Add to Postman
router.get('/:id', getJokeById);

// Update a joke by ID
//? DONE: Add to Postman
router.put('/:id', updateJoke);

// Delete a joke by ID
//? DONE: Add to Postman
router.delete('/:id', deleteJoke);

module.exports = router;