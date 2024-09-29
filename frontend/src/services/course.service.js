// src/services/course.service.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1/courses/';

const fetchCourses = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const courseService = {
  fetchCourses,
};
