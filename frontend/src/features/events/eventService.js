import axios from "axios"

const API_URL = '/api/events/'


const getEvents = async (events) => {
    const response = await axios.get(`${API_URL}/all-events`)
    return response.data

}


const createEvent = async (event) => { }

const updateEvent = async (data) => { }

const removeEvent = async (id) => { }

const addComment = async (data) => { }

const deleteComment = async (id) => { }


const eventService = {
    getEvents,
    createEvent,
    updateEvent,
    removeEvent,
    addComment,
    deleteComment
}

export default eventService