const express = require("express"); // Import Express framework for building server applications.
const bcrypt = require("bcrypt"); // Library for hashing passwords.
const cors = require("cors"); // Middleware for enabling CORS (Cross-Origin Resource Sharing).
const dotenv = require("dotenv"); // Library to load environment variables from a `.env` file.
const mongoose = require("mongoose"); // MongoDB library for connecting to the database.
const jwt = require("jsonwebtoken"); // Library for generating and verifying JSON Web Tokens (JWT).

const app = express(); // Create an instance of the Express application.

const userModel = require("./models/User.js"); // Import the user model for interacting with the `users` collection in MongoDB.

const PORT = 3000; // Define the server port.
const saltRounds = 10; // Define the number of hashing rounds for bcrypt.
const hashKey = "PeogG3lBZpSErxuBgrAA0Y6ermcD04XGGeTn7uUYfLvOFEvdaW"; // Secret key used to enhance password security (could be moved to environment variables for better security).

// Middleware Configuration
dotenv.config(); // Load environment variables from `.env` file.
app.use(express.json()); // Middleware to parse JSON requests.
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from the frontend URL.
    credentials: true, // Enable credentials (e.g., cookies) in cross-origin requests.
  })
);

console.log(userModel); // Debugging: Log the imported user model to ensure it's loaded correctly.

// Database Connection
mongoose.connect(process.env.DB_URI).then(() => {
  console.log("Successfully Connected to DB"); // Log success message when connected to the database.
});

// Routes
/**
 * Root route - Basic test endpoint to check if the server is running.
 */
app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hello from the server!", // Simple greeting message.
  });
});

/**
 * Route: POST /sign-up
 * Description: Handles user registration. Hashes the password and saves the user in the database.
 */
app.post("/sign-up", async (req, res) => {
  try {
    // Destructure the request body to extract user details.
    const { username, email, password } = req.body;

    // Hash the password using bcrypt, combining the hashKey for additional security.
    const hashedPassword = await bcrypt.hash(password + hashKey, saltRounds);

    // Create a new user document using the `userModel`.
    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save(); // Save the new user to the database.

    return res.status(201).send({
      message: "You are one of us", // Success message.
    });
  } catch (error) {
    console.log(error); // Log any errors to the console for debugging.
    res.status(500).send(error); // Send a 500 response if an error occurs.
  }
});

/**
 * Route: POST /sign-in
 * Description: Authenticates a user. Validates the email and password, then returns a JWT token.
 */
app.post("/sign-in", async (req, res) => {
  try {
    const { email, password } = req.body; // Extract email and password from the request body.

    // Find the user in the database by email.
    const user = await userModel.findOne({ email });

    if (!user) {
      // If user does not exist, send a 404 response.
      return res.status(404).send({
        message: "No such user",
      });
    }

    // Compare the provided password with the hashed password in the database.
    const isCorrectPassword = await bcrypt.compare(
      password + hashKey,
      user.password
    );

    if (isCorrectPassword) {
      // Generate a JWT token if the password is correct.
      let jwtSecretKey = process.env.JWT_SECRET_KEY;

      const token = jwt.sign(
        {
          email: user.email,
          username: user.username,
        },
        jwtSecretKey,
        { expiresIn: "1h" } // Set the token to expire in 1 hour.
      );

      // Set the JWT as a cookie in the response.
      res.cookie("jwt", token, {
        httpOnly: false, // NOTE: For production, set this to `true` to prevent JavaScript access.
        secure: true, // Ensure the cookie is sent over HTTPS.
        sameSite: "strict", // Prevent cross-site requests.
        maxAge: 3600000, // Cookie lifespan of 1 hour (in milliseconds).
      });
      res.json({ message: "Logged in successfully" }); // Send success message.
    } else {
      // Send a 401 response if the password is incorrect.
      return res.status(401).send({
        error: "Invalid credentials",
      });
    }
  } catch (error) {
    res.status(500).send(error); // Send a 500 response if an error occurs.
  }
});

/**
 * Route: GET /users/get-self
 * Description: Verifies the user's JWT token and returns the decoded information.
 */
app.get("/users/get-self", async (req, res) => {
  try {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    const token = req.headers.authorization.split(" ")[1]; // Extract the token from the `Authorization` header.
    const decoded = await jwt.verify(token, jwtSecretKey); // Verify and decode the token.
    res.send(decoded); // Send the decoded token information as the response.
  } catch (error) {
    console.log(error); // Log any errors to the console for debugging.
    res.status(500).send(error); // Send a 500 response if an error occurs.
  }
});

/**
 * Route: GET /users/:id
 * Description: Fetches user information based on the provided user ID (currently just returns the ID).
 */
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extract the `id` from route parameters.
    res.send({
      id, // Respond with the extracted ID.
    });
  } catch (error) {
    console.log(error); // Log any errors to the console for debugging.
    res.status(500).send(error); // Send a 500 response if an error occurs.
  }
});

// Start the server and listen on the specified port.
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
