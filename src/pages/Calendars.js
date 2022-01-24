import React from "react";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import "../styles/calendar.css"


const Calendars = () => {
    return (
        <div className="row">


            <div className="col-md-6 my-5">

                <DayPicker />
            </div>

            <div className="col-md-6 mt-5">

                <form className="run-form">
                    <h1>Add run event form </h1>

                    <div >
                        <label htmlFor="name" > </label>
                        <input type="text" placeholder="Add Event Name" />

                    </div>
                    <div >
                        <label htmlFor="date" > </label>
                        <input type="text" placeholder={`date:`} />

                    </div>
                    <div >
                        <label htmlFor="distance" > </label>
                        <input type="text" placeholder="Add Event Total Distance" />

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
