import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import UserContext from "../context/users/UserContext"
import { register, login } from "../context/users/UserActions"

const SignUp = () => {
    const { dispatch } = useContext(UserContext)
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

        // dispatch({ type: "SIGNUP_USER" })
        console.log("hiiit")
        if (password !== password2)
        {
            alert("invalid info")
        } else
        {
            const newUser = await register({ username, email, password })

            dispatch({
                type: "SIGNUP_USER",
                payload: newUser
            })

        }
    }

    return (
        <div>
            <h1 className="d-flex justify-content-center mt-5 text-light">Sign up </h1>
            <form onSubmit={e => onSubmit(e)}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Stack>
                        <div className="mb-3">
                            <label className="form-label text-light">User Name</label>
                            <TextField fullWidth id="filled-basic" label="User Name" variant="filled" name="username" onChange={e => onChange(e)} />
                            {/* <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="username" value={username} onChange={e => onChange(e)} /> */}
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-light">Email address</label>
                            <TextField fullWidth id="filled-basic" label="Email" variant="filled" name="email" onChange={e => onChange(e)} />
                            {/* <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={e => onChange(e)} /> */}
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-light">Password</label>
                            <TextField fullWidth id="filled-basic" label="Password" variant="filled" name="password" onChange={e => onChange(e)} />
                            {/* <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={password} onChange={e => onChange(e)} /> */}
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-light">Confirm Password</label>
                            <TextField fullWidth id="filled-basic" label="Password" variant="filled" name="password2" onChange={e => onChange(e)} />
                            {/* <input type="password" className="form-control" id="exampleInputPassword1" name="password2" value={password2} onChange={e => onChange(e)} /> */}
                        </div>

                        <Link className="my-3" to="/login" >Have an account? Log In here </Link>

                        <Button variant="contained" size="large" type="submit" className="btn btn-primary">Submit</Button>
                    </Stack>
                </Grid>
            </form>
        </div>
    )
}

export default SignUp
