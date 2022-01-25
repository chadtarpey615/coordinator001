const eventReducer = (state, action) => {
    switch (action.type)
    {
        case "CREATE_EVENT":
            return {
                ...state,
                events: action.payload.events,
                isLoading: false
            }

        case "GET_EVENTS":
            return {
                ...state,
                events: action.payload.events,
                isLoading: false
            }
        default:
            return state
    }
}

export default eventReducer