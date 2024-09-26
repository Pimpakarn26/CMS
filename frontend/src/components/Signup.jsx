import React, { useState } from 'react';
import { signup } from '../api/api';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData);
      setSuccess(true);
    } catch (error) {
      console.log('Signup failed');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Signup</h2>
          {success ? (
            <p className="text-success">User registered successfully!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="input input-bordered w-full mb-2"
                value={formData.username}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full mb-2"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full mb-4"
                value={formData.password}
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-primary w-full">Signup</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
