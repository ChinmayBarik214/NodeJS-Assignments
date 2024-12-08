// routes/authRoutes.js
const express = require("express");
const router = express.Router();

// In-memory session object to simulate session
/*
{
  user: "admin"
}
*/
let session = {};

// Login Route
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Basic authentication logic
  if (username === "admin" && password === "password123") {
    session.user = username; // Simulating session by storing the user
    return res.status(200).send("Login successful!");
  }

  return res.status(401).send("Invalid username or password");
});

// Logout Route
router.post("/logout", (req, res) => {
  if (session.user) {
    delete session.user; // Clear the session by removing the user
    return res.status(200).send("Logout successful!");
  }

  return res.status(400).send("No active session found");
});

module.exports = router;
