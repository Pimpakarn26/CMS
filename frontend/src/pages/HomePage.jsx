import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const HomePage = () => {
  const navigate = useNavigate(); // ใช้ useNavigate สำหรับการเปลี่ยนหน้า
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/v1/auth/signup', {
        username,
        email,
        password,
      });
      setMessage(response.data.message);
      navigate('/courses'); // เปลี่ยนเส้นทางไปยัง Courses เมื่อสมัครสมาชิกเสร็จ
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleSignin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/v1/auth/signin', {
        username,
        password,
      });
      setMessage(`Welcome ${response.data.username}`);
      navigate('/courses'); // เปลี่ยนเส้นทางไปยัง Courses เมื่อเข้าสู่ระบบเสร็จ
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-center text-3xl">Course Management System</h1>
      </header>
      
      <nav className="flex justify-between items-center p-4 bg-blue-500">
        <div className="flex items-center">
          <i className="fa fa-home text-white text-lg mr-2"></i>
          <a href="#" className="text-white">Home</a>
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Search..." 
            className="p-2 rounded border"
          />
          <button className="bg-blue-700 text-white p-2 rounded ml-2">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </nav>

      <main className="flex-grow flex flex-col justify-center items-center p-6">
        <div className="bg-white p-6 rounded shadow-lg max-w-md w-full mb-4">
          <h2 className="text-center text-2xl mb-4">Welcome Everyone! </h2>
          <p className="text-center mb-4">
            Our Course Management System allows users to manage their course offerings effectively. 
            You can sign up to create and manage your courses, track progress, and interact with students.
          </p>
          <p className="text-center mb-4">
            Please sign up or sign in to get started and explore our wide range of courses!
          </p>

          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            className="border p-2 mb-4 w-full rounded"
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="border p-2 mb-4 w-full rounded"
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="border p-2 mb-4 w-full rounded"
          />

          <button onClick={handleSignup} className="bg-blue-600 text-white p-2 rounded w-full mb-2">
            <i className="fa fa-user-plus"></i> Sign Up
          </button>
          <button onClick={handleSignin} className="bg-blue-600 text-white p-2 rounded w-full">
            <i className="fa fa-sign-in"></i> Sign In
          </button>
          
          {message && <p className="text-center mt-4 text-red-500">{message}</p>}
        </div>
      </main>

      <footer className="bg-blue-600 text-white p-4 text-center">
        &copy; 2024 Course Management System
      </footer>
    </div>
  );
};

export default HomePage;
