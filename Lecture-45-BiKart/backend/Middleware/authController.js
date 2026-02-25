import User from '../Model/userModel';
import jwt from 'jsonwebtoken';

// Generate JWT Token
const generateToken = (id, isAdmin) => {
    return jwt.sign(
        { id, isAdmin },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE }
    );
};

// @desc    Register user
// @route   POST /api/user/register
// @access  Public
export const register = async (req, res, next) => {
    try {
        const { name, email, password, mobileNumber } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({
            $or: [{ email }, { mobileNumber }]
        });

        if (existingUser) {
            if (existingUser.email === email) {
                return res.status(400).json({
                    success: false,
                    message: 'Email already registered'
                });
            }
            if (existingUser.mobileNumber === mobileNumber) {
                return res.status(400).json({
                    success: false,
                    message: 'Mobile number already registered'
                });
            }
        }

        // Create user
        const userData = {
            name,
            email,
            password,
            mobileNumber
        };

        // Add image if uploaded
        if (req.file) {
            userData.image = req.file.filename;
        }

        const user = await User.create(userData);

        // Generate token
        const token = generateToken(user._id, user.isAdmin);

        res.status(201).json({
            success: true,
            message: 'Registration successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                mobileNumber: user.mobileNumber,
                image: user.image,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt
            }
        });

    } catch (error) {
        next(error);
    }
};