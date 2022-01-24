import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { UserProvider } from "./context/users/UserContext"
import { EventProvider } from "./context/events/EventContext"
import Navbar from "./components/Navbar"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Calendars from "./pages/Calendars"
import "./App.css"
function App() {
  return (
    <UserProvider>
      <EventProvider>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/calendar" element={<Calendars />} />
          </Routes>
        </Router>
      </EventProvider>
    </UserProvider>
  );
}

export default App;
