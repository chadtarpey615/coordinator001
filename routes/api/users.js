const express = require("express")
const router = express.Router();
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("config")
const User = require("../../models/User")

router.post("/", async (req, res) => {
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
})


router.post("/login", async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    res.json({
        _id: user._id,
        username: user.username,
        email: user.email
    })
})

module.exports = router