const User = require("../models/User");
const bcrypt = require('bcryptjs');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.createUser = async (req, res) => {
    try {
        const {name, email, role, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User({
            name,
            email,
            role,
            password: hashedPassword
        });
        newUser.save();
        res.status(200).json({message: "User Added."});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if(deletedUser){
            res.status(200).json({message: "User Deleted."});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const newUser = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(newUser){
            res.status(200).json({message: "User Update."});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.find({email: email});
        const dbpass = user.password;
        const isMatch = bcrypt.compare(password, dbpass);
        const msg = isMatch ? 'Login Succcess' : 'Incorrect Password!';
        res.status(200).json({message: msg});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}