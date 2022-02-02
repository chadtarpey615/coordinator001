const mongoose = require("mongoose")


const commentSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },

    event: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Event"
    },

    name: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        reqiured: true
    }
})

module.exports = Comments = mongoose.model("Comments", commentSchema)
