const express = require("express");
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
} = require("../controller/authController");
const { getUser, getAllUsers, addFriend, deleteFriendsRequest } = require("../controller/userController");
const { protectedRoutes } = require("../middleware/projectedRoute");
const { friendsRouter } = require("./friendsRouter");

const userRouter = express.Router();


userRouter.use('/:userId/friends', friendsRouter)

userRouter.post("/signup", signup);
userRouter.post("/login", login);

userRouter.post("/updateMyPassword", protectedRoutes, forgotPassword);
userRouter.post("/forgotPassword", forgotPassword);
userRouter.post("/resetPassword/:token", resetPassword);


userRouter
.route("/")
.get(getAllUsers);
userRouter.route("/:userId").get(getUser);
userRouter
.route("/:userId/friends")
.patch(protectedRoutes, addFriend)
.delete(protectedRoutes, deleteFriendsRequest);

module.exports = userRouter;
