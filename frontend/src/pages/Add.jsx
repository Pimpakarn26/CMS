import { useState } from 'react';
import CourseService from '../services/course.service'; // Adjust the service import
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const Add= () => {
  const navigate = useNavigate(); // Use useNavigate for navigation
  const [course, setCourse] = useState({
    name: "",
    type: "",
    code: "",
    creditHours: "",
    gradeLevel: "", // Added gradeLevel
    classroom: "",  // Added classroom

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await CourseService.insertCourse(course); // Call the course service
      if (response.status === 200) { // Check for success status
        Swal.fire({
          title: "Add Course",
          text: response.data.message,
          icon: "success",
        });
        navigate("/courses"); // Navigate to the courses page after successful addition
      }
    } catch (error) {
      Swal.fire({
        title: "Add Course",
        text: error.response?.data.message || error.message, // Handle potential undefined error message
        icon: "error",
      });
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl mb-4">Add New Course</h2>
      <div className="space-y-2">
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input
            type="text"
            className="grow"
            placeholder="Course Name"
            name="name"
            onChange={handleChange}
            value={course.name}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Type
          <input
            type="text"
            className="grow"
            placeholder="Course Type"
            name="type"
            onChange={handleChange}
            value={course.type}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Code
          <input
            type="text"
            className="grow"
            placeholder="Course Code"
            name="code"
            onChange={handleChange}
            value={course.code}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Credit Hours
          <input
            type="number"
            className="grow"
            placeholder="Credit Hours"
            name="creditHours"
            onChange={handleChange}
            value={course.creditHours}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Grade Level
          <input
            type="text"
            className="grow"
            placeholder="Grade Level"
            name="gradeLevel"
            onChange={handleChange}
            value={course.gradeLevel}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Classroom
          <input
            type="text"
            className="grow"
            placeholder="Classroom"
            name="classroom"
            onChange={handleChange}
            value={course.classroom}
          />
        </label>
        <button 
          onClick={handleSubmit} // Ensure the button calls handleSubmit
          className="btn btn-outline btn-primary">
          Add Course
        </button>
      </div>
    </div>
  );
}

export default Add;
