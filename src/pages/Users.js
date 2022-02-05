import React, { useContext, useEffect } from 'react'
import UserContext from "../context/users/UserContext"
import Card from "../components/Card"
import { allUsers } from "../context/users/UserActions"
import PeopleIcon from '@mui/icons-material/People';
const Users = () => {
    const { user, users, isLoading, dispatch } = useContext(UserContext)

    const getAllUsers = async () => {

        const usersData = await allUsers()
        dispatch({
            type: "ALL_USERS",
            payload: usersData
        })
    }

    const addFriend = () => {
        console.log("hiot")
    }

    useEffect(() => {
        getAllUsers()
        console.log(users)

    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center text-light my-5">

                    <h1>Run Fit Friends </h1>
                </div>
            </div>
            {users.map((user) => (
                <Card>
                    <h1>{user.username}</h1>
                    <p>Has Events: {user.events.length}</p>
                    {/* <p>Has Followers: {user.followers.length}</p> */}
                    <button onClick={() => addFriend(user)}><PeopleIcon /></button>
                </Card>
            ))}
        </div>
    )
}

export default Users
