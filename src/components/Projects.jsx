import React from 'react';
import imsImg from '../assets/IMS.png'; 
import billingImg from '../assets/BillingSystem.png';
import fashionImg from '../assets/Fashion.png';
import aariworkImg from '../assets/LotusAariWork.png';

function Projects() {
  // 1. Added a specific 'url' field for each unique repository link
  const projectList = [
    { 
      title: "Aju Store — Inventory Management System", 
      desc: "A robust stock tracking portal built with analytical overview modules, real-time product sorting, and item low-stock indicators.", 
      img: imsImg,
      url: "https://sangeethal-m.github.io/IMS/" // 👈 Replace with your real link
    },
    { 
      title: "Aju Supermarket — Local Billing System", 
      desc: "A high-performance local data ledger management matrix optimized for fast product rows edits and clean data computations.", 
      img: billingImg,
      url: "https://sangeethal-m.github.io/BillingSystem/" // 👈 Replace with your real link
    },
    { 
      title: "Fashion World Hub Storefront", 
      desc: "An elegant retail catalog interface displaying beautiful product positioning layout structures, dynamic action badges, and modern borders.", 
      img: fashionImg,
      url: "https://sangeethal-m.github.io/FashionWebsite/" // 👈 Replace with your real link
    },
    { 
      title: "Lotus Aari Work Digital Display", 
      desc: "A highly customized digital display system tailored to market premium handcrafted embroidery and traditional catalog layouts.", 
      img: aariworkImg,
      url: "https://sangeethal-m.github.io/LotusAariWork/" // 👈 Replace with your real link
    }
  ];

  return (
    <section id="projects" className="py-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">Technical Projects Showcase</h2>
        <div className="w-20 h-1.5 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
        {projectList.map((project, idx) => (
          <div key={idx} className="group bg-[#0b1324] rounded-xl overflow-hidden border-2 border-gray-800/60 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-300 transform hover:-translate-y-1.5">
            
            {/* Project Image Frame */}
            <div className="overflow-hidden bg-[#070b13] aspect-video flex items-center justify-center border-b-2 border-gray-800/60 relative">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-500"
              />
              
            </div>

            {/* Information Body */}
            <div className="p-6 sm:p-8 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-cyan-400 transition duration-200 leading-snug">
                {project.title}
              </h3>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-medium">
                {project.desc}
              </p>
              
              <div className="pt-4 border-t border-gray-800/60 flex items-center justify-between text-sm sm:text-base font-bold text-cyan-400">
                <span className="text-gray-400">Tailwind CSS Architecture</span>
                
                {/* 2. Wrapped the click action inside a functional <a> tag link */}
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group-hover:translate-x-1 transition duration-200 underline decoration-2 underline-offset-4 cursor-pointer hover:text-white"
                >
                  View Repository &rarr;
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;