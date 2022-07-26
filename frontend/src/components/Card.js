import React from 'react'
import "../styles/Card.css"


const Card = (props) => {
    return (
        <div className='flex border-2' >
            {props.children}
        </div>
    )
}

export default Card