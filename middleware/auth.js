const jwt = require("jsonwebtoken")
const config = require("config")


module.exports = function (req, res, next) {
    // get the token from the headers
    const token = req.header("x-auth-token")

    // if no token 
    if (!token)
    {
        return res.status(401).json({ msg: "No token found" })
    }


    // verify token from headers
    try
    {
        const decoded = jwt.verify(token, config.get("jwtSecret"))

        req.user = decoded.user;
        next();


    } catch (error)
    {
        res.status(401).json({ msg: "Token is not valid" })
    }
}