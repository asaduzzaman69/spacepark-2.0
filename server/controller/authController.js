const User = require("../model/userModal");
const catchAsync = require("../utils/catchAsync");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const { AppError } = require("../utils/appError");




/* 
`
1) creating actual document
2) hashing password
3) create the JWT
*/
const signup = catchAsync( async (req,res,next) => {
    const { displayName,password,avatar, email } = req.body

    if(!displayName && !password && !email  )  {

        next(new AppError('Please Provide neccesary data', 500))
    }
    const newUser = new User({
        displayName,
        password,
        avatar, 
        email
    })

    const result = await newUser.save();

    const token = await jwt.sign({userName: result.displayName, _id: result._id},process.env.JWT_PRIVATE_KEY, {
        expiresIn: "1d"
    })
    console.log(result)


    res.status(201).json({
        status: 'success',
        token,
        id: result._id
    })

})


const login = catchAsync( async (req,res,next) => {

    const freshUser = await User.find({email: req.body.email})

    if(!Object.keys(freshUser).length) {
       return next(new AppError("User or password is incorrect", 400))
    }


    const isMatched = await bcrypt.compare(req.body.password, freshUser[0].password)

    if(!isMatched) {
        return next(new AppError("User or password is incorrect", 400))
    }



    const token = jwt.sign({userName: freshUser.userName, _id: freshUser._id}, process.env.JWT_PRIVATE_KEY, {
        expiresIn: '1d'
    })

    res.status(200).json({
        status: 'success',
        token
    })

}) 




module.exports = {
    signup,
    login
}