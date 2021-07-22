const jwt = require("jsonwebtoken");
const User = require("../model/userModal");
const { AppError } = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const protectedRoutes = catchAsync(async (req, res, next) => {
  let token;

  if (req.headers.authorization  && req.headers.authorization.startsWith('Bearer')) {
      token =  req.headers.authorization.split(" ")[1];
  }
  const decode = await jwt.verify(token, process.env.JWT_PRIVATE_KEY);
  const user = User.findOne({_id: decode._id})

  if(!user) {
      next(new AppError('The user has been deleted'))
  }
  next();
});

module.exports = {
  protectedRoutes,
};
