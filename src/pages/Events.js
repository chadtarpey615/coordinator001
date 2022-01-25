import React, { useState, useEffect, useContext } from 'react'
import EventContext from '../context/events/EventContext'
import { getEvents } from '../context/events/EventActions'


const Events = () => {
    const { events, isLoading, dispatch } = useContext(EventContext)

    useEffect(() => {

        const getAllEvents = async () => {
            const data = await getEvents()

            dispatch({
                type: "GET_EVENTS",
                payload: data
            })
        }

        getAllEvents()
        console.log("", events)
    }, [dispatch])

    const { } = events
    return (
        <div>
            {events.map((event) => (
                <>
                    <h1>{event.name}</h1>
                    <h1>{event.date}</h1>
                    <h1>{event.distance}</h1>
                    <h1>{event.creator}</h1>
                </>
            ))}
        </div>
    )
}

export default Events
