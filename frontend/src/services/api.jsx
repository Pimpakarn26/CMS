// src/services/api.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const signup = (username, email, password) => {
    return axios.post(`${API_URL}/auth/signup`, { username, email, password });
};

export const signin = (username, password) => {
    return axios.post(`${API_URL}/auth/signin`, { username, password });
};

export const getToken = () => {
    return localStorage.getItem('token'); // ฟังก์ชันสำหรับดึง Token
};

export const getAllCourses = async () => {
    const token = getToken(); // ดึง Token
    return axios.get(`${API_URL}/courses`, {
        headers: {
            'Authorization': `Bearer ${token}`, // ส่ง Token ใน headers
        },
    });
};

// ฟังก์ชันอื่นๆ เช่น createCourse, deleteCourse ฯลฯ
export const createCourse = (courseData) => {
    const token = getToken();
    return axios.post(`${API_URL}/courses`, courseData, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
};

export const deleteCourse = (id) => {
    const token = getToken();
    return axios.delete(`${API_URL}/courses/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
};
