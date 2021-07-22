const catchAsync = require('./../utils/catchAsync')
const {Comment} = require('./../model/commentModel')


const getAllComments = catchAsync(async (req,res) => {
  const result = await Comment.find();

  res.status(200).json({
      status: "success",
      data: {
          comments: result
      }
  })

})


const createComment = catchAsync( async (req,res) => {
    const newComment = new Comment(req.body);
    const result = await newComment.save()

    res.status(201).json({
        status: "success",
        data: {
            comment: result
        }
    })

})




const getComment = catchAsync( async (req,res) => {
    const result = await Comment.find({postId: req.params.postId})


    res.status(200).json({
        status: 'success',
        data: {
            comment: result
        }
    })

})


 const updateComment = catchAsync(async (req,res) => {
    const newUpdatedComment = await Comment.findOneAndUpdate({postId: req.params.postId}, req.body, {new: true})

    res.status(201).json({
        status: 'success',
        data: {
            comment: newUpdatedComment
        }
    })

})

module.exports = {
    getAllComments,
    createComment,
    getComment,               
    updateComment
}