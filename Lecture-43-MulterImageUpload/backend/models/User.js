const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    password: String,
    image: String
});

module.exports = mongoose.model('User', userSchema);