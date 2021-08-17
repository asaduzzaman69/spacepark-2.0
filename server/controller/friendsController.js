const { Friend } = require('../model/friendModal');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handleFactory')


const getAllFriends = factory.getAll(Friend);


const createFriend = catchAsync( async (req,res) => {
    const friend = await Friend.create({
        sentTo: req.params.userId,
        sentBy: req.user._id
    });

    setTimeout(() => {
      return  res.status(201).json({
        status: "success",
        data: {
          friend,
        },
      });
      
    }, 2000)

})


const updateRequestStatus = catchAsync(async (req,res) => {
  const updatedDocument  = await Friend.findByIdAndUpdate(req.params.friendId, {
    status:  req.body.status
  })


  res.status(201).json({
    status: 'success',
    data: {
      friend: updatedDocument
    }

  })

})


module.exports = {
    getAllFriends,
    createFriend,
    updateRequestStatus
}