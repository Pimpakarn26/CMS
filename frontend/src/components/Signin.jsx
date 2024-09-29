// src/components/Signin.jsx
import React, { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';

const Signin = () => {
    const { login } = useAuthContext(); // เข้าถึงฟังก์ชัน login
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password); // เรียกฟังก์ชัน login
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default Signin;
