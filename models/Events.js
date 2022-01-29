const mongoose = require("mongoose")


const commentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        reqiured: true
    }
})



const eventSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },

    name: {
        type: String,
        required: true
    },
    date: {
        type: Date
    },

    distance: {
        type: Number,
        required: true
    },

    creator: {
        type: String,
    },

    comments: [commentSchema]


})

module.exports = Event = mongoose.model("Event", eventSchema)