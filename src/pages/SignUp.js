import React, { useState } from 'react'
import { register } from "../context/users/UserActions"

const SignUp = () => {
    const [loginData, setLoginData] = useState({
        username: "",
        email: "",
        password: "",
        password2: ""
    })

    const { username, email, password, password2 } = loginData

    const onChange = e => setLoginData({ ...loginData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault()
        console.log("hiiit")
        if (password !== password2)
        {
            alert("invalid info")
        } else
        {
            register({ username, email, password })
        }
    }

    return (
        <div>
            <h1 className="d-flex justify-content-center mt-5">Sign up </h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className="mb-3">
                    <label className="form-label">User Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="username" value={username} onChange={e => onChange(e)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={e => onChange(e)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={password} onChange={e => onChange(e)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password2" value={password2} onChange={e => onChange(e)} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}

export default SignUp
