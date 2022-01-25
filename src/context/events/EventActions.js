import axios from "axios";

export const createEvent = async (event) => {
    console.log("!!!!!!", event)

    const response = await axios.post("/api/events", event)
    return { events: response.data }
}


export const updateEvent = async () => {

}