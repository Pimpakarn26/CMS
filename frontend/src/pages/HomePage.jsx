import React from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import { HiUser, HiLockClosed } from 'react-icons/hi'; // ใช้ไอคอนจาก react-icons

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome! 
            <br></br> The Courses Management System</h1>
        <p className="text-center mb-8">CMS is a system that allows you to check courses, add, delete and edit them instantly! 
            <br></br>Please log in or sign up to view courses.</p>
        <div className="flex justify-center space-x-4">
          <Link to="/login">
            <button className="btn btn-primary flex items-center space-x-2">
              <HiLockClosed className="h-5 w-5" />
              <span>Login</span>
            </button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-secondary flex items-center space-x-2">
              <HiUser className="h-5 w-5" />
              <span>Signup</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
