const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const validator = require('validator');


const userSchema = new mongoose.Schema({
    displayName: {
        type: String,
        require: [true, 'Please Provide Your Name']
    },

    tagName: {
        type: String,
        require: true
    },
    avatar: {
        type: String
    },
    email: {
        type: String,
        require: [true, 'Please provide your Email address'],
        minLength: 8,
        validate: [validator.isEmail, 'Please provide a valid Email'],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true
    },
    passwordConfirm: {
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