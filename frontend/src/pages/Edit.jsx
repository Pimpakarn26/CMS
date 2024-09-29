import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
  const { courseId } = useParams(); // Get the course ID from the URL
  const navigate = useNavigate(); // For navigation after editing
  const [course, setCourse] = useState({
    name: '',
    code: '',
    creditHours: '',
    // Add other course properties as needed
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch the existing course data using courseId
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/courses/${courseId}`);
        setCourse(response.data);
      } catch (error) {
        setMessage('Error fetching course data');
      }
    };

    fetchCourse();
  }, [courseId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    try {
      await axios.put(`http://localhost:5000/api/courses/${courseId}`, course);
      setMessage('Course updated successfully!');
      navigate('/courses'); // Redirect to courses page after successful edit
    } catch (error) {
      setMessage('Error updating course data');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-center text-3xl">Edit Course</h1>
      </header>

      <main className="flex-grow flex justify-center items-center">
        <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="name">Course Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={course.name}
                onChange={handleChange}
                className="border p-2 w-full rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="code">Course Code</label>
              <input
                type="text"
                id="code"
                name="code"
                value={course.code}
                onChange={handleChange}
                className="border p-2 w-full rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="creditHours">Credit Hours</label>
              <input
                type="number"
                id="creditHours"
                name="creditHours"
                value={course.creditHours}
                onChange={handleChange}
                className="border p-2 w-full rounded"
                required
              />
            </div>
            {/* Add other fields as needed */}

            <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">
              Update Course
            </button>
          </form>
          {message && <p className="text-center mt-4 text-red-500">{message}</p>}
        </div>
      </main>

      <footer className="bg-blue-600 text-white p-4 text-center">
        &copy; 2024 Course Management System
      </footer>
    </div>
  );
};

export default Edit;
