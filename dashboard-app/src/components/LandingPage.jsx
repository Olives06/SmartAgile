import React from 'react';
import { Link } from 'react-router-dom';
import robo from '../assets/robo.png';
import logo from '../assets/smartagilelogo.png';

const LandingPage = () => {
  return (
    <div className="h-full bg-gradient-to-b from-gray-400 via-white to-gray-400 flex flex-col items-center text-black">
      <nav className="w-full shadow p-4 flex justify-between items-center">
        <img src={logo} alt="SmartAgile" className="w-24 h-24 rounded-full mb-4" />
        <div className='text-black'>
          <Link to="/" className="mx-2 ">Home</Link>
          <Link to="/aboutus" className="mx-2 ">About Us</Link>
          <Link to="/register" className="mx-2 text-teal-800">Register</Link>
          <Link to="/login" className="mx-2 text-teal-800">Login</Link>
        </div>
      </nav>
      <header className="text-center my-6">
        <h1 className="text-4xl font-bold">Smart Agile</h1>
        <div className="flex justify-center mt-6">
          <img src={robo} alt="AI-Driven Tool for Optimal Workplace Productivity" className="img-fluid w-1/4" />
        </div>
        <p className="mt-4 text-lg">AI-Driven Tool for Optimal Workplace Productivity</p>
        <p className="mt-2">Utilizing advanced AI, it accurately distinguishes between work-related and non-work activities on employee devices.</p>
        <div className="mt-8">
          <Link to="/login" className="text-lg text-white bg-green-900 px-6 py-3 rounded-lg">Get Started</Link>
        </div>
      </header>
    </div>
  );
};

export default LandingPage;
