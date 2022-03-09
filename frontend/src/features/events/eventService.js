import axios from "axios"

const API_URL = '/api/events/'


const getEvents = async (events) => {
    const response = await axios.get(`${API_URL}/all-events`)
    return response.data

}


const createEvent = async (event, token) => {
    const config = {
        headers: {
            Authoriztion: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, event, config)

    return response.data
}

const updateEvent = async (data, token) => {
    console.log("service", data)
    const { user, name, date, distance, id } = data
    const config = {
        headers: {
            Authoriztion: `Bearer ${token}`
        }
    }

    const updatedEvent = {
        id: id,
        name: name,
        date: date,
        distance: distance,
        creator: user

    }

    const response = await axios.put(`${API_URL}/all-events/${id}`, updatedEvent, config)
    return response.data
}

const removeEvent = async (id) => {
    try
    {
        const response = await axios.get(`${API_URL}/${id}`)
        return response.data
    } catch (error)
    {

    }
}

const addComment = async (data) => {
    console.log(data)
    const comment = {
        name: data.name,
        comment: data.comment

    }

    try
    {
        const response = await axios.post(`${API_URL}/${data._id}`, comment)
        return response.data
    } catch (error)
    {

    }

}

const deleteComment = async (event, comment) => {
    console.log(event)
    try
    {
        const response = await axios.get(`/api/events/${event}/${comment}`)
        return response.data
    } catch (error)
    {

    }
}


const eventService = {
    getEvents,
    createEvent,
    updateEvent,
    removeEvent,
    addComment,
    deleteComment
}

export default eventService