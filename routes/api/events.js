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

router.get("/:id", async (req, res) => {

    const eventId = req.params.id

    let event
    try
    {
        event = await Event.findById(eventId).populate("user")
        event.delete()

    } catch (error)
    {
        console.log(error)
    }

    if (!event)
    {
        console.log("no event found with that id")
    }


    // mongoose session 
})

module.exports = router