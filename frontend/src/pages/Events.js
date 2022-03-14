import React from 'react'
import { getEvents, removeEvent } from "../features/events/eventSlice"
import { useSelector, useDispatch } from "react-redux";
import RunEvents from '../components/RunEvents'


const Events = () => {


    const dispatch = useDispatch();

    const { events } = useSelector((state) => state.events)





    const deleteEvent = async (e, id) => {
        dispatch(removeEvent(id))
        //temp fix but need to work reloading events with using the dom
        window.location.reload()
    }
    return (
        <div className="row">
            <div className="col-md-12  d-flex justify-content-center">
                <h1>All Events</h1>
            </div>




            <div className="card-container">

                {
                    events.map(event => (<RunEvents event={event} deleteEvent={deleteEvent} />))
                }
            </div>
        </div>




    )
}


export default Events
