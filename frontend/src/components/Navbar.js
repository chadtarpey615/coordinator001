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
        bgcolor: 'rgb(0,39,150)',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>

            <div className="flex flex-row items-center">
                <div>
                    <li className="mx-2">
                        <Link className=" text-white" aria-current="page" to="/">Home</Link>
                    </li>
                </div>

                <div>
                    <li className="mx-2" onToggle >
                        <Link className="text-white" to="/users" >Users</Link>
                    </li>
                </div>
                <div>
                    <li className="mx-2">
                        <Link className="text-white" to="/calendar"  >Calendar</Link>
                    </li>
                </div>
                <div>
                    <li className="mx-2">
                        <Link className="text-white" to="/events">All Events</Link>
                    </li>
                </div>
            </div>
            {/* <nav>
                <div className="flex flex-row bg-slate-700 h-12 items-center">
                    <Link className="text-white" to="/signup">Run-Fit</Link>
                    <div className="basis-1/3 ">
                        <ul className="mx-2" >
                            <li className="mx-2">
                                <Link className="active text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="mx-2" onToggle >
                                <Link className="text-white" to="/users" >Users</Link>
                            </li>
                            <li className="mx-2">
                                <Link className="text-white" to="/calendar"  >Calendar</Link>
                            </li>
                            <li className="mx-2">
                                <Link className="text-white" to="/events">All Events</Link>
                            </li>
                        </ul>
                    </div>

                    {user ? (
                        <ul className="basis-1/3">
                            <li className="mx-2">
                                <li className="text-white" aria-current="page"><EmojiPeopleIcon /> {user.username} </li>
                            </li>
                            <li className="mx-2">
                                <Link onClick={userLogout} className="text-white" aria-current="page" to="/login">Log Out</Link>
                            </li>
                        </ul>
                    ) : (

                            <ul className="">
                                <li className="mx-2">
                                    <Link className="text-white" aria-current="page" to="/signup">Sign Up</Link>
                                </li>
                                <li className="mx-2">
                                    <Link className="text-white" aria-current="page" to="/login">Sign In</Link>
                                </li>
                            </ul>
                        )}
                </div>



            </nav> */}

        </>
    )
}

export default Navbars

    // < Navbar collapseOnSelect expand = "md" bg = "dark" variant = "dark" fixed = "top" className = "py-1" >
    //     <div className="container-fluid">
    //         <Link className="navbar-brand text-white" to="/signup">Run-Fit</Link>
    //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //         <Navbar.Collapse id="responsive-navbar-nav" >
    //             <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
    //                 <li className="nav-item">
    //                     <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
    //                 </li>
    //                 <li className="nav-item" onToggle >
    //                     <Link className="nav-link text-white" to="/users" >Users</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link text-white" to="/calendar"  >Calendar</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link text-white" to="/events">All Events</Link>
    //                 </li>
    //             </ul>
    //             <NavDropdown.Divider bg="light" variant="light" />

    //             {user ? (
    //                 <ul className="navbar-nav ">
    //                     <li className="nav-item">
    //                         <li className="nav-link active text-white" aria-current="page"><EmojiPeopleIcon /> {user.username} </li>
    //                     </li>
    //                     <li className="nav-item">
    //                         <Link onClick={userLogout} className="nav-link active text-white" aria-current="page" to="/login">Log Out</Link>
    //                     </li>
    //                 </ul>
    //             ) : (

    //                     <ul className="navbar-nav ">
    //                         <li className="nav-item">
    //                             <Link className="nav-link active text-white" aria-current="page" to="/signup">Sign Up</Link>
    //                         </li>
    //                         <li className="nav-item">
    //                             <Link className="nav-link active text-white" aria-current="page" to="/login">Sign In</Link>
    //                         </li>
    //                     </ul>
    //                 )}

    //             {user ? (
    //                 <>
    //                     <li onClick={handleOpen} className="nav-link active text-white" aria-current="page" >Friends</li>
    //                     <Modal
    //                         open={open}
    //                         onClose={handleClose}
    //                         aria-labelledby="modal-modal-title"
    //                         aria-describedby="modal-modal-description"
    //                     >
    //                         <Box sx={style}>
    //                             <Stack spacing={2}>


    //                                 <p className="text-info">Friends</p>
    //                                 <hr />
    //                                 {friends.map((friend) => (

    //                                     <h6 className="text-white">{friend}</h6>

    //                                 ))}

    //                             </Stack>
    //                         </Box>
    //                     </Modal>
    //                 </>
    //             ) : (
    //                     <p>User has no friends</p>

    //                 )}


    //         </Navbar.Collapse>

    //     </div>
    //         </Navbar >




