import React, { useState } from 'react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleAuth = (e) => {
    e.preventDefault();
    // ตัวอย่างการจัดการล็อกอินหรือสมัครสมาชิก
    if (isLogin) {
      console.log('Logging in...');
    } else {
      console.log('Signing up...');
    }
  };

  return (
    <div className="container mx-auto py-16">
      <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6">{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleAuth}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full mb-4">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
          <p className="text-center">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              type="button"
              className="text-blue-500 hover:underline"
              onClick={toggleAuthMode}
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
