const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/api/employees', employeeController.getAllEmployees);

module.exports = router;