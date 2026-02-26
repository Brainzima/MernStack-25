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

app.post('/create-order', async (req, res) => {
  const { amount } = req.body;
  const instance = new Razorpay({ 
    key_id: process.env.API_KEY, 
    key_secret: process.env.API_SECRET 
  });

  const options = {
    amount: parseInt(amount) * 100,  // Convert to paise
    currency: "INR",
    receipt: `receipt#${Date.now()}`
  };

  try {
    const order = await instance.orders.create(options);
    res.json(order);  // Return full order object with id
  } catch (error) {
    res.status(500).json({ error: "Order Creation Failed", details: error.message });
  }
});

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
    // console.log(process.env.API_KEY)
    // console.log(process.env.API_SECRET)
});
