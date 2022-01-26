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

router.put("/all-events/:id", async (req, res) => {
    const eventId = req.params.id
    const { name, distance, date } = req.body

    let event
    try
    {
        event = await Event.findById(eventId)

        // update the event with new info from the req.body
    } catch (error)
    {
        console.log(error)
    }

    event.name = name
    event.date = date
    event.distance = distance

    try
    {
        await event.save()
    } catch (error)
    {
        console.log(error)
    }
})

module.exports = router