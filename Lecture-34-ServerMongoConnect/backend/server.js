const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("YOUR_MONGO_CPNNECTION_STRING")
    .then(() => console.log("MongoDb connected.."))
    .catch((err) => console.log(err));

const employeeSchema = mongoose.Schema({
    name: String,
    email: String,
    role: String
});

const Employee = mongoose.model('Employee', employeeSchema);

app.get('/', (req, res) => {
    res.json({ message: "Welcome to Server." });
});

app.get('/api/employees', async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
});

app.post('/api/employees',async(req,res)=>{
    const newEmployee = await Employee(req.body);
    newEmployee.save();
    res.json({message:'Data Added..'});
})

app.delete('/api/employees/:id',async(req,res)=>{
    const id = req.params.id;
    await Employee.findByIdAndDelete(id)
    res.json({message:"Deleted Data."});
})


app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});