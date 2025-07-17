import express from "express";
import authRouter from "./auth/auth.routes.js";
import postsRouter from "./posts/posts.routes.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cors from 'cors'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Global Middlewares
app.use(express.json());
app.use(cors('http://localhost:5173'))

// Routes
app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);

// Serve static files from public directory
app.use(express.static(path.join(__dirname, "public")));

// Serve index.html for the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
