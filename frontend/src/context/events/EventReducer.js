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

        case "DELETE_EVENT":
            return {
                ...state,
                events: state.events.filter(x => x.events !== action.payload)
            }

        case "UPDATE_EVENT":
            console.log("update reducer hit")
            return {
                ...state,
                events: action.payload.events,
                isLoading: false
            }

        case "ADD_COMMENT":
            console.log("comment reducer")
            return {
                ...state,
                comments: action.payload.comments
            }



        case "DELETE_COMMENT":
            console.log("reduce", state.events)
            return {
                ...state,
                comments: state.events.comments.filter(x => x.comments !== action.payload),

            }


        default:
            return state
    }
}

export default eventReducer