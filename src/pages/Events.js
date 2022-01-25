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
        console.log("eveevts", events)
    }, [dispatch])
    return (
        <div>
            <h1>Events</h1>
        </div>
    )
}

export default Events
