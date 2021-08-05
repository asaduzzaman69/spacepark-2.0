const express = require("express");
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
} = require("../controller/authController");
const { getUser } = require("../controller/userController");
const { protectedRoutes } = require("../middleware/projectedRoute");

const userRouter = express.Router();

// Auth Route

userRouter.use(protectedRoutes)

userRouter.post("/signup", signup);
userRouter.post("/login", login);

userRouter.post("/updateMyPassword", protectedRoutes, forgotPassword);
userRouter.post("/forgotPassword", forgotPassword);
userRouter.post("/resetPassword/:token", resetPassword);

updatePassword
userRouter.route("/:userId").get(getUser);

module.exports = userRouter;
