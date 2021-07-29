const catchAsync = require("./../utils/catchAsync");
const Post = require("./../model/postModal");

const getAllPost = catchAsync(async (req, res) => {
  const query = Post.find({}).populate("creatorId");
  const posts = await query;
  console.log(posts);

  res.status(200).json({
    status: "success",
    data: {
      posts,
    },
  });
});

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
  getAllPost,
};
