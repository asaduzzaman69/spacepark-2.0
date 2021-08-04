const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const validator = require('validator');
const crypto = require('crypto')


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
    },
    passwordResetToken: String,
    passwordResetExpiresIn: Date
})


userSchema.pre('save', function (next) {
    if (!this.isModified('password' || this.isNew)) return next();
    this.passwordChangedAt = new Date() - 1000;

    next()
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


userSchema.methods.createPasswordResetToken = function () {
    const token = crypto.randomBytes(32).toString('hex');
    this.passwordResetToken = crypto.createHash('sha256').update(token).digest('hex');
    this.passwordResetExpiresIn = Date.now() + 10 * 60 * 1000

    return token
}

const User = mongoose.model("User",userSchema)

module.exports = User;