import React, { useContext, useEffect } from 'react'
import UserContext from "../context/users/UserContext"
import { allUsers } from "../context/users/UserActions"
const Users = () => {
    const { user, users, isLoading, dispatch } = useContext(UserContext)

    const getAllUsers = async () => {

        const usersData = await allUsers()
        dispatch({
            type: "ALL_USERS",
            payload: usersData
        })
    }

    useEffect(() => {
        getAllUsers()
        console.log(users)

    }, [])
    return (
        <div>
            Users
        </div>
    )
}

export default Users
