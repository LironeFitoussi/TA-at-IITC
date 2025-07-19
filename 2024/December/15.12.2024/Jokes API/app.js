const express = require('express');
const mongoose = require('mongoose');
const jokesRouter = require('./routes/jokeRoutes');
const dotenv = require('dotenv');
// const Joke = require('./models/Joke.model');

dotenv.config();

const app = express();
const port = 3000;

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
});

app.use(express.json())

app.use('/api/v1/jokes', jokesRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});