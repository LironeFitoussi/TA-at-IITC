const express = require('express');
const router = express.Router();

// Import the authMiddleware
const authMiddleware = require('../utils/mw/auth.js');

router.use(authMiddleware)

// Define your routes here
router.get('/', async (req, res) => {
    try {
        res.send('Book route - GET');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

router.post('/', (req, res) => {
    res.send('Book route - POST');
})

router.put('/', (req, res) => {
    res.send('Book route - PUT');
})

router.delete('/', (req, res) => {
    res.send('Book route - DELETE');
})

// book Id route
router.get('/:id', (req, res) => {
    res.send(`Book route - GET with id ${req.params.id}`);
});

router.get('/title/:title', (req, res) => {
    res.send(`Book route - GET with title ${req.params.title}`);
});

module.exports = router;