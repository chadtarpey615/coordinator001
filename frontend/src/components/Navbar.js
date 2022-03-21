import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { logout, getUserFriends } from "../features/auth/authSlice"
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


const Navbars = () => {
    const { user, users, friends } = useSelector((state) => state.user)
    const [open, setOpen] = useState(false)
    const history = useNavigate()
    const dispatch = useDispatch()




    useEffect(() => {
        if (user)
        {

            dispatch(getUserFriends(user._id))
        }
        console.log(user)
    }, [])




    const userLogout = () => {

        dispatch(logout())
    }
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '18%',
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
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/signup">Run-Fit</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
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
                                    <Link onClick={userLogout} className="nav-link active text-white" aria-current="page" to="/login">Log Out</Link>
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

                        {user ? (
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


                                            {friends.map((friend) => (

                                                <h6>{friend}</h6>
                                            ))}

                                        </Stack>
                                    </Box>
                                </Modal>
                            </>
                        ) : (
                                <p>User has no friends</p>

                            )}


                    </Navbar.Collapse>

                </div>
            </Navbar>



        </>
    )
}

export default Navbars




