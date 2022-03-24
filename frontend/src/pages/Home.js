import React from 'react'
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import runnerImg from "../images/istockphoto.jpeg"
const Home = () => {
    return (
        <>
            <div className="row align-items-md-center align-items-lg-end">
                <div className="col-md-6">
                    <div className="d-flex justify-content-center py-5 my-2">
                        <Animated animationIn="rubberBand">

                            <h1 className="display-2 text-white">Welcome to Run Fit</h1>
                        </Animated>


                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="d-flex flex-row-reverse py-5">
                                <Animated animationIn="fadeInLeft">
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
                        <div className="col-md-12 ">
                            <div className="d-flex justify-content-center home-btns">

                                <Animated animationIn="fadeInDown">

                                    <button className="mx-3" ><Link className="text-white" to="/signup"> Sign Up</Link></button>
                                    <button className="mx-3" ><Link className="text-white" to="/login"> Log In</Link></button>
                                </Animated>


                            </div>
                        </div>
                    </div>
                </div>




                <div className="col-md-6 col-sm-12 ">
                    <div className="d-flex justify-content-center py-5 my-5">
                        <Animated animationIn="fadeInRight">

                            <img className="img-fluid rounded-pill shadow" src={runnerImg} alt=" A person running on the street" />
                        </Animated>
                    </div>
                </div>
            </div>





        </>
    )
}

export default Home
