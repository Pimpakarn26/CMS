import React, { useEffect, useState } from 'react';
import { getCourses } from '../api/api'; // นำเข้าฟังก์ชันดึงข้อมูล
import CourseCard from './CourseCard';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const token = localStorage.getItem('token');
      const response = await getCourses(token);
      setCourses(response.data);
    };
    fetchCourses();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      <ul className="space-y-4">
        {courses.map((course) => (
          <li key={course.id}>
            <CourseCard 
              name={course.name} 
              description={course.description} 
              code={course.code} 
              creditHours={course.creditHours} 
              gradeLevel={course.gradeLevel} 
              classroom={course.classroom} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
