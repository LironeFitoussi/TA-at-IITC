const express = require('express');
const checkBody = require('../utils/bodyValidator.js');
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
    res.send('Welcome to the Book Routes');
});

router.get('/details', (req, res) => {
    res.send('Book Details');
});


router.post('/add', checkBody, (req, res) => {
    // Handle adding a new book
    res.send('Add a New Book');
});

router.post('/update', (req, res) => {
    // Handle updating book information
    res.send('Update Book Information');
});

module.exports = router;