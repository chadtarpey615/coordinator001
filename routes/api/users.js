const express = require("express");
const { createUser, login, allUsers, addFriend } = require("../../controllers/userController");
const router = express.Router();


router.post("/", createUser)


router.post("/login", login)

router.get("/users", allUsers)

router.post("/:id/:friend", addFriend)

module.exports = router