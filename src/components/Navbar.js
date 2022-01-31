import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import UserContext from '../context/users/UserContext';


const Navbar = () => {
    const { user, dispatch } = useContext(UserContext)


    useEffect(() => {

        console.log("navbar", user)
    }, [user])

    const logout = () => {
        dispatch({
            type: "LOGOUT_USER"
        })
    }

    return (
        <>
            <nav nav className="navbar navbar-expand-lg navbar-light bg-dark" >
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/signup">Run-Fit</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/calendar">Calendar</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/events">All Events</Link>
                            </li>
                        </ul>


                        {user ? (
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <li className="nav-link active text-white" aria-current="page"><EmojiPeopleIcon /> {user.username} </li>
                                </li>
                                <li className="nav-item">
                                    <Link onClick={logout} className="nav-link active text-white" aria-current="page" to="/login">Log Out</Link>
                                </li>
                            </ul>
                        ) : (

                                <ul className="navbar-nav ">
                                    <li className="nav-item">
                                        <Link className="nav-link active text-white" aria-current="page" to="/signup">Sign Up</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active text-white" aria-current="page" to="/login">Sign In</Link>
                                    </li>
                                </ul>
                            )}


                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar




