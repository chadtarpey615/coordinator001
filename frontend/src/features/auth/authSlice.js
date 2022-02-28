import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from "./authService"


const user = JSON.parse(localStorage.getItem("user"))
const initialState = {
    user: user ? user : null,
    userError: false,
    userSuccess: false,
    isLoading: false,
    userMessage: ""
}

export const register = createAsyncThunk("user/register", async (user, thunkAPI) => {
    console.log("userr", user)
    try
    {
        return await authService.register(user)
    } catch (error)
    {
        const message = (error.response && error.response.data && error.response.data.message)
            || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})


export const userAuthSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                console.log(action.payload)
                state.isLoading = false
                state.userSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.userError = true
                state.userMessage = action.payload
                state.user = null
            })
    }
})


export default userAuthSlice.reducer