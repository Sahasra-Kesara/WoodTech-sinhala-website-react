import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation(); // To track the current route

  // Create a function to check if a link is active
  const isActiveLink = (path) => location.pathname === path;

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        {/* Services Column */}
        <div className="flex flex-col mb-4">
          <h2 className="text-lg font-bold mb-2">සේවාවන්</h2>
          <Link to="/service/wooden-doors" className="text-gray-300 hover:text-gray-100 mb-1 font-maname">
            ලී දොරවල්
          </Link>
          <Link to="/service/door-windows" className="text-gray-300 hover:text-gray-100 mb-1 font-maname">
            දොර ජනෙල්
          </Link>
          <Link to="/service/pantry-cupboards" className="text-gray-300 hover:text-gray-100 mb-1 font-maname">
            පැන්ට්රි කබඩ්
          </Link>
          <Link to="/service/windows" className="text-gray-300 hover:text-gray-100 mb-1 font-maname">
            ජනේල
          </Link>
          <Link to="/service/other" className="text-gray-300 hover:text-gray-100 mb-1 font-maname">
            වෙනත් සේවාවන්
          </Link>
        </div>

        {/* Navigation Column */}
        <div className="flex flex-col mb-4">
          <Link to="/" className={`text-gray-300 hover:text-gray-100 mb-1 font-maname ${isActiveLink('/') ? 'font-bold' : ''}`}>
            වුඩ් ටෙක්
          </Link>
          <Link to="/about" className={`text-gray-300 hover:text-gray-100 mb-1 font-maname ${isActiveLink('/about') ? 'font-bold' : ''}`}>
            විස්තර
          </Link>
          <Link to="/services" className={`text-gray-300 hover:text-gray-100 mb-1 font-maname ${isActiveLink('/services') ? 'font-bold' : ''}`}>
            සේවාවන්
          </Link>
          <Link to="/contact" className={`text-gray-300 hover:text-gray-100 mb-1 font-maname ${isActiveLink('/contact') ? 'font-bold' : ''}`}>
            සම්බන්ධතා
          </Link>
          <Link to="/faq" className={`text-gray-300 hover:text-gray-100 mb-1 font-maname ${isActiveLink('/faq') ? 'font-bold' : ''}`}>
            ගැටළු
          </Link>
        </div>

        {/* Contact Information Column */}
        <div className="flex flex-col mb-4">
          <h2 className="text-lg font-bold mb-2">සම්බන්ධතා</h2>
          <div className="text-gray-300 mb-1 font-maname">
            <strong>ලිපිනය:</strong> 3/54 ශ්‍රී මේධානන්ද මාවත, ලක්ෂපතිය, මොරටුව. 10400
          </div>
          <div className="text-gray-300 mb-1 font-maname">
            <strong>දුරකථන අංකය:</strong> <a href="tel:+94729677030" className="text-blue-600">+(94) 72 967 7030</a>
          </div>
          <div className="text-gray-300 mb-1 font-maname">
            <strong>Email:</strong> <a href="mailto:sahasrakesara@gmail.com" className="text-blue-600">sahasrakesara@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-gray-400 font-maname">&copy; {new Date().getFullYear()} WoodTech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;