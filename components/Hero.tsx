import React from 'react';
import Blogs from "../components/Blogs";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[60vh] sm:h-[70vh] lg:h-[80vh]" 
      style={{ backgroundImage: "url('/b1.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 flex flex-col justify-center items-center sm:items-end h-full px-8 text-white max-w-6xl mx-auto">
        <p className="text-lg sm:text-xl italic text-orange-400 mb-4 text-center sm:text-end">Restaurant Active Process</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center sm:text-end">
          We Document Every Food <br />
          <span className="text-orange-400">Bean Process</span> until it is saved
        </h1>
        <p className="text-sm sm:text-base mb-4 mt-4 leading-relaxed max-w-xs sm:max-w-md text-center sm:text-end">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
          volutpat fringilla bibendum.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-end">
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full mb-4 sm:mb-0">
            Read More
          </button>
          <button className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-6 rounded-full flex items-center">
            Play Video
          </button>
        </div>
      </div>
      
      {/* Responsive Blogs Section */}
      <div className="mt-8 sm:mt-12">
        <Blogs />
      </div>
    </div>
  );
};

export default HeroSection;
