const userReducer = (state, action) => {
    switch (action.type) 
    {
        case "SIGNUP_USER":
            console.log("context")
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }

        case "LOGIN_USER":
            console.log("hit LOGIN_USER", action.payload.user)
            return {
                ...state,
                user: action.payload.user,
                isLoading: false
            }

        case "LOGOUT_USER":
            return {}

        case "ALL_USERS":
            console.log("user hit", action)
            return {
                ...state,
                users: action.payload.users,
                isLoading: false
            }

        case "ADD_FRIEND":
            return {
                ...state,
                friends: action.payload
            }

        case "GET_FRIENDS":
            console.log(action.payload)
            return {
                ...state,
                friends: action.payload
            }

        default:
            return state
    }
}

export default userReducer