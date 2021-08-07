const express = require("express");
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
} = require("../controller/authController");
const { getAllUsers, getUser } = require("../controller/userController");
const { protectedRoutes } = require("../middleware/projectedRoute");

const userRouter = express.Router();

// Auth Route

/* userRouter.use(protectedRoutes)
 */ 
userRouter.post("/signup", signup);
userRouter.post("/login", login);

/* userRouter.post("/forgotPassword", forgotPassword);
userRouter.post("/resetPassword", resetPassword); */

userRouter.route("/:userId").get(getUser);

module.exports = userRouter;
