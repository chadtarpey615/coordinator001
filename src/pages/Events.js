import React, { useEffect, useContext, useCallback } from 'react'
import EventContext from '../context/events/EventContext'
import { getEvents, removeEvent, getComments } from '../context/events/EventActions'
import RunEvents from '../components/RunEvents'


const Events = () => {
    const { events, dispatch } = useContext(EventContext)

    const getAllEvents = async () => {

        const data = await getEvents()
        console.log("event.js", data.events)
        dispatch({
            type: "GET_EVENTS",
            payload: data
        })

    }

    useEffect(() => {


        getAllEvents()
        console.log("", events)
    }, [])

    const deleteEvent = async (e, id) => {

        removeEvent(id)
        dispatch({
            type: "DELETE_EVENT",
            payload: id
        })

        getAllEvents()
        //temp fix but need to work reloading events with using the dom
        window.location.reload()
    }
    return (
        <div className="row ">
            <div className="col-md-12 d-flex justify-content-center mt-5">
                <h1>All Events</h1>
            </div>
            <div className="card-container mt-5">

                {
                    events.map(event => (<RunEvents event={event} deleteEvent={deleteEvent} />))
                }
            </div>
        </div>
    )
}


export default Events
