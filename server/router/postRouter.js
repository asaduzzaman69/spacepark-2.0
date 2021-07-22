const express = require('express');
const { createPost,getPost, updatePost } = require('./../controller/postController');
const commentsRouter = require('./commentsRoute');


const postsRouter = express.Router();


postsRouter
.route('/')
.post(createPost)

postsRouter.route('/:postId')
.get(getPost)
.put(updatePost)

postsRouter.use('/:postId/comments', commentsRouter)






module.exports = postsRouter;