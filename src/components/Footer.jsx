import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0b1324] border-t border-gray-800/80 mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand Name & Copyright */}
        <div className="text-center sm:text-left space-y-1">
          <p className="text-lg font-bold tracking-tight text-white">
            SANGEETHA <span className="text-cyan-400">L</span>
          </p>
          <p className="text-sm text-gray-500 font-medium">
            &copy; {currentYear} All rights reserved. Built with React & Tailwind.
          </p>
        </div>

        {/* Center/Right Side: Fast Links Grid */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm sm:text-base font-bold text-gray-400">
          <a href="#home" className="hover:text-cyan-400 transition-colors duration-200">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors duration-200">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors duration-200">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors duration-200">Contact</a>
        </div>

        {/* Right Side: Back to Top Button */}
        <div className="order-first sm:order-last">
          <a 
            href="#home" 
            className="p-3 bg-[#070b13] hover:bg-cyan-500/10 border border-gray-800 hover:border-cyan-500/40 text-gray-400 hover:text-cyan-400 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg group"
            title="Back to Top"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 transform group-hover:-translate-y-0.5 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;