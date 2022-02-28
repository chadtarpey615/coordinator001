const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },

    events: [
        {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "Event"
        }
    ],

    friends: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Friends'
        }]

})

module.exports = User = mongoose.model("User", userSchema)