import React, { useState } from 'react';
import { createCourse } from '../services/api';

const CreateCourse = () => {
    const [courseData, setCourseData] = useState({
        name: '',
        type: '',
        code: '',
        creditHours: '',
        gradeLevel: '',
        classroom: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token'); // Get the token from local storage
        try {
            const response = await createCourse(courseData, token);
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error creating course: ' + error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Course Name" onChange={handleChange} required />
            <input type="text" name="type" placeholder="Course Type" onChange={handleChange} required />
            <input type="text" name="code" placeholder="Course Code" onChange={handleChange} required />
            <input type="number" name="creditHours" placeholder="Credit Hours" onChange={handleChange} required />
            <input type="text" name="gradeLevel" placeholder="Grade Level" onChange={handleChange} required />
            <input type="text" name="classroom" placeholder="Classroom" onChange={handleChange} />
            <button type="submit">Create Course</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default CreateCourse;
