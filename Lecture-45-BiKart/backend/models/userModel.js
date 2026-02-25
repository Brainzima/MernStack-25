const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

    image: {
        type: String
    },

    mobileNumber: {
        type: String,
        required: true,
        unique: true
    }

},
{
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User