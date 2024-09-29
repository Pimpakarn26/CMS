// src/services/token.service.js

const setToken = (token) => {
    localStorage.setItem('token', token);
  };
  
  const getToken = () => {
    return localStorage.getItem('token');
  };
  
  const removeToken = () => {
    localStorage.removeItem('token');
  };
  
  export const tokenService = {
    setToken,
    getToken,
    removeToken,
  };
  