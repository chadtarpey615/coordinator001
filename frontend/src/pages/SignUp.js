import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { register } from "../features/auth/authSlice"
import { useSelector, useDispatch } from "react-redux";

const SignUp = () => {
    const [loginData, setLoginData] = useState({
        username: "",
        email: "",
        password: "",
        password2: ""
    })

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user)

    useEffect(() => {
        console.log(user)
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
            const newUser = {
                username,
                email,
                password
            }

            dispatch(register(newUser))

        }
    }

    return (
        <div>
            <h1 className="d-flex justify-content-center mt-5 py-5 text-white">Sign up </h1>
            <form onSubmit={e => onSubmit(e)}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Stack>
                        <div className="mb-3">
                            <label className="form-label text-white">User Name</label>
                            <TextField fullWidth id="filled-basic" label="User Name" variant="filled" name="username" onChange={e => onChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-white">Email address</label>
                            <TextField fullWidth id="filled-basic" label="Email" variant="filled" name="email" onChange={e => onChange(e)} />
                            <div id="emailHelp" className=" mt-4 form-text text-white">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-white">Password</label>
                            <TextField fullWidth id="filled-basic" label="Password" variant="filled" name="password" onChange={e => onChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-white">Confirm Password</label>
                            <TextField fullWidth id="filled-basic" label="Password" variant="filled" name="password2" onChange={e => onChange(e)} />
                        </div>

                        <Link className="my-3 text-white" to="/login" >Have an account? Log In here </Link>

                        <Button variant="contained" size="large" type="submit" className="btn btn-primary">Submit</Button>
                    </Stack>
                </Grid>
            </form>
        </div>
    )
}

export default SignUp
