import eventService from "./eventService"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    events: [],
    comments: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const getEvents = createAsyncThunk("events/all", async (data, thunkAPI) => {

    try
    {
        return await eventService.getEvents()
    } catch (error)
    {

    }
})

export const createEvent = createAsyncThunk("events/all", async (data, thunkAPI) => {
    try
    {
        const token = thunkAPI.getState().user.user.token
        return await eventService.createEvent(data, token)
    } catch (error)
    {

    }
})

export const updateEvent = createAsyncThunk("events/updateEvent", async (event, thunkAPI) => {

    try
    {
        const token = thunkAPI.getState().user.user.token
        return await eventService.updateEvent(event, token)
    } catch (error)
    {

    }
})

export const removeEvent = createAsyncThunk("events/all", async (eventId, thunkAPI) => {
    try
    {
        const token = thunkAPI.getState().user.user.token
        return await eventService.removeEvent(eventId, token)
    } catch (error)
    {

    }
})

export const addComment = createAsyncThunk("events/comment", async (data, thunkAPI) => {
    console.log(data)
    try
    {
        return await eventService.addComment(data)
    } catch (error)
    {

    }

})

export const deleteComment = createAsyncThunk("events/all", async (commentId, thunkAPI) => {
    try
    {
        return await eventService.deleteComment(commentId)
    } catch (error)
    {

    }
})

export const eventSlice = createSlice({
    name: "events",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getEvents.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getEvents.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.events = action.payload
            })
            .addCase(getEvents.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateEvent.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateEvent.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.events = action.payload
            })
            .addCase(updateEvent.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})



export default eventSlice.reducer