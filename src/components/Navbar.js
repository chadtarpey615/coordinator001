import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import UserContext from '../context/users/UserContext';


const Navbar = () => {
    const { user, isLoading, dispatch } = useContext(UserContext)


    useEffect(() => {

        console.log(user)
    })

    const logout = () => {
        dispatch({
            type: "LOGOUT_USER"
        })
    }

    // const { user } = user
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/signup">Run-Fit</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Calendar</a>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
          </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}

                        </ul>
                        {user ? (
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <li className="nav-link active text-white" aria-current="page">Welcome {user.username} </li>
                                </li>
                                <li className="nav-item">
                                    <li onClick={logout} className="nav-link active text-white" aria-current="page" to="/login">Log Out</li>
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

