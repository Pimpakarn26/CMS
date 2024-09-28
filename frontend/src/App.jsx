import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Card from './Components/Card';
import Course from './Components/Course';
// import Header from './Components/Hearder';
// import Search from './Components/Search';
// import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/courses" element={<Course />} />
      </Routes>
    </Router>
  );
}



export default App;
