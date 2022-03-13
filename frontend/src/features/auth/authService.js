import axios from "axios"

const API_URL = '/api/users'

const register = async (userData) => {
    const response = await axios.post(API_URL, userData)
    console.log("register", response)
    if (response.data)
    {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data
}

const login = async (user) => {
    console.log("hi", user)
    const response = await axios.post(API_URL + "/login", user)

    if (response.data)
    {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data
}

const logout = () => localStorage.removeItem("user")


const allUsers = async () => {
    const response = await axios.get(`${API_URL}/users`)
    return response.data
}

const addNewFriend = async (friend, data) => {
    console.log("friend", friend, data._id)

    try
    {
        const response = axios.post(`/api/users/${friend._id}/${data._id}`)

        return response.data
    } catch (error)
    {

    }
}

const getUserFriends = async (id) => {
    const response = await axios.get(`/api/users/${id}`)
    console.log(response.data)
    return response.data
}

const authService = {
    register,
    login,
    logout,
    allUsers,
    addNewFriend,
    getUserFriends
}

export default authService