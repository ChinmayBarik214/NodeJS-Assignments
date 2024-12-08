const express = require("express");
const router = express.Router();

// Array to store employee data
const employees = [];

// Generate a unique ID starting from 1
let nextEmpId = 1;

// Create a new employee
router.post("/", (req, res) => {
  const { emp_name, project_details, employed_status } = req.body;

  if (!emp_name || !project_details || !employed_status) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const newEmployee = {
    emp_id: nextEmpId++,
    emp_name,
    project_details,
    employed_status,
  };

  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

// Get all employees
router.get("/", (req, res) => {
  res.json(employees);
});

// Get an employee by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const employee = employees.find((emp) => emp.emp_id === parseInt(id));

  if (!employee) {
    return res.status(404).json({ error: "Employee not found." });
  }

  res.json(employee);
});

// Update an employee's details
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { emp_name, project_details, employed_status } = req.body;

  const employee = employees.find((emp) => emp.emp_id === parseInt(id));

  if (!employee) {
    return res.status(404).json({ error: "Employee not found." });
  }

  if (emp_name) employee.emp_name = emp_name;
  if (project_details) employee.project_details = project_details;
  if (employed_status) employee.employed_status = employed_status;

  res.json(employee);
});

// Delete an employee
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = employees.findIndex((emp) => emp.emp_id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: "Employee not found." });
  }

  const deletedEmployee = employees.splice(index, 1);
  res.json({ message: "Employee deleted successfully.", deletedEmployee });
});

module.exports = router;
