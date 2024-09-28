import React from 'react';
import Card from './Card';

const Course = () => {
  const courses = [
    {
      name: "Introduction to Computer Science",
      type: "Core",
      code: "CS101",
      creditHours: 3,
      gradeLevel: "Undergraduate",
      classroom: "Room 101",
    },
    {
      name: "Advanced Mathematics",
      type: "Elective",
      code: "MATH201",
      creditHours: 4,
      gradeLevel: "Undergraduate",
      classroom: "Room 202",
    },
    {
      name: "Data Structures",
      type: "Core",
      code: "CS201",
      creditHours: 3,
      gradeLevel: "Undergraduate",
      classroom: "Room 303",
    },
    {
      name: "Database Systems",
      type: "Core",
      code: "CS301",
      creditHours: 3,
      gradeLevel: "Undergraduate",
      classroom: "Room 404",
    },
    {
      name: "Web Development",
      type: "Elective",
      code: "CS302",
      creditHours: 4,
      gradeLevel: "Undergraduate",
      classroom: "Room 505",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {courses.map((course, index) => (
        <Card
          key={index}
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

export default Course;
