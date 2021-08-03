const User = require("../model/userModal")
const catchAsync = require("../utils/catchAsync")

const getAllUsers = (req,res) => {
    res.status(200).json({
        status: "success",
        data: {
            userName: "dummy name"
        }
    })
}



const getUser = catchAsync(async (req,res) => {

    const user = await User.findOne({_id: req.params.userId})
    res.status(200).json({
        status: 'success',
        data: {
        user
        }
    })

}) 


module.exports = {
    getAllUsers,
    getUser
}