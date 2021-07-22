const express = require('express');
const { createPost,getPost, updatePost } = require('./../controller/postController')


const postsRouter = express.Router();


postsRouter
.route('/')
.post(createPost)

postsRouter.route('/:postId')
.get(getPost)
.put(updatePost)






module.exports = postsRouter;