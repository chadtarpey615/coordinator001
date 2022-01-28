import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import UserContext from "../context/users/UserContext"
import { register, login } from "../context/users/UserActions"
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';



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
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >

                    <Stack>
                        <div className="mb-3">
                            <TextField fullWidth id="filled-basic" label="Email" variant="filled" name="email" onChange={e => onChange(e)} />

                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <TextField fullWidth id="filled-basic" label="Password" variant="filled" name="password" onChange={e => onChange(e)} />

                        </div>


                        <button type="submit" className="btn btn-primary">Submit</button>

                    </Stack>
                </Grid>
            </form>
        </div>
    )
}

export default Login
