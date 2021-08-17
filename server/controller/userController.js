const { findOneAndUpdate, findByIdAndDelete } = require("../model/userModal");
const User = require("../model/userModal")
const { AppError } = require("../utils/appError")
const catchAsync = require("../utils/catchAsync")


const filterObject = (obj, ...allowedObject) => {
    let newObject = {};
    Object.keys(obj).forEach(el =>{
        if(allowedObject.includes(el)) newObject[el] = obj[el]
    })

    return newObject

}

const getAllUsers = catchAsync(async (req,res) => {
    const users = await User.find();
    res.status(200).json({
        status: "success",
        data: {
            users
        }
    })
})


const getUser = catchAsync(async (req,res) => {

    const user = await User.findOne({_id: req.params.userId}).populate('friendsReq')
    console.log(user)
    res.status(200).json({
        status: 'success',
        data: {
        user
        }
    })

}) 

const updateMe = catchAsync(async (req,res,next) => {
    
    if(req.body.password || req.body.passwordConfirm) {
        return next(new AppError('This route is not for updating user password!', 403))
    }

    const filteredObject = filterObject(req.body, 'email', 'displayName')

    const user = await User.findOneAndUpdate({_id: req.user._id}, filteredObject , {
        runValidators: true,
        new: true
    })


    res.status(200).json({
        status: "success",
        data: {
            user
        }
    })

})

const deleteMe = catchAsync(async (req,res,next) => {

    await findOneAndUpdate({_id: req.user._id }, {active: false})

    res.status(204).json({
        status: 'success',
        data: null
    })
})



const addFriend = catchAsync(async (req,res) => {
    console.log('I am invoked')
    const user = await User.findByIdAndUpdate({_id: req.params.userId},   { "$push": { "friendRequest": req.body.id } }, {new: true});
   res.status(200).json({
       status: 'success',
       user
   })


})


const deleteFriendsRequest = catchAsync(async (req,res) => {
    const user = await User.findOneAndUpdate({id: req.user._id}, { "$pull" : {friendRequest: req.body.id }}, {new: true});

    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    })
})


module.exports = {
    getAllUsers,
    getUser,
    updateMe,
    deleteMe,
    addFriend,
    deleteFriendsRequest
}