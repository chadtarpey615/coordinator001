const express = require("express")
const router = express.Router();
const Mongoose = require("mongoose")
const Event = require("../../models/Events");
const User = require("../../models/User");
const Comments = require("../../models/Comments");


// create new event
router.post("/", async (req, res) => {

    const { user, name, distance, date, creator } = req.body
    console.log(user)

    let event

    event = new Event({
        user,
        name,
        date,
        distance,
        creator
    })

    let findUser

    try
    {
        findUser = await User.findById(user)
    } catch (error)
    {
        console.log(error)
    }



    const sess = await Mongoose.startSession()
    sess.startTransaction()
    await event.save({ session: sess })
    findUser.events.push(event)
    await findUser.save({ session: sess })
    await sess.commitTransaction()


})


// get all events with comments
router.get("/all-events", async (req, res) => {
    let events
    await Event.find({}).populate("comments").exec(function (err, user) {
        events = user
        res.json(events)
    })


})



// delete event
router.get("/:id", async (req, res) => {

    const eventId = req.params.id

    let event
    try
    {
        event = await Event.findById(eventId).populate("user")
        console.log("delete", event)
        event.delete()

    } catch (error)
    {
        console.log(error)
    }

    if (!event)
    {
        console.log("no event found with that id")
    }

    try
    {

        const sess = await Mongoose.startSession()
        sess.startTransaction()
        await event.remove({ session: sess })
        event.user.events.pull(event)
        await event.user.save({ session: sess })
        await sess.commitTransaction()
    } catch (error)
    {

    }
    res.status(200).json({ message: "Deleted place" })

})


// update event 
router.put("/all-events/:id", async (req, res) => {
    const eventId = req.params.id
    const { name, distance, date } = req.body

    let event
    try
    {
        event = await Event.findById(eventId)
        console.log("Update", event)

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



// add comment to event
router.post("/:_id", async (req, res) => {
    const eventId = req.params._id

    let event
    let comment
    let user

    try
    {
        event = await Event.findById(eventId).populate("user")
        user = await User.findById(event.user._id)
    } catch (error)
    {
        console.log(error)
    }


    comment = new Comments({
        user: user._id,
        event: eventId,
        name: req.body.name,
        comment: req.body.comment
    })

    comment.save()


    const sess = await Mongoose.startSession();
    sess.startTransaction()
    await event.save({ session: sess })
    event.comments.push(comment)
    await event.save({ session: sess })
    await sess.commitTransaction()
})


router.get("/:id/comment/:id", async (req, res) => {

    const eventId = req.params.id

    let event
    try
    {
        event = await Event.findById(eventId).populate("comments")
        console.log("delete", event)
        // event.delete()

    } catch (error)
    {
        console.log(error)
    }
})



module.exports = router