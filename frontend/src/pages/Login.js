import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { login } from "../features/auth/authSlice"
import { useSelector, useDispatch } from "react-redux";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Spinner from "../components/Spinner"


const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })


    const history = useNavigate()
    const dispatch = useDispatch();
    const { user, isLoading } = useSelector((state) => state.user)

    const { email, password } = loginData

    const onChange = e => setLoginData({ ...loginData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault()


        console.log("hiiit")


        const userInfo = {
            email,
            password
        }
        dispatch(login(userInfo))

        history("/calendar")

    }

    if (isLoading) { return <Spinner /> }

    return (
        <div >
            <h1 className="d-flex justify-content-center mt-5 pt-5  text-white">Log In </h1>
            <form onSubmit={e => onSubmit(e)}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >

                    <Stack>
                        <div className="mb-3">
                            <label className="form-label text-light">Email</label>
                            <TextField fullWidth id="filled-basic" label="Email" variant="filled" name="email" onChange={e => onChange(e)} />

                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-light">Password</label>
                            <TextField fullWidth id="filled-basic" label="Password" variant="filled" name="password" onChange={e => onChange(e)} />

                        </div>

                        <Link className="my-3" to="/signup" >Don't have  an account? Sign Up here </Link>
                        <Button variant="contained" size="large" type="submit" className="btn btn-primary">Submit</Button>

                    </Stack>
                </Grid>
            </form>
        </div>
    )
}

export default Login
