import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      {/* Footer Top */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center">
          {/* Text Section */}
          <p className="text-sm sm:text-base mb-4 sm:mb-0 text-center sm:text-left">
            Copyright © 2024 by Ayeman. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
