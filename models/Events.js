const mongoose = require("mongoose")

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
    }


})

module.exports = Event = mongoose.model("Event", eventSchema)