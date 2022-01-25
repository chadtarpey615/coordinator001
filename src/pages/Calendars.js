import React, { useState } from "react";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import "../styles/calendar.css"


const Calendars = () => {

    const [selectDay, setSelectDay] = useState(null)
    const [eventData, setEventData] = useState({
        eventName: "",
        eventDate: "",
        eventDistance: null
    })

    const { eventDate, eventName, eventDistance } = eventData

    const onChange = e => setEventData({ ...eventData, [e.target.name]: e.target.value })

    const enterEventHandler = async (e) => {
        console.log("hit")
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
                        <input type="text" placeholder="Add Event Name" name="eventName" onChange={e => onChange(e)} />

                    </div>
                    <div >
                        <label htmlFor="date" > </label>
                        <input type="text" placeholder={`date:`} name="eventDate" onMouseEnter={e => onChange(e)} />

                    </div>
                    <div >
                        <label htmlFor="distance" > </label>
                        <input type="text" placeholder="Add Event Total Distance" name="eventDistance" onChange={e => onChange(e)} />

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
