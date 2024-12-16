import React from 'react';
import { useNavigate } from 'react-router-dom';
const CourseCard = ({ course }) => {

    const navigate = useNavigate();
    
        const handleClick = () => {
            navigate('/course-details');
        };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{course.name}</h2>
      <p className="text-gray-600">{course.description}</p>
      <p className="text-gray-500">รหัสวิชา: {course.code}</p>
      <p className="text-gray-500">หน่วยกิต: {course.creditHours}</p>
      <p className="text-gray-500">ระดับชั้น: {course.gradeLevel}</p>
      <p className="text-gray-500">ห้องเรียน: {course.classroom}</p>
      <button 
        onClick={handleClick} 
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        ดูรายละเอียด
      </button>
    </div>
  );
};

export default CourseCard;
