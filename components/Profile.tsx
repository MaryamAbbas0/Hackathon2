import React from 'react';
import Hero from "../components/Hero";
import Image from 'next/image';

const TestimonialCard = () => {
  return (
    <div className="bg-black text-white py-10 px-4">
      <p className="text-orange-300 italic py-2 text-center">Testimonials</p>
      <h2 className="text-center text-3xl font-bold mb-6">What our clients are saying</h2>
      
      {/* Testimonial Card Container */}
      <div className="max-w-md sm:max-w-xl mx-auto bg-white text-black p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          
          {/* Client Image */}
          <Image
            src="/men.jpg" // Replace with your image URL
            alt="Client"
            className="w-20 h-20 rounded-full mb-4"
          />
          
          {/* Testimonial Text */}
          <p className="text-center text-sm mb-4 px-4 sm:px-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
            bibendum non dui volutpat fringilla bibendum.
          </p>

          {/* Rating */}
          <div className="text-yellow-500 mb-2">
            ★★★★☆
          </div>
          
          {/* Client Name and Job Title */}
          <h3 className="font-bold">Alamin Hasan</h3>
          <p className="text-sm text-gray-500">Food Specialist</p>
        </div>
      </div>
      
      <br />
      <br />
      <Hero />
      <div></div>
    </div>
  );
};

export default TestimonialCard;
