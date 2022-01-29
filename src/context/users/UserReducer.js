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
            console.log("hihiiy LOGIN_USER", action.payload.user)
            return {
                ...state,
                user: action.payload.user,
                isLoading: false
            }

        case "LOGOUT_USER":
            return {}

        default:
            return state
    }
}

export default userReducer