const express = require('express');
const app = express();
const PORT = 3000

// Routes Imports
const animalsRoutes = require('./routes/animalsRoutes.js')

// Always use this method to parse your requests
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Server is OK")
})

app.use('/animals', animalsRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})