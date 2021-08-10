const User = require("../model/userModal");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");
const bycrypt = require("bcryptjs");
const crypto = require('crypto');
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

  const resetUrl = `${req.protocol}://${req.get('host')}/users/${resetToken}`;
  const message = `Forgot Your passowrd!? Please send a patch request to this url: ${resetUrl}\n if you didn't reset your password then ignore this email`

  await sendMail({
    email: user.email,
    subject: 'Password Reset. Will last for next 10min',
    message,

  })
})
const resetPassword = catchAsync(async (req, res, next) => {
  const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpiresIn: { $gt: Date.now() }

  })

  if (!user) {
    return next(new AppError('The token is invalid or expired', 400))
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.password;
  user.passwordResetToken = undefined;
  user.passwordResetExpiresIn = undefined;

  await user.save();
  const token = jwt.sign({
    id: user._id,

  }, process.env.JWT_PRIVATE_KEY, {
    expiresIn: '1d'
  })

  res.send(200).json({
    status: "success",
    token
  })

})

const updatePassword = catchAsync(async (req, res, next) => {

const  { password, updatePassword,updateConfirmPassword } = req.body;
const user = User.findOne({_id: req.user._id}).select('+password');

if(!(await user.comparePassword(user.password, password))) {
    return next(new AppError('The password is incorrect', 401))
}

user.password = updatePassword;
user.passwordConfirm = updateConfirmPassword;

await user.save();


const token = jwt.sign({id: user._id}, process.env.JWT_PRIVATE_KEY, {
  expiresIn: '1d'
})

res.status(200).json({
  status: 'success',
  token
})




// 


})

module.exports = {
  signup,
  login,
  forgotPassword,
  resetPassword
};
