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
            <div className="flex justify-center text-white my-5">

                <h1 className="text-4xl">Run Fit Users </h1>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap justify-around ">
                {users ? users.map((data) => (
                    <div className="mx-auto border-2">

                        <Card >

                            <div className="flex w-68 justify-start ">
                                <img
                                    src={image}
                                    class="rounded-circle shadow-xl w-1/3"

                                    alt="Avatar"
                                />
                                <div className="flex flex-col justify-center w-1/3">
                                    {user.username === data.username ? (
                                        <h1 className="mx-2 my-5 text-white text-2xl">{data.username}</h1>
                                    ) : (
                                        <h1 className=" mx-2 my-5 text-white text-2xl">{data.username}</h1>
                                    )}

                                    <p className="text-white">Events: {data.events.length}</p>
                                    <p className="text-white">Friends: {data.friends.length}</p>
                                    <button className='text-white' onClick={() => addFriend(user, data)}><PeopleIcon /> Add Friend</button>
                                </div>
                            </div>
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
