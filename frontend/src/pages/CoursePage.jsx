import React, { useState, useEffect } from 'react';
import CourseList from '../components/CourseList';

const CoursePage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // ตัวอย่างการดึงข้อมูลจาก API
    fetch('/api/courses')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  return (
    <div className="container mx-auto py-16">
      <CourseList courses={courses} />
    </div>
  );
};

export default CoursePage;
