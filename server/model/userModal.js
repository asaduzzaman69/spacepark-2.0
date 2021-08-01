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
        require: true,
        select: false
    },
    passwordConfirm: {
        type: String,
        require: true
    },
    passwordChangedAt: {
        type: Date,
        select: false
    }
})


userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next()
    this.password = await  bcrypt.hash(this.password, 12)
    this.passwordConfirm = undefined;
    
    next()
})



userSchema.methods.comparePassword = async function(hashPassword,orginalPassowrd) {
    return await bcrypt.compare(orginalPassowrd, hashPassword)
}

userSchema.methods.isPasswordChanged = function(jwtTimeStamp) {
    if(this.passwordChangedAt) {
        const changedAtSecond = this.passwordChangedAt.getTime() / 1000;
        return jwtTimeStamp <  changedAtSecond
    }
    return false;

}

const User = mongoose.model("User",userSchema)

module.exports = User;