import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 py-14 border-t border-white/10 bg-black/20 backdrop-blur-xl relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Gradient Divider */}
        <div className="w-full h-[3px] bg-gradient-to-r from-[#00F5D4] to-[#7C3AED] rounded-full mb-10"></div>

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* BRAND */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold neon-text tracking-wide">Dhiraj Kumar</h3>
            <p className="text-sm text-muted mt-1">
              Full Stack Developer • React | Node.js | MySQL | PHP
            </p>
          </div>

          {/* FOOTER NAVIGATION */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-3 text-center md:text-left">
            <a href="#projects" className="text-muted hover:text-[#00F5D4] transition">Projects</a>
            <a href="/certifications" className="text-muted hover:text-[#00F5D4] transition">Certifications</a>
            <a href="/education" className="text-muted hover:text-[#00F5D4] transition">Education</a>
            <a href="/achievements" className="text-muted hover:text-[#00F5D4] transition">Achievements</a>
            <a href="/training" className="text-muted hover:text-[#00F5D4] transition">Training</a>
            <a href="#contact" className="text-muted hover:text-[#00F5D4] transition">Contact</a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 text-2xl">
            <a
              href="mailto:dhiraj.kumar06281@gmail.com"
              className="text-muted hover:text-white hover:scale-125 transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/dhirajkumar62"
              target="_blank"
              className="text-muted hover:text-white hover:scale-125 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/dhirajkumar62/"
              target="_blank"
              className="text-muted hover:text-white hover:scale-125 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/916201318374"
              target="_blank"
              className="text-muted hover:text-white hover:scale-125 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6"></div>

        {/* BOTTOM SECTION */}
        <p className="text-center text-xs text-muted">
          © {new Date().getFullYear()} • Built with ❤️ by <span className="neon-text">Dhiraj Kumar</span>
        </p>

        <p className="text-center text-xs text-muted mt-1">
          Deployed on Vercel • Designed with React, Tailwind & Framer Motion
        </p>
      </div>

      {/* BACK TO TOP BUTTON */}
      <a
        href="#hero"
        className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-[#00F5D4] to-[#7C3AED] 
        text-black shadow-lg hover:shadow-neon-sm transition transform hover:-translate-y-1"
      >
        <FaArrowUp />
      </a>
    </footer>
  );
}
