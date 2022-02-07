import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import "../styles/calendar.css"
import EventContext from "../context/events/EventContext";
import { createEvent } from "../context/events/EventActions";
import UserContext from "../context/users/UserContext";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';




const Calendars = () => {
    const { dispatch } = useContext(EventContext)
    const { user } = useContext(UserContext)
    const [selectDay, setSelectDay] = useState(null)
    const [eventData, setEventData] = useState({
        name: "",
        distance: null
    })



    const onChange = e => setEventData({ ...eventData, [e.target.name]: e.target.value })

    const enterEventHandler = async (e) => {
        e.preventDefault()
        console.log(user)
        if (!user)
        {
            alert("please log in first to continue")
        } else
        {

            const eventInfo = await createEvent({
                user: user._id,
                ...eventData,
                date: selectDay,
                creator: user.email

            })

            dispatch({
                type: "CREATE_EVENT",
                payload: eventInfo
            })
        }


    }
    return (

        <div className="row">


            <div className="col-md-6 col-sm-12 my-5">
                <h1 className="mx-5 text-light">Run Fit</h1>
                <DayPicker onDayClick={(e) => setSelectDay(e)} />
            </div>

            <div className="col-md-6 col-sm-12 mt-5">

                <form className="run-form" onSubmit={enterEventHandler}>
                    <h1 className="mx-4 text-light">Add run event form </h1>

                    <div className="event-input">
                        <label htmlFor="name" > </label>
                        <TextField id="filled-required" label="Add Event Name " name="name" variant="filled" onChange={e => onChange(e)} />

                        {/* <input type="text" placeholder="Add Event Name" name="name" onChange={e => onChange(e)} /> */}

                    </div>
                    <div >
                        <label htmlFor="date" > </label>
                        <TextField id="filled-basic" label={`${selectDay}`} name="date" variant="filled" onMouseEnter={e => setSelectDay(selectDay)} />
                        {/* <input type="text" placeholder={`${selectDay}`} name="date" onMouseEnter={e => setSelectDay(selectDay)} /> */}

                    </div>
                    <div >
                        <label htmlFor="distance" > </label>
                        <TextField id="filled-basic" label="Add Event Total Distance " name="distance" variant="filled" onChange={e => onChange(e)} />

                        {/* <input type="text" placeholder="Add Event Total Distance" name="distance" onChange={e => onChange(e)} /> */}

                    </div>
                    <div >
                        <Stack>

                            <button>Enter Event</button>
                            <button><Link to="events">See All Events</Link> </button>
                        </Stack>


                    </div>
                </form>
            </div>
        </div>
    );
};

export default Calendars;
