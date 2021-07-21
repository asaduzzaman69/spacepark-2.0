const catchAsync = require("./../utils/catchAsync");
const Post = require("./../model/postModal");

const createPost = catchAsync(async (req, res) => {
  const newPost = new Post(req.body);
  const result = await newPost.save();

  res.status(201).json({
    status: "success",
    data: {
      result,
    },
  });
});

const getPost = catchAsync(async (req, res) => {
  const post = await Post.findOne({ _id: req.params.postId });
  res.status(200).json({
    status: "success",
    post,
  });
});

// Is it a good practice To update a document based on request.body full object

const updatePost = catchAsync(async (req, res) => {
  const updatedPost = await Post.findByIdAndUpdate(
    req.params.postId,
    {
      $set: req.body,
    },
    {
      new: true,
    }
  );

  res.status(200).json({
    status: "succeed",
    updatedPost,
  });
  
});

module.exports = {
  createPost,
  getPost,
  updatePost,
};
