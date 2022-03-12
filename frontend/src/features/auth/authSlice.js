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

    console.log(user)
    try
    {

        return await authService.register(user)
    } catch (error)
    {
        console.log(error)
    }
})

export const login = createAsyncThunk("user/login", async (userInfo, thunkAPI) => {
    console.log("loginslice", userInfo)
    try
    {
        return await authService.login(userInfo)
    } catch (error)
    {
        const message = (error.response && error.response.data && error.response.data.message)
            || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

export const logout = createAsyncThunk("user/logout", async () => {
    console.log("hitttttttt")
    await authService.logout()
})

export const allUsers = createAsyncThunk("user/allFriends", async () => {
    try
    {
        return await authService.allUsers()
    } catch (error)
    {

    }
})

export const allNewFriend = createAsyncThunk("user/newFriends", async () => {
    // try
    // {
    //     return await authService.addNewFriend()
    // } catch (error)
    // {

    // }
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
                console.log(action.payloa)
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
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                console.log(action.payloa)
                state.isLoading = false
                state.userSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.userError = true
                state.userMessage = action.payload
                state.user = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
    }
})


export default userAuthSlice.reducer