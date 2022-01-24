import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import UserContext from "../context/users/UserContext"
import { register, login } from "../context/users/UserActions"

const Login = () => {
    const { user, isLoading, dispatch } = useContext(UserContext)
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })


    const history = useNavigate()

    const { email, password } = loginData

    const onChange = e => setLoginData({ ...loginData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault()


        console.log("hiiit")


        const userInfo = await login({ email, password })

        dispatch({
            type: "LOGIN_USER",
            payload: userInfo
        })
        history("/calendar")

    }

    return (
        <div>
            <h1 className="d-flex justify-content-center mt-5">Log In </h1>
            <form onSubmit={e => onSubmit(e)}>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={e => onChange(e)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={password} onChange={e => onChange(e)} />
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}

export default Login
