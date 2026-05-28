import React, { useState } from 'react';

function Contact() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Sending...");
    
    const formData = new FormData(e.target);

    // IMPORTANT: Make sure to replace YOUR_ACCESS_TOKEN_HERE with your real key from web3forms.com
    formData.append("access_key", "5fcb3738-c809-45d4-8577-d6a8ad8400c8");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());

      if (res.success) {
        setFormStatus("Message Sent Successfully!");
        e.target.reset();
      } else {
        setFormStatus("Error submitting form. Please check your token key.");
      }
    } catch (err) {
      setFormStatus("Connection error. Please try again.");
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-wide">Communication Hub & Contact</h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-5 gap-10 items-start">
        
        {/* Left Side Channels */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center gap-4 shadow-md">
            <span className="text-2xl text-blue-600">📞</span>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Phone Line</p>
              <p className="text-base sm:text-lg font-bold text-slate-900">+91 9790547455</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center gap-4 shadow-md">
            <span className="text-2xl text-blue-600">✉️</span>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Direct Inbox</p>
              <p className="text-base sm:text-lg font-bold text-slate-900 break-all">sangeethaclp@gmail.com</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4 shadow-md">
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Social Configurations</p>
            <div className="flex flex-col gap-3">
              {/* 📸 Instagram Link */}
    <a 
      href="https://www.instagram.com/ajjuchockies/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-base sm:text-lg font-bold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-3 group"
    >
      <span className="text-xl group-hover:scale-110 transition-transform">📸</span>
      <span className="hover:underline decoration-2">Instagram: @ajju-chockies</span>
    </a>

    {/* 🌐 Facebook Link */}
    <a 
      href="https://www.facebook.com/sangeetha.clp" // 👈 REPLACE THIS with your real Facebook URL
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-base sm:text-lg font-bold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-3 group"
    >
      <span className="text-xl group-hover:scale-110 transition-transform">🌐</span>
      <span className="hover:underline decoration-2">Facebook Profile : Sangeetha CLP</span>
    </a>

    {/* 💼 LinkedIn Link */}
    <a 
      href="https://www.linkedin.com/in/sangeetha-clp-76942727" // 👈 REPLACE THIS with your real LinkedIn URL
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-base sm:text-lg font-bold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-3 group"
    >
      <span className="text-xl group-hover:scale-110 transition-transform">💼</span>
      <span className="hover:underline decoration-2">LinkedIn Professional</span>
    </a>
            </div>
          </div>
        </div>

        {/* Right Side Working Form Submission */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 bg-white p-8 rounded-xl border border-slate-200 shadow-xl space-y-5">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Your Name</label>
            <input type="text" name="name" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-base text-slate-900 focus:outline-none focus:border-blue-500 transition" />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Your Email</label>
            <input type="email" name="email" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-base text-slate-900 focus:outline-none focus:border-blue-500 transition" />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Your Message</label>
            <textarea name="message" rows="4" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-base text-slate-900 focus:outline-none focus:border-blue-500 transition resize-none"></textarea>
          </div>

          <button type="submit" className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base rounded-xl transition shadow-md active:scale-[0.99]">
            Send Message Instantly
          </button>

          {formStatus && (
            <p className="text-center text-sm font-bold mt-2 text-blue-600 bg-blue-50 py-2 rounded-lg animate-pulse">
              {formStatus}
            </p>
          )}
        </form>

      </div>
    </section>
  );
}

export default Contact;