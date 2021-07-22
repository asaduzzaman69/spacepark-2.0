const User = require("../model/userModal");
const catchAsync = require("../utils/catchAsync");
const jwt = require('jsonwebtoken')



/* 
`
1) creating actual document
2) hashing password
3) create the JWT
*/
const signup = catchAsync( async (req,res) => {
    const { displayName,password,avatar, email } = req.body
    const newUser = new User({
        displayName,
        password,
        avatar, 
        email
    })

    const result = await newUser.save();

    const token = await jwt.sign({userName: result.userName, _id: result._id},process.env.JWT_PRIVATE_KEY, {
        expiresIn: "1d"
    })


    res.status(201).json({
        status: 'success',
        token
    })

})




module.exports = {
    signup
}