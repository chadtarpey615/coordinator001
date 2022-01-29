import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import image from "../images/istockphoto.jpeg"
const Home = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="d-flex justify-content-center py-5">
                        <h1>Welcome to Run Fit</h1>


                    </div>
                </div>



                <div className="col-md-6">
                    <div className="d-flex justify-content-center py-5 my-5">
                        <img src={image} alt="picture of a person running on the street" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="d-flex justify-content-center py-5">
                        <p>
                            At Run Fit we want to make it easy to locate where runners meetup to run as a group.
                            Great place to make new friends with the common interest of running and fitness.
                            So please login in if you have an account already.If not, no problem lets get you signed up.
                            Good Luck and get running.
                    </p>


                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="d-flex justify-content-center">

                        <Button variant="contained" disableElevation size="large" color="success"><Link to="/signup"> Sign Up</Link></Button>
                        <Button variant="contained" disableElevation size="large"><Link to="/login"> Log In</Link></Button>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
