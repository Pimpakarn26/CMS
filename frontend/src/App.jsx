// App.jsx
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import Signin from './components/Signin';
import Signup from './components/Signup';
import CreateCourse from './components/CreateCourse';
import Course from './components/Course'; // Ensure the path is correct

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-course" element={<CreateCourse />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
