const User = require("../models/User");

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
        const newUser = await User(req.body);
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