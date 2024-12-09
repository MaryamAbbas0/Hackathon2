import React from 'react';
import About from "../components/About";
import Image from 'next/image';

const Header = () => {
  return (
    <div>
      <header className="relative bg-black text-white py-10 px-5 flex flex-col sm:flex-row items-center justify-between">
        {/* Left Section: Text */}
        <div className="max-w-lg mb-6 sm:mb-0">
          <h4 className="text-orange-500 italic text-xl mb-2">It&apos;s Quick & Amazing!</h4>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            The Art of <span className="text-orange-500">speed</span> food Quality
          </h1>
          <p className="text-gray-400 mb-6 text-base sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Varus sed pharetra
            dictum neque massa congue.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md">
            See Menu
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="relative mb-6 sm:mb-0">
          {/* Leaves Image */}
          <Image
            src="/leave.png" // Replace with the actual path of your leaves image
            alt="Decorative Leaves"
            className="absolute top-[25%] right-[-24px] w-[250px] sm:w-[350px] rotate-[90deg] opacity-80"
          />

          <Image
            src="/pic.png"
            alt="Delicious Food"
            className="rounded-lg w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] object-cover relative -top-11 right-11"
          />
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-to-br from-green-400 to-black"></div>
      </header>

      <div>
        <About />
      </div>
    </div>
  );
};

export default Header;
