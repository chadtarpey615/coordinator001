import { createContext, useReducer } from "react"
import eventReducer from "./EventReducer"
const EventContext = createContext()

export const EventProvider = ({ children }) => {
    const initialState = {
        events: [],
        comments: [],
        isLoading: false
    }

    const [state, dispatch] = useReducer(eventReducer, initialState)


    return <EventContext.Provider value={{
        ...state,
        dispatch
    }}>
        {children}
    </EventContext.Provider>
}

export default EventContext