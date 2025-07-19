const express = require('express');
const {
    getAllJokes,
    createJoke,
    getJokeById,
    updateJoke,
    deleteJoke,
    getRandomJoke
} = require('../controllers/jokesController.js');

const router = express.Router();

// Get all jokes
router.get('/', getAllJokes);

// Create a new joke
router.post('/', createJoke);

// Get a random joke
router.get('/random', getRandomJoke);

// Get a single joke by ID
router.get('/:id', getJokeById);

// Update a joke by ID
router.put('/:id', updateJoke);

// Delete a joke by ID
router.delete('/:id', deleteJoke);

module.exports = router;