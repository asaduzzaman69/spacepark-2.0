const express = require('express');
const { getAllComments,createComment, getComment, updateComment, deleteComment} = require('../controller/commentsControllers');

const commentsRouter = express.Router({mergeParams: true});


commentsRouter
.route('/')
.get(getAllComments)
.post(createComment)

commentsRouter
.route('/:commentId')
.get(getComment)
.put(updateComment)
.delete(deleteComment)

module.exports = commentsRouter