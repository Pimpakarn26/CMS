// src/components/Signup.jsx
import React, { useState } from 'react';
import { useAuthContext } from '../context/AuthContext'; // Import useAuth

const Signup = () => {
  const { signup } = useAuthContext(); // เข้าถึงฟังก์ชัน signup
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(username, email, password);
      setMessage('Signup successful!'); // แจ้งว่าการสมัครสมาชิกสำเร็จ
    } catch (error) {
      setMessage(error.message); // แสดงข้อผิดพลาด
    }
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
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button type="submit">Sign Up</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Signup;
