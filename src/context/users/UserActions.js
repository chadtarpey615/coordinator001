import axios from "axios";

export const register = async ({ username, email, password }) => {
    console.log("copntessrtsf")
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const signupInfo = JSON.stringify({ username, email, password })


    try
    {
        const response = await axios.post("/api/users", signupInfo, config)
        // dispatch({
        //     type: "SIGNUP_USER",
        //     payload: response.data
        // })
        console.log(response)

    } catch (error)
    {
        console.log(error)
    }
}


export const login = async ({ email, password }) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }



    const response = await axios.post("/api/users/login", { email, password }, config)
}


