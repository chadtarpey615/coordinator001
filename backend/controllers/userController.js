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
        const userExist = await User.findOne({ email: email })

        if (userExist)
        {
            return res.status(400).json({ msg: "User Already Exist" })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await User.create({
            username,
            email,
            password: hashedPassword
        })

        if (user)
        {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            })
        }


    } catch (error)
    {
        console.log(error.message);
        res.status(500).send("Server Error")
    }
}

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWTSECRET, {
        expiresIn: "30d"
    })
}

exports.login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })



    res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        events: user.events,
        friends: user.friends,
        token: generateToken(user._id)
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

exports.getFriendsForUser = async (req, res, next) => {
    console.log("usercont")
    const userId = req.params.id

    let user
    let userFriends = []


    user = await User.findById(userId).populate("friends")
    const { friends } = user
    for (let i = 0; i < friends.length; i++)
    {
        // res.json(friends[i].username)
        userFriends.push(friends[i].username)
        // friends[i] = await Friends.findById
        // res.json(userFriends)
    }
    res.json(userFriends)
    next()

}