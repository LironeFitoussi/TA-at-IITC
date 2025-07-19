const express = require('express');
const router = express.Router();

const { getRandomJoke } = require("../controllers/jokesController");

router.get("/random", getRandomJoke);

module.exports = router;