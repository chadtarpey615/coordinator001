import React, { useState } from 'react'
import Card from '../components/Card'
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../styles/RunEvents.css"
import { useSelector, useDispatch } from "react-redux";
import { updateEvent, addComment, deleteComment } from "../features/events/eventSlice"
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';


const RunEvents = ({ event, deleteEvent }) => {
    const { user } = useSelector((state) => state.user)
    // const { events } = useSelector((state) => state.events)

    const [open, setOpen] = useState(false)
    const [openComment, setOpenComment] = useState(false)
    const [userComment, setUserComment] = useState("")
    const [commentEmail, setCommentEmail] = useState("")
    const [updateEventData, setUpdateEventData] = useState({
        name: "",
        date: "",
        distance: null
    })



    const dispatch = useDispatch();



    const onChange = e => setUpdateEventData({ ...updateEventData, [e.target.name]: e.target.value })

    const handleOpen = (id) => {
        setOpen(true);
    }

    const handleComment = e => setOpenComment(true)
    const handleClose = () => setOpen(false);
    const handleCommentClose = () => setOpenComment(false);

    const updatedEvent = async (id) => {

        if (!user)
        {
            alert("please log in first to continue")
        } else
        {

            const eventUpdateInfo = {
                id: id,
                user: user._id,
                ...updateEventData,
                creator: user.email
            }

            if (eventUpdateInfo)
            {

                dispatch(updateEvent(eventUpdateInfo))
            }
        }
    }

    const addUserComment = async (id) => {
        console.log(commentEmail)
        if (!user)
        {
            alert("please log in first to continue")

        } else
        {
            const eventComment = {
                _id: id,
                name: commentEmail,
                comment: userComment
            }

            dispatch(addComment(eventComment))
            handleCommentClose()

            // window.location.reload()
        }


    }

    const eventDeleteComment = async (e, event, id) => {
        console.log("runEvents", event._id, id)
        e.preventDefault()

        const commentInfo = {
            event: event._id,
            comment: id
        }

        dispatch(deleteComment(commentInfo))
        window.location.reload()
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
                <div className="flex flex-col text-white space-x-4 pb-4">
                    <h1 class=" px-4 my-4 text-2xl font-bold underline">Event Title: <span>{name}</span></h1>
                    <h4 className='font-bold'>Date: <span className="font-medium">{date}</span></h4>
                    <h4 className='font-bold'>Distance: <span>{distance}</span></h4>
                    <h4 className=''  >Created by: <span>{creator}</span></h4>
                    <DirectionsRunIcon />


                    <h3 className='underline font-bold mt-4'>Comments</h3>

                    {event.comments.map((comment) => (
                        <div className="">
                            <p className="text-sm font-bold">{comment.name} : <span className='text-sm'>{comment.comment}</span></p>

                            <DeleteIcon onClick={(e) => eventDeleteComment(e, event, comment._id)} />
                            <Divider />
                        </div>
                    ))}


                    <div className="card-btn flex justify-center ">
                        {user._id === event.user ? (

                            <button className=" hover:bg-blue-500" onClick={(e) => deleteEvent(e, _id)}>Delete Event</button>
                        ) : (

                            <button className="hover:bg-blue-500" disabled onClick={(e) => deleteEvent(e, _id)}>Not Authorized to Delete</button>
                        )}

                        {user._id === event.user ? (

                            <button className="hover:bg-blue-500" onClick={(e) => handleOpen(_id)}>Update Event</button>
                        ) : (

                            <button className="hover:bg-blue-500" disabled onClick={(e) => handleOpen(_id)}>Not Authorized to Update</button>
                        )}

                        <button className="hover:bg-blue-500" onClick={() => handleComment(_id)}>Add Comment</button>

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

                                        <TextField id="filled-basic" label="Email" variant="filled" name="username" onChange={(e) => setCommentEmail(e.target.value)} />
                                        <TextField id="filled-basic" label="Add Comment" variant="filled" name="comment" onChange={(e) => setUserComment(e.target.value)} />
                                        <Button onClick={() => addUserComment(_id)} variant="outlined">Add Comment</Button>

                                    </Stack>
                                </Box>


                            </Modal>
                        )}

                    </div>
                </div>

            </Card>
        </>
    )
}

export default RunEvents
