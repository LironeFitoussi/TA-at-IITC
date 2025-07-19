const express = require("express");
const morgan = require('morgan')
const auth = require('./utils/auth.js')
const app = express(); // create an express app

// Import Routes
const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");
const logger = require('./utils/logger')

app.use(express.json())
// app.use(logger)
app.use(morgan("tiny"))
// app.use(auth)
app.use("/users", userRoutes);
app.use("/books", bookRoutes);

app.get("/", auth, logger ,(req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
