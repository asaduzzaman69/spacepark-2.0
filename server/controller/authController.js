const User = require("../model/userModal");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");
const { AppError } = require("../utils/appError");

const signup = catchAsync(async (req, res, next) => {
  const { displayName, password, avatar, email } = req.body;
  const tagName = `@${displayName.split(" ").join("")}`;

  if (!displayName && !password && !email) {
    next(new AppError("Please Provide neccesary data", 500));
  }
  const newUser = new User({
    displayName,
    password,
    avatar,
    email,
    tagName,
  });

  const result = await newUser.save();

  const token = await jwt.sign(
    { userName: result.displayName, _id: result._id },
    process.env.JWT_PRIVATE_KEY,
    {
      expiresIn: "1d",
    }
  );

  res.status(201).json({
    status: "success",
    token,
    id: result._id,
  });
});

const login = catchAsync(async (req, res, next) => {

  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please provide email and password"));
  }

  const user = await User.findOne({ email: req.body.email }).select(
    "+password"
  );

  if (!user || !(await freshUser.comparePassword(user.password, password))) {
    return next(AppError("Incorrect email or password", 400));
  }

  const token = jwt.sign(
    { userName: freshUser.userName, _id: freshUser._id },
    process.env.JWT_PRIVATE_KEY,
    {
      expiresIn: "1d",
    }
  );

  res.status(200).json({
    status: "success",
    token,
  });

});


const forgotPassword = catchAsync( async (req,res,next) => {

  const { email } = req.body;

  if(!email) {
    next(new AppError('Please Provide an email'))
  }

  const user = await User.findOne({email});

  if(!user) {
    next(new AppError('No user have been found with this email', 404))
  }

  const resetToken =  user.createPasswordResetToken();
  await user.save({validateBeforeSave: false});

})
const resetPassword = (req,res,next) => {
  
}

module.exports = {
  signup,
  login,
  forgotPassword,
  resetPassword
};
