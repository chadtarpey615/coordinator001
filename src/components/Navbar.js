import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import UserContext from '../context/users/UserContext';
import { useNavigate } from "react-router-dom"
import { getUserFriends } from "../context/users/UserActions"
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


const Navbar = () => {
    const { user, dispatch } = useContext(UserContext)
    const [open, setOpen] = useState(false)
    const history = useNavigate()

    useEffect(() => {

        console.log("navbar", user)
        if (user)
        {
            const userFriends = getUserFriends(user._id)

            dispatch({
                type: "GET_FRIENDS",
                payload: userFriends
            })
        }
    }, [user])

    const logout = () => {
        dispatch({
            type: "LOGOUT_USER"
        })
        history.push("/")
    }
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '11%',
        left: '93%',
        transform: 'translate(-50%, -50%)',
        width: 150,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

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
                                <Link className="nav-link text-white" to="/users">Users</Link>
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

                        {user.friends ? (
                            <>
                                <li onClick={handleOpen} className="nav-link active text-white" aria-current="page" >Friends</li>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Stack spacing={2}>


                                            <h6>hi</h6>

                                        </Stack>
                                    </Box>
                                </Modal>
                            </>
                        ) : (
                                <p></p>

                            )}


                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar




