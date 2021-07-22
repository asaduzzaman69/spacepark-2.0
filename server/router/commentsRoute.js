const express = require('express');
const { getAllComments,createComment, getComment, updateComment} = require('../controller/commentsControllers');

const commentsRoute = express.Router();

commentsRoute
.route('/comments')
.get(getAllComments)
.post(createComment)

commentsRoute
.route('/comments/:commentId')
.get(getComment)
.put(updateComment)

module.exports = commentsRoute