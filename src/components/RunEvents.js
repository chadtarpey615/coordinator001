import React, { useState, useContext } from 'react'
import Card from '../components/Card'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../styles/RunEvents.css"
import EventContext from '../context/events/EventContext';
import { updateEvent, addComment } from "../context/events/EventActions"
import UserContext from '../context/users/UserContext';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';


const RunEvents = ({ event, deleteEvent }) => {
    const { events, isLoading, dispatch } = useContext(EventContext)
    const { user, } = useContext(UserContext)

    const [open, setOpen] = useState(false)
    const [openComment, setOpenComment] = useState(false)
    const [userComment, setUserComment] = useState("")
    const [commentEmail, setCommentEmail] = useState("")
    const [updateEventData, setUpdateEventData] = useState({
        name: "",
        date: "",
        distance: null
    })

    const onChange = e => setUpdateEventData({ ...updateEventData, [e.target.name]: e.target.value })

    const handleOpen = (id) => {
        setOpen(true);
        console.log(user)
    }

    const handleComment = e => setOpenComment(true)
    const handleClose = () => setOpen(false);
    const handleCommentClose = () => setOpenComment(false);

    const updatedEvent = async (id) => {
        console.log(id)
        if (!user)
        {
            alert("please log in first to continue")
        } else
        {

            const eventUpdateInfo = await updateEvent({
                id: id,
                user: user._id,
                ...updateEventData,
                creator: user.email
            })

            if (eventUpdateInfo)
            {

                dispatch({
                    type: "UPDATE_EVENT",
                    payload: eventUpdateInfo
                })


                window.location.reload()
            }

        }
    }

    const addUserComment = async (id) => {

        const eventComment = await addComment({
            _id: id,
            name: commentEmail,
            comment: userComment
        })

        dispatch({
            type: "ADD_COMMENT",
            payload: eventComment
        })
    }

    const { name, date, distance, _id, creator } = event

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <Card>
                <DirectionsRunIcon />
                <h1>Event Title: <span>{name}</span></h1>
                <h4>Date: <span>{date}</span></h4>
                <h4>Distance: <span>{distance}</span></h4>
                <h4>Created by: <span>{creator}</span></h4>
                <div className="card-btn">
                    <button onClick={(e) => deleteEvent(e, _id)}>Delete Event</button>

                    <button onClick={(e) => handleOpen(_id)}>Update Event</button>
                    <button onClick={() => handleComment(_id)}>Add Comment</button>

                    {open ? (
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Stack spacing={2}>
                                    <TextField id="filled-basic" label="Update Name" variant="filled" name="name" onChange={e => onChange(e)} />
                                    <TextField id="filled-basic" label="Update Date" variant="filled" name="date" onChange={e => onChange(e)} />
                                    <TextField id="filled-basic" label="Update Distance" variant="filled" name="distance" onChange={e => onChange(e)} />
                                    <Button onClick={() => updatedEvent(_id)} variant="outlined">Update</Button>


                                </Stack>
                            </Box>
                        </Modal>
                    ) : (
                            <Modal
                                open={openComment}
                                onClose={handleCommentClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Stack spacing={2}>
                                        <h3>Let's add a comment</h3>

                                        <TextField id="filled-basic" label="Email" value={user.email} variant="filled" name="email" onMouseEnter={(e) => setCommentEmail(e.target.value)} />
                                        <TextField id="filled-basic" label="Add Comment" variant="filled" name="comment" onChange={(e) => setUserComment(e.target.value)} />
                                        <Button onClick={() => addUserComment(_id)} variant="outlined">Add Comment</Button>

                                    </Stack>
                                </Box>


                            </Modal>
                        )}



                </div>
            </Card>
        </>
    )
}

export default RunEvents
