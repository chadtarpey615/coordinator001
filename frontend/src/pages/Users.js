import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card"
import { allUsers, addNewFriend } from "../features/auth/authSlice"
import PeopleIcon from '@mui/icons-material/People';
import image from "../images/avatar.jpeg"
import Spinner from '../components/Spinner';



const Users = () => {
    const { user, users, isLoading } = useSelector((state) => state.user)
    const dispatch = useDispatch();

    const getAllUsers = async () => {

        await dispatch(allUsers())

    }

    const addFriend = async (friend, data) => {
        console.log("Data", data)
        await dispatch(addNewFriend({ friend, data }))
    }

    useEffect(() => {
        getAllUsers()

    }, [])
    if (isLoading) { return <Spinner /> }
    return (
        <div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center text-light my-5">

                    <h1>Run Fit Users </h1>
                </div>
            </div>
            <div className="row">
                {users ? users.map((data) => (
                    <div className="col-md-4 col-sm-6 my-2">

                        <Card>
                            <div className="row">
                                <div className="col-6-md d-flex justify-space-between">
                                    <img
                                        src={image}
                                        class="rounded-circle shadow-4"
                                        style={{ width: "100px" }}
                                        alt="Avatar"
                                    />
                                    {user.username === data.username ? (
                                        <h1 className="mx-5 my-5">{data.username}:Your Account</h1>
                                    ) : (
                                            <h1 className="mx-5 my-5">{data.username}</h1>
                                        )}

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
