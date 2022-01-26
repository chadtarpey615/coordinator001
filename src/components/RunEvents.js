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
import { updateEvent } from "../context/events/EventActions"
import UserContext from '../context/users/UserContext';

const RunEvents = ({ event, deleteEvent }) => {
    const { events, isLoading, dispatch } = useContext(EventContext)
    const { user, } = useContext(UserContext)

    const [open, setOpen] = useState(false)
    const [updateEventData, setUpdateEventData] = useState({
        name: "",
        date: "",
        distance: null
    })

    const onChange = e => setUpdateEventData({ ...updateEventData, [e.target.name]: e.target.value })

    const handleOpen = (id) => {
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    const updatedEvent = async (id) => {
        if (!user)
        {
            alert("please log in first to continue")
        } else
        {

            const eventUpdateInfo = await updateEvent({
                user: user.user._id,
                ...updateEventData,
                creator: user.user.email
            })

            dispatch({
                type: "UPDATE_EVENT",
                payload: eventUpdateInfo
            })
        }
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
                <h1>Event Title: <span>{name}</span></h1>
                <h4>Date: <span>{date}</span></h4>
                <h4>Distance: <span>{distance}</span></h4>
                <h4>Created by: <span>{creator}</span></h4>
                <div className="card-btn">
                    <button onClick={(e) => deleteEvent(e, _id)}>Delete Event</button>

                    <button onClick={(e) => handleOpen(_id)}>Update Event</button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Stack spacing={2}>

                                <TextField id="filled-basic" label="Update Date" variant="filled" onChange={e => onChange(e)} />
                                <TextField id="filled-basic" label="Update Name" variant="filled" onChange={e => onChange(e)} />
                                <TextField id="filled-basic" label="Update Distance" variant="filled" onChange={e => onChange(e)} />
                                <Button onClick={updatedEvent(_id)} variant="outlined">Update</Button>
                            </Stack>
                        </Box>
                    </Modal>
                </div>
            </Card>
        </>
    )
}

export default RunEvents