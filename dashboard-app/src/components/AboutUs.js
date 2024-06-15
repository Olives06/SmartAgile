import React from 'react';
import logo from '../assets/smartagilelogo.png';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white p-10 rounded-lg shadow-2xl max-w-4xl w-full">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-800">About Us</h1>
        <img src={logo} alt="Logo" className="mx-auto mb-8 w-24 h-24 animate-spin-slow" /> {/* Replace 'path/to/logo.png' with the actual path to your logo */}
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Who We Are</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to T-Machine Software Solutions! We are a forward-thinking software development company dedicated to providing innovative solutions to modern problems. Our team is committed to delivering high-quality software that meets the needs of our clients and exceeds their expectations.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Our Smart Agile Project</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The Smart Agile project is our cutting-edge solution for enhancing workplace productivity through advanced employee tracking. This system allows managers to monitor whether employees are actively working, ensuring efficiency and accountability across the board.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At T-Machine Software Solutions, our mission is to empower businesses with innovative software solutions that drive success and foster growth. We aim to create products that not only solve problems but also add value to our clients' operations.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Our Vision</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our vision is to be a global leader in software development, recognized for our commitment to quality, innovation, and customer satisfaction. We strive to create a positive impact through technology, making the world a more efficient and connected place.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Our Team</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our team consists of talented and dedicated professionals who are passionate about technology and innovation. From developers to project managers, everyone at T-Machine Software Solutions works collaboratively to achieve our common goals.
          </p>
        </section>
        
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Contact Us</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            We would love to hear from you! Whether you have a question about our products, want to discuss a potential project, or just want to say hello, feel free to reach out to us.
          </p>
          <ul className="list-disc list-inside text-gray-600 text-lg">
            <li>Email: <a href="mailto:contact@tmachinesoftware.com" className="text-blue-500 hover:underline">contact@tmachinesoftware.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="text-blue-500 hover:underline">+123-456-7890</a></li>
            <li>Address: Chennai</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
