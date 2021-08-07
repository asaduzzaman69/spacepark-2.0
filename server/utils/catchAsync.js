const { AppError } = require("./appError");

const catchAsync = (fn) => {
  return (req, res, next) =>
    fn(req, res, next).catch((err) => {
      next(new AppError(err.message, 500))
      console.log(err)
    
    });
};

module.exports = catchAsync;
