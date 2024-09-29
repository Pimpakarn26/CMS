import React, { useEffect, useState } from "react";
import Card from "./Card"; // Make sure this path is correct

const apiUrl = import.meta.env.VITE_BACKEND_URL; // Load API URL from environment variables

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/courses`); // Use environment variable for API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>; // Add Tailwind class for styling
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>; // Style error message
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {courses.map((course) => (
        <Card
          key={course.code} // Assuming 'code' is unique for courses
          name={course.name}
          type={course.type}
          code={course.code}
          creditHours={course.creditHours}
          gradeLevel={course.gradeLevel}
          classroom={course.classroom}
        />
      ))}
    </div>
  );
};

export default Courses;
