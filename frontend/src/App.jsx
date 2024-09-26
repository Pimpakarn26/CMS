import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import CourseList from './components/CourseList';
import CourseCard from './components/CourseCard';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import AuthPage from './pages/AuthPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar /> {/* เพิ่ม Navbar ที่นี่ */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/:id" element={<CoursePage />} /> {/* ถ้าต้องการแสดง Course ตาม ID */}
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
