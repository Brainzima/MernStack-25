const express = require("express")
const router = express.Router()

const userController = require("../Controller/userController")

// ================= USER ROUTES =================

// register / create user
router.post("/register", userController.createUser)

// login user
router.post("/login", userController.loginUser)

module.exports = router