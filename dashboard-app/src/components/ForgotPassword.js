import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = () => {
    if (email) {
      setMessage('Password reset instructions have been sent to your email.');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <div className="forgotpassword min-h-screen bg-gradient-to-b from-gray-400 via-white to-gray-400 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl mb-4 text-center font-bold">Forgot Password</h1>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full m-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <button onClick={handleForgotPassword} className="w-full m-2 p-2 bg-green-500 text-white rounded hover:bg-green-600">
            Send Reset Instructions
          </button>
        </div>
        {message && (
          <div className="mt-4 text-center text-green-600">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
