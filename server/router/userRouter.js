const express = require("express");
const { signup } = require("../controller/authController");
const { getAllUsers } = require("../controller/userController");

const userRouter = express.Router();


// Auth Route

userRouter.post('/signup', signup)
/* router.post('/signup', login)
 */userRouter.route("/").get(getAllUsers);


 module.exports = userRouter;
