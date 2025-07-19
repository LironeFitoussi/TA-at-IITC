const express = require("express");
const morgan = require("morgan");
const app = express();

// Define the port number
const PORT = process.env.PORT || 3000;

// Routes Imports
const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Middleware to log incoming requests
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Use the userRoutes
app.use("/users", userRoutes);
app.use("/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
