import axios from "axios";

export const register = async ({ username, email, password }) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const signupInfo = JSON.stringify({ username, email, password })


    try
    {
        const response = await axios.post("/api/users", signupInfo, config)
        return { users: response.data }

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

    return { user: response.data }
}


export const allUsers = async () => {
    const response = await axios.get("/api/users/users")
    return { users: response.data }
}

export const addNewFriend = async (friend, data) => {
    console.log("friend", friend, data._id)

    const response = axios.post(`/api/users/${friend}/${data._id}`)

    return { users: response.data }
}




