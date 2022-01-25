const express = require("express")
const router = express.Router();
const Event = require("../../models/Events")


router.post("/", async (req, res) => {
    const { user, name, distance, date, creator } = req.body

    try
    {
        let event

        event = new Event({
            user,
            name,
            date,
            distance,
            creator
        })

        event.save()
    } catch (error)
    {
        console.log(error)
    }
})

router.get("/all-events", async (req, res) => {
    const events = await Event.find({})
    res.json(events)

})

module.exports = router