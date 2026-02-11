require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/db');

connectDB();
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/',(req, res)=>{
    res.json({message: "Welcome to BiKart API."});
});

//product Routes
app.use('/api/product/', productRoutes);

// Start server
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
