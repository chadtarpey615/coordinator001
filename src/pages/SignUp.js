import React, { useState } from 'react'

const SignUp = () => {
    const [loginData, setLoginData] = useState({
        username: "",
        email: "",
        password: "",
        password2: ""
    })

    const { username, email, password, password2 } = loginData

    const onChange = e => setLoginData({ ...loginData, [e.target.name]: e.target.value })

    return (
        <div>
            <h1 className="d-flex justify-content-center mt-5">Sign up </h1>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">User Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={e => onChange(e)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={e => onChange(e)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={e => onChange(e)} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password2} onChange={e => onChange(e)} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default SignUp
