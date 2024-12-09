'use client';
import React, { useState } from 'react';
import Header from "./Header";

export default function Home() {
  // State to handle mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-black text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-orange-500">Foodtuck</h1>
          
          {/* Navigation Menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-sm">
              <li><a href="#" className="hover:text-orange-500">Home</a></li>
              <li><a href="#" className="hover:text-orange-500">Menu</a></li>
              <li><a href="#" className="hover:text-orange-500">Blog</a></li>
              <li><a href="#" className="hover:text-orange-500">Pages</a></li>
              <li><a href="#" className="hover:text-orange-500">About</a></li>
              <li><a href="#" className="hover:text-orange-500">Shop</a></li>
              <li><a href="#" className="hover:text-orange-500">Contact</a></li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5h18M3 12h18M3 19h18"
                />
              </svg>
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex items-center space-x-2">
            <input
              type="text" placeholder="Search..."
              className="bg-gray-800 text-white px-3 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black text-white py-4 px-4">
          <ul className="flex flex-col space-y-4 text-sm">
            <li><a href="#" className="hover:text-orange-500">Home</a></li>
            <li><a href="#" className="hover:text-orange-500">Menu</a></li>
            <li><a href="#" className="hover:text-orange-500">Blog</a></li>
            <li><a href="#" className="hover:text-orange-500">Pages</a></li>
            <li><a href="#" className="hover:text-orange-500">About</a></li>
            <li><a href="#" className="hover:text-orange-500">Shop</a></li>
            <li><a href="#" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </nav>
      )}

      {/* Main Content */}
      <div>
        <Header />
      </div>
    </div>
  );
}
