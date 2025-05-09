import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <p>© 2025 MyWebsite. All Rights Reserved.</p>

      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="#"
          className="flex items-center gap-1 text-blue-400 hover:text-blue-600"
        >
          <FaFacebook /> Facebook
        </a>
        <a
          href="#"
          className="flex items-center gap-1 text-blue-400 hover:text-blue-600"
        >
          <FaTwitter /> Twitter
        </a>
        <a
          href="#"
          className="flex items-center gap-1 text-blue-400 hover:text-blue-600"
        >
          <FaInstagram /> Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
