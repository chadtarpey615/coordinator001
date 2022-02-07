const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("config")
const User = require("../models/User")
const Friends = require("../models/Friends")
const Mongoose = require("mongoose")
exports.createUser = async (req, res) => {
    console.log("User Routes hitt")
    const { username, email, password } = req.body;

    try
    {
        let user = await User.findOne({ email: email })

        if (user)
        {
            return res.status(400).json({ msg: "User Already Exist" })
        }

        user = new User({
            username,
            email,
            password
        })

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt)

        // return json token 
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get("jwtSecret"),

            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token })
            }
        )

        user.save()


    } catch (error)
    {
        console.log(error.message);
        res.status(500).send("Server Error")
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        events: user.events,
        friends: user.friends
    })
}

exports.allUsers = async (req, res) => {
    let users

    users = await User.find({})

    res.json(users)
}

exports.addFriend = async (req, res) => {
    const { id, friend } = req.params

    let user
    let newFriend

    try
    {
        newFriend = await User.findById(friend)
        newFriend = await new Friends({
            _id: newFriend._id,
            email: newFriend.email,
            username: newFriend.username
        })

        newFriend.save()
        user = await User.findById(id).populate("friends")


        console.log(newFriend)
    } catch (error)
    {
        console.log(error)
    }

    try
    {

        const sess = await Mongoose.startSession()
        sess.startTransaction()
        await user.save({ session: sess })
        user.friends.push(newFriend)
        await user.save({ session: sess })
        await sess.commitTransaction()

    } catch (error)
    {
        console.log(error)
    }
}