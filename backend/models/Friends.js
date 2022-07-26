const mongoose = require("mongoose")


const friendsSchema = mongoose.Schema({
    requester: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    }

}, { timestamps: true })
module.exports = Friends = mongoose.model('Friends', friendsSchema)