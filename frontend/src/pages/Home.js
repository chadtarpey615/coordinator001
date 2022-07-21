import React from 'react'
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import runnerImg from "../images/istockphoto.jpeg"
const Home = () => {
    return (
        <>
            <div className="container mt-20">
                <div className="flex">
                    <Animated animationIn="rubberBand">

                        <h1 className="text-white text-7xl underline ">Welcome to Run Fit</h1>
                    </Animated>

                </div>


                <div className="flex mt-12 ">

                    <div className="w-1/2">

                        <Animated animationIn="fadeInLeft">
                            <p class="text-white mt-16">
                                At Run Fit we want to make it easy to locate where runners meetup to run as a group.
                                Great place to make new friends with the common interest of running and fitness.
                                So please login in if you have an account already.If not, no problem lets get you signed up.
                                Good Luck and get running.
                   </p>
                        </Animated>
                    </div>

                    <div className="w-1/2 ">
                        <Animated animationIn="fadeInRight">

                            <img className="img-fluid rounded-full shadow" src={runnerImg} alt=" A person running on the street" />
                        </Animated>
                    </div>

                </div>

                <div className="flex mt-8 w-1/2 justify-center">

                    <Animated animationIn="fadeInDown">

                        <button className="mx-3 w-28 border-4 rounded-full hover:bg-gray-400" ><Link className="text-white" to="/signup"> Sign Up</Link></button>
                        <button className="mx-3  w-28 border-4 rounded-full" ><Link className="text-white" to="/login"> Log In</Link></button>
                    </Animated>
                </div>
            </div>

        </>
    )
}

export default Home


    // < div className = "row  align-items-md-center align-items-lg-end" >
    //     <div className="col-md-6">
    //         <div className="d-flex justify-content-center py-5 my-2">
    //             <Animated animationIn="rubberBand">

    //                 <h1 className="display-md-2 display-sm-4 text-white my-md-3">Welcome to Run Fit</h1>
    //             </Animated>


    //         </div>
    //         <div className="row ">
    //             <div className="col-md-12">
    //                 <div className="d-flex flex-row-reverse py-5">
    //                     <Animated animationIn="fadeInLeft">
    //                         <p className="mx-5">
    //                             At Run Fit we want to make it easy to locate where runners meetup to run as a group.
    //                             Great place to make new friends with the common interest of running and fitness.
    //                             So please login in if you have an account already.If not, no problem lets get you signed up.
    //                             Good Luck and get running.
    //                 </p>
    //                     </Animated>


    //                 </div>
    //             </div>
    //         </div>

    //         <div className="row ">
    //             <div className="col-md-12 ">
    //                 <div className="d-flex justify-content-center home-btns divide-y divide-gray-200 ">

    //                     <Animated animationIn="fadeInDown">

    //                         <button className="mx-3" ><Link className="text-white" to="/signup"> Sign Up</Link></button>
    //                         <button className="mx-3" ><Link className="text-white" to="/login"> Log In</Link></button>
    //                     </Animated>


    //                 </div>
    //             </div>
    //         </div>
    //     </div>




    //     <div className="col-md-6 col-sm-12 ">
    //         <div className="d-flex justify-content-center py-5 my-5">
    //          
    //         </div>
    //     </div>
    //         </div >




