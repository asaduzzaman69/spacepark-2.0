const express = require('express');
const { getAllFriends, createFriend, updateRequestStatus } = require('../controller/friendsController');
const { protectedRoutes } = require('../middleware/projectedRoute');

const friendsRouter  = express.Router({mergeParams: true});


friendsRouter
.route('/')
.get(getAllFriends)
.post(protectedRoutes, createFriend)


friendsRouter
.route('/:friendId')
.patch(/* protectedRoutes */ updateRequestStatus)





module.exports = {
    friendsRouter
}