const express = require('express');

const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
    res.send('Welcome to the User Routes');
});

router.get('/profile', (req, res) => {
    res.send('User Profile');
});

router.post('/login', (req, res) => {
    // Handle login logic
    res.send('User Login');
});

router.post('/register', (req, res) => {
    // Handle registration logic
    res.send('User Registration');
});

module.exports = router;