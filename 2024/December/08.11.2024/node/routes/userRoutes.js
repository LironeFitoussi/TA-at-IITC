const express = require("express");
const router = express.Router();

// Import the authMiddleware
const authMiddleware = require("../utils/mw/auth.js");
const errorMiddleware = require("../utils/mw/error.js");
const checkBody = require("../utils/mw/checkBody.js");
// router.use(authMiddleware);

// Define your routes here
router.get("/", (req, res, next) => {
  const randomChoice = Math.floor(Math.random() * 10);

  try {
    if (randomChoice < 5) {
      const error = new Error("Server Error");
      error.status = 403;
      throw error;
    }
    res.send("User route - GET");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/", checkBody ,(req, res) => {
  
 console.log(req.body);

  res.send("User route - POST");
});

router.put("/", (req, res) => {
  res.send("User route - PUT");
});

router.delete("/", (req, res) => {
  res.send("User route - DELETE");
});

// user Id route
router.get("/:id", (req, res) => {
  res.send(`User route - GET with id ${req.params.id}`);
});

router.get("/name/:name", (req, res) => {
  res.send(`User route - GET with name ${req.params.name}`);
});

// For all other routes
router.all("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

router.use(errorMiddleware);
module.exports = router;
