import React from 'react';
import profilePic from '../assets/profile.png'; 

function Hero() {
  return (
    <section id="home" className="pt-24 md:pt-32 grid md:grid-cols-12 gap-12 items-center min-h-[85vh]">
      
      {/* Left Column: Refined Typography Sizing */}
      <div className="md:col-span-7 space-y-6 text-center md:text-left order-2 md:order-1">
        <div className="inline-block px-4 py-1.5 text-xs sm:text-sm font-bold tracking-widest text-cyan-400 bg-cyan-400/10 rounded-full uppercase">
          Welcome to my portfolio
        </div>
        
        {/* 💡 Changed font-black to font-extrabold to reduce thickness & width */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
          Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">Sangeetha L</span>
        </h1>
        
        {/* 💡 Changed font-extrabold to font-bold */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300 tracking-tight">
          M.E. Graduate & Frontend Web Developer
        </h2>
        
        <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl font-medium">
          An engineering postgraduate specializing in building high-fidelity web interfaces. Combining strong technical analysis with clean, user-centric interface design to create efficient digital products.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
          <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 hover:opacity-95 transition transform hover:-translate-y-0.5 text-base sm:text-lg">
            Explore My Projects
          </a>
          <a href="#contact" className="px-8 py-4 bg-[#111a2e] text-gray-200 font-bold rounded-xl border border-gray-800 hover:bg-[#16223b] transition transform hover:-translate-y-0.5 text-base sm:text-lg">
            Get In Touch
          </a>
        </div>
      </div>

      {/* Right Column: Passport Photo Frame Wrapper */}
      <div className="md:col-span-5 flex justify-center items-center order-1 md:order-2">
        <div className="relative w-60 h-80 sm:w-64 sm:h-84 md:w-72 md:h-96 rounded-xl p-1 bg-gradient-to-tr from-cyan-500 via-purple-500 to-indigo-500 shadow-2xl shadow-indigo-500/10 hover:shadow-cyan-500/20 transition-all duration-500 group">
          <div className="w-full h-full bg-[#0b1324] rounded-xl overflow-hidden flex items-center justify-center">
            <img 
              src={profilePic} 
              alt="Sangeetha L Profile" 
              className="w-full h-full object-cover object-top rounded-xl transition-all duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;