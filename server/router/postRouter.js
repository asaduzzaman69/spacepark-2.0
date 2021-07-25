const express = require('express');
const { createPost,getPost, updatePost, getAllPost } = require('./../controller/postController');
const commentsRouter = require('./commentsRoute');


const postsRouter = express.Router();


postsRouter
.route('/')
.get(getAllPost)
.post(createPost)

postsRouter.route('/:postId')
.get(getPost)
.put(updatePost)

postsRouter.use('/:postId/comments', commentsRouter)






module.exports = postsRouter;