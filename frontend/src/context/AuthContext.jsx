// src/context/AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { signin } from '../services/api'; // เชื่อมต่อกับ API

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        try {
            const response = await signin(username, password);
            const token = response.data.token; // รับ Token
            localStorage.setItem('token', token); // เก็บ Token ใน localStorage
            
            const userData = {
                username: response.data.username,
                token: token,
                roles: response.data.roles,
            };
            setUser(userData);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const logout = () => {
        localStorage.removeItem('token'); // ลบ Token เมื่อออกจากระบบ
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};
