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

export const updateEvent = createAsyncThunk("events/all", async (eventId, thunkAPI) => {

})

export const removeEvent = createAsyncThunk("events/all", async (eventId, thunkAPI) => {

})

export const addComment = createAsyncThunk("events/all", async (data, thunkAPI) => {

})

export const deleteComment = createAsyncThunk("events/all", async (commentId, thunkAPI) => {

})

export const eventSlice = createSlice({
    name: "events",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
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
    }
})



export default eventSlice.reducer