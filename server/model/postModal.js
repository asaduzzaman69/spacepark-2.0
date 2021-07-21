const mongoose = require('mongoose');


/* 

_id
creatorId
postcontent
attachment
createdAt


*/

const postSchema = new mongoose.Schema({
    creatorId: {
        type: /* mongoose.Types.ObjectId */ String,
        require: true,
    },
    postContent: String,
    attachments: [
        {
            type: String
        }
    ]



}, {timestamps: true})



const Post = mongoose.model('Post', postSchema)

module.exports = Post