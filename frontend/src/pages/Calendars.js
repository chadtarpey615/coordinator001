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
    // const { events } = useSelector((state) => state.events)
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
            <div className="flex flex-row justify-center">


                <div className="flex flex-col md:flex-row my-5 ">
                    <h1 className="mx-5 text-white text-4xl">Run Fit</h1>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-around ">
                <div className="flex ">

                    <DayPicker onDayClick={(e) => setSelectDay(e)} />
                </div>
                <div className="flex justify-center ">

                    <form className="run-form sm:mt-5 md:mt-20" onSubmit={enterEventHandler}>
                        <h1 className="text-white">Add run event form </h1>

                        <div className="flex ">
                            <label htmlFor="name" > </label>
                            <TextField id="filled-required" label="Add Event Name" name="name" variant="filled" onChange={e => onChange(e)} />


                        </div>
                        <div className="flex" >
                            <label htmlFor="date" > </label>
                            <TextField id="filled-basic" label={`${selectDay}`} name="date" variant="filled" onMouseEnter={e => setSelectDay(selectDay)} />

                        </div>
                        <div >
                            <label htmlFor="distance" > </label>
                            <TextField id="filled-basic" label="Add Event Total Distance " name="distance" variant="filled" onChange={e => onChange(e)} />


                        </div>
                        <div className="mt-2">

                            <button className="text-sm p-2 bg-blue-600 text-white hover:bg-blue-800 transition duration-300">Enter Event</button>
                            <button className="text-sm p-2 bg-blue-600  hover:bg-blue-800 transition duration-300"><Link to="events">See All Events</Link> </button>

                        </div>
                    </form>
                </div>

            </div>
        </>
    );
};

export default Calendars;
