// src/services/auth.service.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/courses';

const signup = async (username, email, password) => {
  const response = await axios.post(`${API_URL}signup`, { username, email, password });
  return response.data;
};

const signin = async (username, password) => {
  const response = await axios.post(`${API_URL}signin`, { username, password });
  return response.data;
};

export const authService = {
  signup,
  signin,
};
