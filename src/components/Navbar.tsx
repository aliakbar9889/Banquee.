'use client'
import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Importing icons for the menu

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4">
      {/* Left Section */}
      <div className="text-2xl font-bold text-teal-500">
        banquee.
      </div>

      {/* Center Section - Desktop View */}
      <ul className="hidden md:flex space-x-6">
        <li className="text-gray-700 hover:text-black cursor-pointer">Home</li>
        <li className="text-gray-700 hover:text-black cursor-pointer">Features</li>
        <li className="text-gray-700 hover:text-black cursor-pointer">Compare</li>
        <li className="text-gray-700 hover:text-black cursor-pointer">Support</li>
        <li className="text-gray-700 hover:text-black cursor-pointer">Blog</li>
      </ul>

      {/* Right Section - Desktop View */}
      <div className="hidden md:flex items-center space-x-4">
        <span className="cursor-pointer hover:text-black text-gray-700">Login</span>
        <button className="px-4 py-2 bg-teal-500 rounded text-white hover:bg-white border hover:text-gray-700 hover:border-gray-400">
          Open Account
        </button>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex items-center">
        <button
          className="text-gray-700 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Sliding Menu for Mobile - Right Side */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-100 shadow-lg w-2/3 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-2xl font-bold text-teal-500">banquee.</span>
          <button
            className="text-gray-700 text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <HiX />
          </button>
        </div>
        <ul className="mt-6 space-y-4 px-4">
          <li className="text-gray-700 hover:text-black cursor-pointer">Home</li>
          <li className="text-gray-700 hover:text-black cursor-pointer">Features</li>
          <li className="text-gray-700 hover:text-black cursor-pointer">Compare</li>
          <li className="text-gray-700 hover:text-black cursor-pointer">Support</li>
          <li className="text-gray-700 hover:text-black cursor-pointer">Blog</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
