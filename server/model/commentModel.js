const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    commentBody: {
        type: String,
        require: true,
        attachments: [
            {
                type: String
            }
        ],
        // Later we will add user reference and id to populate the data
    }
}, {
    timestamps: true
})


// why didn't I add new keyword here
const Comment =  mongoose.model('Comment', commentSchema)

module.exports = {
    Comment
}