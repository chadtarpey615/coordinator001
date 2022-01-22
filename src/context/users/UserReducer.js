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

        default:
            return state
    }
}

export default userReducer