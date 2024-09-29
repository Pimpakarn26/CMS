import React from 'react';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl">Course Management System - Admin Panel</h1>
      </header>

      <nav className="bg-gray-200 p-4">
        <ul className="flex space-x-4">
          <li><a href="/courses" className="text-blue-600">Courses</a></li>
          <li><a href="/create-course" className="text-blue-600">Create Course</a></li>
          <li><a href="/edit-course" className="text-blue-600">Edit Course</a></li>
          <li><a href="/user-management" className="text-blue-600">User Management</a></li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>

      <main className="flex-grow p-4 bg-gray-100">
        {children}
      </main>

      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2024 Course Management System - Admin Panel</p>
      </footer>
    </div>
  );
};

export default AdminLayout;
