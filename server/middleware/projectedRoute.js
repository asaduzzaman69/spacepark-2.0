const jwt = require("jsonwebtoken");
const { promisify } = require('util')
const User = require("../model/userModal");
const { AppError } = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const protectedRoutes = catchAsync(async (req, res, next) => {
  let token;
  if (req.headers.authorization  && req.headers.authorization.startsWith('Bearer')) {
      token =  req.headers.authorization.split(" ")[1];
      console.log(req.headers.authorization.split(' '))
  }
  console.log(token)

 
  if(!token) {
    return next(new AppError('You are not logged In', 401))
  }
  
  const decode = await promisify(jwt.verify)(token, process.env.JWT_PRIVATE_KEY);

  const user = await User.findOne({_id: decode._id}).select('+passwordChangedAt')

  if(!user) {
      next(new AppError('The user has been deleted'))
  }

  const isPasswordChanged  = user.isPasswordChanged(decode.iat)

  if(isPasswordChanged) {
    next(new AppError('Your password has been changed recently', 401))
  }



  req.user = user;
  console.log(req.user._id)
  next();


});

module.exports = {
  protectedRoutes,
};
