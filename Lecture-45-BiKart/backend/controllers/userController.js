const User = require("../Model/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()
// ================= CREATE USER (REGISTER) =================
exports.createUser = async (req,res) => {
    try {

        const { name, email, password, mobileNumber, image } = req.body

        const user = await User.create({
            name,
            email,
            password,
            mobileNumber,
            image
        })

        res.status(201).json({
            success:true,
            user
        })

    } catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}



// ================= LOGIN USER =================
exports.loginUser = async (req, res) => {
    try {

        const { email, password } = req.body

        // check user exists
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" })
        }

        // compare password
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Password !" })
        }

        // generate token
        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT_KEY,
            { expiresIn: "1hr" }
        )

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin
            }
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}