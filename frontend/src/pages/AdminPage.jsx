import React, { useEffect, useState } from 'react';
import { fetchCourses, deleteCourse } from '../services/course.service'; // Make sure to implement these service functions
import CreateCourse from '../components/CreateCourse'; // Import the CreateCourse component
import CourseCard from '../components/Card'; // Import the Card component for displaying courses

const AdminPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const data = await fetchCourses(); // Fetch courses from the service
        setCourses(data);
      } catch (error) {
        setError("Failed to fetch courses.");
      } finally {
        setLoading(false);
      }
    };

    getCourses();
  }, []);

  const handleDeleteCourse = async (courseCode) => {
    try {
      await deleteCourse(courseCode); // Call the delete function from the service
      setCourses(courses.filter(course => course.code !== courseCode)); // Update the state
    } catch (error) {
      setError("Failed to delete the course.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Admin Page</h2>
      <CreateCourse /> {/* Component for creating new courses */}
      <h3 className="text-xl mt-6">Courses List</h3>
      <div className="flex flex-wrap gap-4">
        {courses.map(course => (
          <div key={course.code} className="relative">
            <CourseCard
              name={course.name}
              type={course.type}
              code={course.code}
              creditHours={course.creditHours}
              gradeLevel={course.gradeLevel}
              classroom={course.classroom}
            />
            <button 
              onClick={() => handleDeleteCourse(course.code)} 
              className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
