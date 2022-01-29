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
    console.log("actions", data)

    const { user, name, date, distance, creator } = data

    // const updatedEvent = {
    //     id: 
    // }
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