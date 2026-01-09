const Employee = require("../models/Employee");

exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.createEmployee = async (req, res) => {
    try {
        const newEmployee = await Employee(req.body);
        newEmployee.save();
        res.status(200).json({message: "Employee Added."});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.deleteEmployee = async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        if(deletedEmployee){
            res.status(200).json({message: "Employee Deleted."});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}