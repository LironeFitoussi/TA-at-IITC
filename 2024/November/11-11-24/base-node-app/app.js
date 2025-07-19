const express = require("express");
const mongoose = require('mongoose')
require('dotenv').config()


// Models Import
const userSchema = require('./models/userModel.js')

const PORT = 3000
const dbUri = process.env.DB_URI

const app = express()

app.use(express.json())

mongoose.connect(dbUri).then(() => {
    console.log("DB Connected");
})

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})