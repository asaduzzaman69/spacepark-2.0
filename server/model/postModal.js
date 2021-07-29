const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    creator: {
        type:  mongoose.Types.ObjectId,
        require: true,
        ref: "User"
    },
    postContent: String,
    attachments: [
        {
            type: String,
            
        },
    ]



}, {timestamps: true})



const Post = mongoose.model('Post', postSchema)

module.exports = Post