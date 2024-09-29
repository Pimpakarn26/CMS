// src/components/Courses.jsx
import React, { useEffect, useState } from 'react';
import { getAllCourses } from '../services/api';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    const fetchCourses = async () => {
        try {
            const response = await getAllCourses();
            setCourses(response.data); // ตั้งค่าข้อมูลคอร์ส
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    useEffect(() => {
        fetchCourses(); // เรียกฟังก์ชันเมื่อ Component โหลด
    }, []);

    return (
        <div>
            <h1>Courses</h1>
            {courses.length > 0 ? (
                <ul>
                    {courses.map(course => (
                        <li key={course.id}>{course.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No courses available</p>
            )}
        </div>
    );
};

export default Courses;
