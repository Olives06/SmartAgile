import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import logo from '../assets/smartagilelogo.png'; // Replace with your actual logo path

const PasswordResetForm = () => {
  const { token } = useParams(); // Get token from URL params
  const navigate = useNavigate(); // Initialize navigate from useNavigate hook
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    // Implement your password reset API call here
    try {
      // Example of fetch API usage (replace with your own implementation)
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, password }), // Include token and new password
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message); // Set success message
        setTimeout(() => {
          navigate('/login'); // Redirect to login page after success
        }, 2000); // Redirect after 2 seconds
      } else {
        setMessage(data.error); // Set error message
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      setMessage('Failed to reset password. Please try again.'); // Generic error message
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-400 via-white to-gray-400 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <img src={logo} alt="Logo" className="mx-auto mb-4 w-24 h-24" /> {/* Replace with your actual logo */}
        <h1 className="text-2xl mb-4 text-center font-bold">Reset Password</h1>
        <div className="mb-4">
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full m-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full m-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <button onClick={handleResetPassword} className="w-full m-2 p-2 bg-green-500 text-white rounded hover:bg-green-600">
            Reset Password
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

export default PasswordResetForm;
