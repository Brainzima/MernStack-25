const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")

const app = express()
app.use(cors())
app.use(express.json())

const MONGO_URI = "mongodb://localhost:27017/firstdb"
mongoose.connect(MONGO_URI)
    .then(() => console.log("Connected to MongoDB."))
    .catch((err) => console.log(err))

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: String
})
const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
    res.json("Welcome to Server through MongoDB")
})

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    }catch(err){
        res.json({err:'hola'})
    }
})
app.post('/api/users', async (req, res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            role: req.body.role
        })
        newUser.save()
    }catch(err){
        res.json({err:'hola'})
    }
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})