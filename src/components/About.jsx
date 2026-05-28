import React from 'react';

function About() {
  return (
    <section id="about" className="py-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">About Me & Experience</h2>
        <div className="w-20 h-1.5 bg-cyan-450 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        
        {/* Left Column: Education & Skills */}
        <div className="lg:col-span-1 space-y-8">
          {/* Education Card */}
          <div className="bg-[#0b1324] p-8 rounded-xl border border-gray-800 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
              🎓 Academic Profile
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-4">
                <p className="text-lg sm:text-xl font-black text-white">M.E. Communication Systems</p>
                <p className="text-sm sm:text-base text-gray-400 font-medium mt-0.5">Anna University — First Class Distinction (CGPA: 8.21)</p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <p className="text-lg sm:text-xl font-black text-white">B.E. Electronics & Communication</p>
                <p className="text-sm sm:text-base text-gray-400 font-medium mt-0.5">Anna University — First Class (CGPA: 8.18)</p>
              </div>
            </div>
          </div>

          {/* Technical Skills Card */}
          <div className="bg-[#0b1324] p-8 rounded-xl border border-gray-800 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4">🛠️ Core Competencies</h3>
            <div className="flex flex-wrap gap-2.5">
              {['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'C Programming', 'C++', 'MATLAB Systems', 'Technical Content Operations', 'HR Operations', 'Data Management'].map((skill) => (
                <span key={skill} className="text-xs sm:text-sm px-4 py-2 bg-cyan-500/10 text-cyan-300 font-bold rounded-full border border-cyan-500/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Experience Timeline */}
        <div className="lg:col-span-2 bg-[#0b1324] p-8 rounded-xl border border-gray-800 shadow-2xl space-y-8">
          <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 flex items-center gap-2">
            💼 Career Journey & Experience
          </h3>
          
          <div className="space-y-8">
            {/* Freelancer Role */}
            <div className="relative pl-8 border-l-2 border-gray-800">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-cyan-400 rounded-full ring-4 ring-cyan-950"></div>
              <span className="text-xs font-bold font-mono px-3 py-1 bg-cyan-400/10 text-cyan-300 rounded-full">2022 – May 2024</span>
              <h4 className="text-xl sm:text-2xl font-black text-white mt-2">Independent Freelance Operations Specialist</h4>
              <p className="text-sm sm:text-base font-bold text-gray-400 mt-0.5">Editorial Office Limited</p>
              <p className="text-gray-300 text-base sm:text-lg mt-3 leading-relaxed font-medium">
                Managed critical end-to-end editorial verification pathways for academic and corporate documentation frameworks. Ensured top-tier styling verification, content structural layouts, and comprehensive quality control metrics under rapid deliverable schedules.
              </p>
            </div>

            {/* HR Coordinator Role */}
            <div className="relative pl-8 border-l-2 border-gray-800">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-indigo-500 rounded-full ring-4 ring-indigo-950"></div>
              <span className="text-xs font-bold font-mono px-3 py-1 bg-indigo-100/10 text-indigo-300 rounded-full">2021 – 2022</span>
              <h4 className="text-xl sm:text-2xl font-black text-white mt-2">Human Resources Operations Coordinator</h4>
              <p className="text-sm sm:text-base font-bold text-gray-400 mt-0.5">GetBoarded</p>
              <ul className="text-gray-300 text-base sm:text-lg mt-3 list-disc list-inside space-y-2 leading-relaxed font-medium">
                <li>Analyzed and screened large pipelines of technical applicant files to match core project descriptions.</li>
                <li>Drafted and processed corporate documentation including formal executive offer letters and exit clearance sheets.</li>
                <li>Coordinated cross-functional stand-up sessions and designed cloud spreadsheet logs to track productivity.</li>
              </ul>
            </div>
          </div>

          {/* Achievements Footer */}
          <div className="pt-6 border-t border-gray-800 grid sm:grid-cols-2 gap-4 text-sm sm:text-base text-gray-400">
            <div className="flex items-center gap-2 font-bold text-white">🏅 <span><span className="text-cyan-400">Bronze Medalist</span> — International Award for Young People (IAYP)</span></div>
            <div className="flex items-center gap-2 font-bold text-white">📄 <span>Published Research Author — <span className="text-indigo-400">IET Computer Vision Journal</span></span></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;