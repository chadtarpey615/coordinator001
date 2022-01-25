import React, { useState, useContext, useEffect } from "react";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import "../styles/calendar.css"
import EventContext from "../context/events/EventContext";
import { createEvent } from "../context/events/EventActions";
import UserContext from "../context/users/UserContext";


const Calendars = () => {
    const { events, isLoading, dispatch } = useContext(EventContext)
    const { user } = useContext(UserContext)
    const [selectDay, setSelectDay] = useState(null)
    const [eventData, setEventData] = useState({
        name: "",
        distance: null
    })



    const { name, distance } = eventData

    const onChange = e => setEventData({ ...eventData, [e.target.name]: e.target.value })

    const enterEventHandler = async (e) => {
        e.preventDefault()
        if (!user)
        {
            alert("please log in first to continue")
        } else
        {

            const eventInfo = await createEvent({
                user: user.user._id,
                ...eventData,
                date: selectDay,
                creator: user.user.email

            })

            dispatch({
                type: "CREATE_EVENT",
                payload: eventInfo
            })
        }


    }
    return (
        <div className="row">


            <div className="col-md-6 my-5">
                <h1>Run Fit</h1>
                <DayPicker onDayClick={(e) => setSelectDay(e)} />
            </div>

            <div className="col-md-6 mt-5">

                <form className="run-form" onSubmit={enterEventHandler}>
                    <h1>Add run event form </h1>

                    <div >
                        <label htmlFor="name" > </label>
                        <input type="text" placeholder="Add Event Name" name="name" onChange={e => onChange(e)} />

                    </div>
                    <div >
                        <label htmlFor="date" > </label>
                        <input type="text" placeholder={`${selectDay}`} name="date" onMouseEnter={e => setSelectDay(selectDay)} />

                    </div>
                    <div >
                        <label htmlFor="distance" > </label>
                        <input type="text" placeholder="Add Event Total Distance" name="distance" onChange={e => onChange(e)} />

                    </div>
                    <div >
                        <button>Enter Event</button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Calendars;
