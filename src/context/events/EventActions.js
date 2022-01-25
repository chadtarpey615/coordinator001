import axios from "axios";




export const getEvents = async (events) => {

    const response = await axios.get("/api/events/all-events")
    console.log("resrersr", response, events)
    return response.data
}
export const createEvent = async (event) => {
    console.log("!!!!!!", event)

    const response = await axios.post("/api/events", event)
    return { events: response.data }
}


export const updateEvent = async () => {

}