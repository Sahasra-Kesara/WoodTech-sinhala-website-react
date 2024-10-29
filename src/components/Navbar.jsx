import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // To track the current route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Create a function to check if a link is active
  const isActiveLink = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 w-full p-4 z-10 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-blue-600 text-2xl font-bold font-maname">
          WoodTech
        </Link>
        
        {/* Hamburger menu for mobile */}
        <button 
          onClick={toggleMenu} 
          className="text-blue-600 lg:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Links */}
        <div className={`hidden lg:flex lg:flex-row lg:space-x-6`}>
          <Link to="/" className={`text-blue-600 py-2 block hover:text-gray-300 font-maname ${isActiveLink('/') ? 'font-bold' : ''}`}>වුඩ් ටෙක්</Link>
          <Link to="/about" className={`text-blue-600 py-2 block hover:text-gray-300 font-maname ${isActiveLink('/about') ? 'font-bold' : ''}`}>විස්තර</Link>
          <Link to="/services" className={`text-blue-600 py-2 block hover:text-gray-300 font-maname ${isActiveLink('/services') ? 'font-bold' : ''}`}>සේවාවන්</Link>
          <Link to="/contact" className={`text-blue-600 py-2 block hover:text-gray-300 font-maname ${isActiveLink('/contact') ? 'font-bold' : ''}`}>සම්බන්ධතා</Link>
          <Link to="/faq" className={`text-blue-600 py-2 block hover:text-gray-300 font-maname ${isActiveLink('/faq') ? 'font-bold' : ''}`}>ගැටළු</Link>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-20 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="absolute top-0 left-0 bg-white w-64 h-full shadow-lg p-4 transition-transform duration-300 ease-in-out">
          <button onClick={toggleMenu} className="text-blue-600 mb-4" aria-label="Close menu">
            Close
          </button>
          <Link to="/" className={`text-blue-600 py-2 block hover:text-gray-300 font-maname ${isActiveLink('/') ? 'font-bold' : ''}`}>වුඩ් ටෙක්</Link>
          <Link to="/about" className={`text-blue-600 py-2 block hover:text-gray-300 font-maname ${isActiveLink('/about') ? 'font-bold' : ''}`}>විස්තර</Link>
          <Link to="/services" className={`text-blue-600 py-2 block hover:text-gray-300 font-maname ${isActiveLink('/services') ? 'font-bold' : ''}`}>සේවාවන්</Link>
          <Link to="/contact" className={`text-blue-600 py-2 block hover:text-gray-300 font-maname ${isActiveLink('/contact') ? 'font-bold' : ''}`}>සම්බන්ධතා</Link>
          <Link to="/faq" className={`text-blue-600 py-2 block hover:text-gray-300 font-maname ${isActiveLink('/faq') ? 'font-bold' : ''}`}>ගැටළු</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
