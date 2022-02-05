const express = require("express");
const { createUser, login, allUsers } = require("../../controllers/userController");
const router = express.Router();


router.post("/", createUser)


router.post("/login", login)

router.get("/users", allUsers)

module.exports = router