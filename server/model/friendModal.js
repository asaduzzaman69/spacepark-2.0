const mongoose = require("mongoose");

const friendSchema = new mongoose.Schema(
  {
    sentBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    sentTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);


friendSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'sentBy',
    select: 'displayName '
  })

  next()
})

const Friend = new mongoose.model('Friend', friendSchema);


module.exports = {
    Friend
}
