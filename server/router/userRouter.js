const express = require("express");
const { signup,login } = require("../controller/authController");
const { getAllUsers } = require("../controller/userController");
const { protectedRoutes } = require("../middleware/projectedRoute");

const userRouter = express.Router();


// Auth Route



userRouter.use(protectedRoutes)
userRouter.post('/signup', signup)
userRouter.post('/login', login)



 module.exports = userRouter;
