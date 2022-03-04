import ticketService from "./ticketService"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    events: [],
    comments: [],
    isLoading: false,
    message: ''
}

export const getEvents = createAsyncThunk("events/all", async (data, thunkAPI) => {

})

export const createEvent = createAsyncThunk("events/all", async (data, thunkAPI) => {

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
    extraReducers: (builder) => { }
})



export default eventSlice.reducer