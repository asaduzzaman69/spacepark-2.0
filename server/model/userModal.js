const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema({
    displayName: {
        type: String,
        require: true
    },

    tagName: {
        type: String,
        require: true
    }

    ,
    avatar: {
        type: String
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})


userSchema.pre('save', async function (next) {
    this.password = await  bcrypt.hash(this.password, 12)
    next()
})
const User = mongoose.model("User",userSchema)

module.exports = User;