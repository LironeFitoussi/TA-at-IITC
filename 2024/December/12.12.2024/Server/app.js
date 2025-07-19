const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

app.use(express.json());
dotenv.config();

// Routes Imports
const jokesRoutes = require("./routes/jokesRoutes");


mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB");
})

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/say-my-name", (req, res) => {
  const { name } = req.query;
  res.send(`Hello ${name}`);
});

app.use("/jokes", jokesRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
