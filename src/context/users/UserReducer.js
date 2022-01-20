const userReducer = (state, action) => {
    switch (action.type) 
    {
        case "SIGNUP_USER":
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