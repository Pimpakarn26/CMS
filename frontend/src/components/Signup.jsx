import React from 'react';

const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    // ทำการประมวลผลการ signup ที่นี่
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-4">Signup</h2>
      <form onSubmit={handleSignup} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" className="input input-bordered w-full" required />
        </div>
        <div className="mb-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" className="input input-bordered w-full" required />
        </div>
        <div className="mb-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" className="input input-bordered w-full" required />
        </div>
        <button type="submit" className="btn btn-primary w-full">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
