import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Dashboard from './Pages/Dashboard/Dashboard';
import LoginPage from './Pages/LoginPage/LoginPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import Profile from './Pages/Profile/Profile';
import SignupPage from './Pages/SignupPage/SignupPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from './Pages/SearchPage/SearchPage';


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/signup" element={<SignupPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
