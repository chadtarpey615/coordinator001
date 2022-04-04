import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Container from '@mui/material/Container';
import Navbar from "./components/Navbar"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Calendars from "./pages/Calendars"
import "./App.css"
import Events from "./pages/Events"
import Home from "./pages/Home"
import Users from "./pages/Users";
import Footer from "./components/Footer"
function App() {
  return (

    <div className="container-fluid">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/calendar" element={<Calendars />} />
          {/* <Route path="/events" element={<Events />} /> */}
        </Routes>
      </Router>
      <Footer />
      <ToastContainer />
    </div>

  );
}

export default App;
