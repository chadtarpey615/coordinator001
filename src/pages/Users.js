import React, { useContext, useEffect } from 'react'
import UserContext from "../context/users/UserContext"
import Card from "../components/Card"
import { allUsers, addNewFriend } from "../context/users/UserActions"
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

    const addFriend = (friend, data) => {
        addNewFriend(friend._id, data)
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
            {users ? users.map((data) => (
                <Card>
                    <h1>{data.username}</h1>
                    <p>Has Events: {data.events.length}</p>
                    {/* <p>Has Followers: {data.followers.length}</p> */}
                    <button onClick={() => addFriend(user, data)}><PeopleIcon /></button>
                </Card>
            )) : (
                    <h1>No Users</h1>
                )}
        </div>
    )
}

export default Users
