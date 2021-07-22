const express = require("express");
const { signup,login } = require("../controller/authController");
const { getAllUsers } = require("../controller/userController");

const userRouter = express.Router();


// Auth Route

userRouter.post('/signup', signup)
userRouter.post('/login', login)
/*  userRouter.route("/").get(getAllUsers);
 */

 module.exports = userRouter;
