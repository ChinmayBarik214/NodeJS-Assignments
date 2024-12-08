const express = require("express");
const employeeRouter = require("./routes/employeeRouter");

const app = express();

// Middleware
app.use(express.json());

// Use the employeeRouter for handling employee routes
app.use("/employees", employeeRouter);

// Start the server
app.listen(3000);
