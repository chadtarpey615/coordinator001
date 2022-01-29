import React from 'react'
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import Button from '@mui/material/Button';
import image from "../images/istockphoto.jpeg"
const Home = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="d-flex justify-content-center py-5">
                        <Animated animationIn="rubberBand">

                            <h1>Welcome to Run Fit</h1>
                        </Animated>


                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex justify-content-center py-5">
                                <Animated animationIn="bounceInLeft">
                                    <p className="mx-5">
                                        At Run Fit we want to make it easy to locate where runners meetup to run as a group.
                                        Great place to make new friends with the common interest of running and fitness.
                                        So please login in if you have an account already.If not, no problem lets get you signed up.
                                        Good Luck and get running.
                    </p>
                                </Animated>


                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex justify-content-center">

                                <div className="home-btns">
                                    <Button className="mx-3" variant="contained" disableElevation size="large" color="success"><Link to="/signup"> Sign Up</Link></Button>
                                    <Button className="mx-3" variant="contained" disableElevation ><Link to="/login"> Log In</Link></Button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>



                <div className="col-md-6">
                    <div className="d-flex justify-content-center py-5 my-5">
                        <Animated animationIn="bounceInRight">

                            <img src={image} alt="picture of a person running on the street" />
                        </Animated>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Home
