import React, { useContext, useEffect } from 'react'
import UserContext from "../context/users/UserContext"
import Card from "../components/Card"
import { allUsers, addNewFriend } from "../context/users/UserActions"
import PeopleIcon from '@mui/icons-material/People';
import image from "../images/avatar.jpeg"
const Users = () => {
    const { user, users, dispatch } = useContext(UserContext)

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

                    <h1>Run Fit Users </h1>
                </div>
            </div>
            <div className="row">
                {users ? users.map((data) => (
                    <div className="col-md-4">

                        <Card>
                            <div className="row">
                                <div className="col-6-md d-flex justify-space-between">
                                    <img
                                        src={image}
                                        class="rounded-circle shadow-4"
                                        style={{ width: "150px" }}
                                        alt="Avatar"
                                    />
                                    <h1 className="mx-5 my-5">{data.username}</h1>
                                </div>
                            </div>
                            <p>Has Events: {data.events.length}</p>
                            <p>Has Followers: {data.friends.length}</p>
                            <button onClick={() => addFriend(user, data)}><PeopleIcon /></button>
                        </Card>
                    </div>
                )) : (
                        <h1>No Users</h1>
                    )}
            </div>
        </div>
    )
}

export default Users
