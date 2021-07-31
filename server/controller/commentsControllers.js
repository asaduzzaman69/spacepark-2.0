const catchAsync = require('./../utils/catchAsync')
const {Comment} = require('./../model/commentModel')


const getAllComments = catchAsync(async (req,res) => {
  const result = await Comment.find({postId: req.params.postId}).populate('creator');
  console.log(req.params.postId)

  res.status(200).json({
      status: "success",
      data: {
          comments: result
      }
  })

})


const createComment = catchAsync( async (req,res) => {
    console.log('I am invoked')
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
    const result = await Comment.find({postId: req.params.postId}).populate('creator')

    res.status(200).json({
        status: 'success',
        data: {
            comment: result
        }
    })

})


 const updateComment = catchAsync(async (req,res) => {
    const newUpdatedComment = await Comment.findOneAndUpdate({_id: req.params.commentId})
    console.log(req.params.commentId, )

    res.status(201).json({
        status: 'success',
        data: {
            comment: newUpdatedComment
        }
    })

})



const deleteComment = catchAsync( async (req,res) => {
    const deletedDpcument = await Comment.findOneAndDelete({_id: req.params.commentId} )

    res.status(201).json({
        status: 'success',
        data: {
            comment: deletedDpcument
        }
    })

})

module.exports = {
    getAllComments,
    createComment,
    getComment,               
    updateComment,
    deleteComment
}