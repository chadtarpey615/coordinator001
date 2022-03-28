import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import "../styles/calendar.css"
import { createEvent, getEvents } from "../features/events/eventSlice"
import { useSelector, useDispatch } from "react-redux";
import TextField from '@mui/material/TextField';
import Spinner from "../components/Spinner"



const Calendars = () => {

    const { user, isLoading } = useSelector((state) => state.user)
    const { events } = useSelector((state) => state.events)
    const [selectDay, setSelectDay] = useState(null)
    const [eventData, setEventData] = useState({
        name: "",
        distance: null
    })

    const dispatch = useDispatch();


    useEffect(() => {


        dispatch(getEvents())
    }, [dispatch])



    const onChange = e => setEventData({ ...eventData, [e.target.name]: e.target.value })

    const enterEventHandler = async (e) => {
        e.preventDefault()
        if (!user)
        {
            alert("please log in first to continue")
        } else
        {

            const eventInfo = {
                user: user._id,
                ...eventData,
                date: selectDay,
                creator: user.email

            }

            dispatch(createEvent(eventInfo))
        }


    }

    if (isLoading) { return <Spinner /> }
    return (
        <>
            <div className="row align-items-start">


                <div className="col-lg-6 col-sm-12 my-5 ">
                    <h1 className="mx-5 text-light">Run Fit</h1>
                </div>
            </div>
            <div className="row align-items-start">
                <div className="col-md-6 col-sm-12  d-flex justify-content-center">

                    <DayPicker onDayClick={(e) => setSelectDay(e)} />
                </div>
                <div className="col-md-6 col-sm-12 d-flex justify-content-center ">

                    <form className="run-form" onSubmit={enterEventHandler}>
                        <h1 className="text-light">Add run event form </h1>

                        <div className=" mt-md-5 mt-sm-4">
                            <label htmlFor="name" > </label>
                            <TextField id="filled-required" label="Add Event Name " name="name" variant="filled" onChange={e => onChange(e)} />


                        </div>
                        <div >
                            <label htmlFor="date" > </label>
                            <TextField id="filled-basic" label={`${selectDay}`} name="date" variant="filled" onMouseEnter={e => setSelectDay(selectDay)} />

                        </div>
                        <div >
                            <label htmlFor="distance" > </label>
                            <TextField id="filled-basic" label="Add Event Total Distance " name="distance" variant="filled" onChange={e => onChange(e)} />


                        </div>
                        <div className="mt-2">

                            <button>Enter Event</button>
                            <button><Link to="events">See All Events</Link> </button>

                        </div>
                    </form>
                </div>

            </div>
        </>
    );
};

export default Calendars;
