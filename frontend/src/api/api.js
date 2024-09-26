import axios from "axios";

// Set up axios instance
const api = axios.create({
  baseURL: "http://localhost:3000/api/v1/courses", // Base URL to backend
  headers: {
    "Content-Type": "application/json",
  },
});

export const signup = (data) => api.post("/auth/signup", data);
export const login = (data) => api.post("/auth/signin", data);
export const getCourses = (token) =>
  api.get("/", { headers: { "x-access-token": token } });
export const createCourse = (token, data) =>
  api.post("/", data, { headers: { "x-access-token": token } });
