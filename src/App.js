import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { UserProvider } from "./context/users/UserContext"
import Navbar from "./components/Navbar"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Calendar from "./pages/Calendar"

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
