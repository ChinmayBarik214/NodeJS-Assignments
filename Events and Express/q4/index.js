// app.js
const express = require("express");
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Import the routes from the authRoutes file
const authRoutes = require("./routes/authRoutes");

// Use the imported routes under the "/auth" path
app.use("/auth", authRoutes);

// Start the server
app.listen(3000);
