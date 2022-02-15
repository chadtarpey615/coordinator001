const express = require("express")
const router = express.Router();
const { createEvent, getAllEvents, deleteEvent, updateEvent, addComment, deleteComment } = require("../../controllers/eventController");



// create new event
router.post("/", createEvent)


// get all events with comments
router.get("/all-events", getAllEvents)



// delete event
router.get("/:id", deleteEvent)


// update event 
router.put("/all-events/:id", updateEvent)



// add comment to event
router.post("/:_id", addComment)

// delete single comment
router.get("/:id/:comment", deleteComment)



module.exports = router