require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB is connected.");
}).catch((err)=>console.log(err))

// Routes
app.get('/',(req, res)=>{
    res.json({message: "Welcome to MVC Setup."});
});

// Employee routes - use directly with app
app.use('/api/employees', employeeRoutes);

// Start server
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
