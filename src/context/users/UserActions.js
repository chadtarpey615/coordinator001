import axios from "axios";


export const register = ({ username, email, password }) => async dispatch => {
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
        console.log(response)

    } catch (error)
    {
        console.log(error)
    }
}