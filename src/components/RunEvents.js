import React from 'react'
import Card from '../components/Card'
import "../styles/RunEvents.css"

const RunEvents = ({ event, deleteEvent }) => {
    const { name, date, distance, _id, creator } = event
    return (
        <>
            <Card>
                <h1>Event Title: <span>{name}</span></h1>
                <h4>Date: <span>{date}</span></h4>
                <h4>Distance: <span>{distance}</span></h4>
                <h4>Created by: <span>{creator}</span></h4>
                <div className="card-btn">
                    <button onClick={(e) => deleteEvent(e, _id)}></button>
                </div>
            </Card>
        </>
    )
}

export default RunEvents
