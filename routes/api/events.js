const express = require("express")
const router = express.Router();
const Event = require("../../models/Events")


router.post("/", async (req, res) => {
    const { user, name, distance, date } = req.body

    try
    {
        let event

        event = new Event({
            user,
            name,
            date,
            distance
        })

        event.save()
    } catch (error)
    {
        console.log(error)
    }
})

module.exports = router