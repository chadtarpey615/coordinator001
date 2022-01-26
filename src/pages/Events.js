import React, { useState, useEffect, useContext } from 'react'
import EventContext from '../context/events/EventContext'
import { getEvents, removeEvent } from '../context/events/EventActions'


const Events = () => {
    const { events, isLoading, dispatch } = useContext(EventContext)

    useEffect(() => {


        getAllEvents()
        console.log("", events)
    }, [dispatch])

    const getAllEvents = async () => {
        const data = await getEvents()

        dispatch({
            type: "GET_EVENTS",
            payload: data
        })
    }
    const deleteEvent = async (e, id) => {

        removeEvent(id)
        dispatch({
            type: "DELETE_EVENT",
            payload: id
        })

        getAllEvents()
    }
    return (
        <div>
            {events.map((event) => (
                <div className="card">
                    <h1 className="card-title">{event.name}</h1>
                    <h1>{event.date}</h1>
                    <h1>{event.distance}</h1>
                    <h1>{event.creator}</h1>
                    <button onClick={e => deleteEvent(e, event._id)}>Delete Event</button>
                </div>
            ))}
        </div>
    )
}

export default Events
