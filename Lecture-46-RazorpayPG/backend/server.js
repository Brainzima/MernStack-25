require('dotenv').config();
const express = require("express");
const cors = require("cors");
const Razorpay = require('razorpay');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.get('/', (req, res) => {
    res.json({ message: "Welcome to PG Setup." });
});

app.post('/create-order', async(req, res) => {
    var instance =await new Razorpay({ key_id: process.env.API_KEY, key_secret: process.env.API_SECRET })

    var options = {
        amount: 50000,  // Amount is in currency subunits. 
        currency: "INR",
        receipt: "order_rcptid_11"
    };
    try {
       await instance.orders.create(options)
        res.json({ message: "Order Created"});    
    } catch (error) {
        res.json({ message: "Order Creation Failed" });
    }

    

});

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
