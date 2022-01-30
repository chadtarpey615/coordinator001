import axios from "axios";




export const getEvents = async (events) => {

    const response = await axios.get("/api/events/all-events")
    // console.log("resrersr", response, events)
    return { events: response.data }
}
export const createEvent = async (event) => {
    console.log("!!!!!!", event)

    const response = await axios.post("/api/events", event)
    return { events: response.data }
}


export const updateEvent = async (data) => {
    // console.log("actions", data)

    const { user, name, date, distance, creator, id } = data
    console.log(user)

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const updatedEvent = {
        id: id,
        name: name,
        date: date,
        distance: distance,
        creator: user

    }


    const response = await axios.put(`/api/events/all-events/${id}`, updatedEvent, config)

}







export const removeEvent = async (id) => {
    // console.log(id)
    try
    {

        const response = await axios.get(`/api/events/${id}`)
    } catch (error)
    {
        console.log(error)
    }
}


export const addComment = async (data) => {
    console.log("comment action", data)
    const comment = {
        name: data.name,
        comment: data.comment

    }

    try
    {
        const response = await axios.post(`/api/events/${data._id}`, comment)
        return { comments: response.data }
    } catch (error)
    {
        console.log(error)
    }
}