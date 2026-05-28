import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0F172A]/80 backdrop-blur-md border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Sangeetha's Logo Icon */}
        <div className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent hover:scale-105 transition duration-300 cursor-pointer">
          SANGEETHA L
        </div>

        {/* Smooth Scrolling Menu Tabs */}
        <div className="flex items-center space-x-6 sm:space-x-8">
          <a href="#home" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition duration-300">
            Home
          </a>
          <a href="#about" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition duration-300">
            About
          </a>
          <a href="#projects" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition duration-300">
            Projects
          </a>
          <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition duration-300">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}