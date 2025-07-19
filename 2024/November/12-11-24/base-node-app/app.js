const express = require("express");
const mongoose = require('mongoose')
require('dotenv').config()

// Routes Import
const userRoutes = require('./routes/userRoutes.js')

const PORT = 3000
const dbUri = process.env.DB_URI

const app = express()

app.use(express.json())

mongoose.connect(dbUri).then(() => {
    console.log("DB Connected");
})

app.get("/", (req, res) => {
    res.send("Server is Running")
})

app.use('/api/users', userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})