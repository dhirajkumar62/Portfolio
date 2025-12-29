import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFolderOpen,
  FaCertificate,
  FaGraduationCap,
  FaAward,
  FaChalkboardTeacher,
} from "react-icons/fa";

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      id="site-nav"
      className="fixed w-full z-50 top-0 left-0 backdrop-blur-lg bg-black/20 border-b border-white/5"
    >
      {/* Navbar Container */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between"
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center 
          bg-gradient-to-br from-[#00F5D4]/30 to-[#7C3AED]/20 border border-white/10 
          shadow-md group-hover:shadow-neon-sm transition">
            <span className="text-lg font-bold neon-text">D</span>
          </div>

          <span className="font-semibold text-base group-hover:text-white transition">
            Dhiraj Kumar
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {/* Normal Menu Items */}
          <a href="#projects" className="text-sm text-muted hover:text-white transition">
            Projects
          </a>
          <a href="#timeline" className="text-sm text-muted hover:text-white transition">
            Experience
          </a>
          <a href="#contact" className="text-sm text-muted hover:text-white transition">
            Contact
          </a>

          {/* Dropdown Menu */}
          <div className="relative group">
            <button className="text-sm text-muted hover:text-white transition flex items-center gap-1">
              Pages ▼
            </button>

            <div className="absolute hidden group-hover:block bg-black/60 backdrop-blur-xl 
            p-4 rounded-xl border border-white/10 shadow-neon-sm mt-3 right-0 w-56">
              
              {/* Projects Page */}
              <a
                href="/projects"
                className="flex items-center gap-3 px-3 py-2 text-sm text-muted hover:text-[#00F5D4] transition"
              >
                <FaFolderOpen className="text-[#00F5D4]" />
                Projects Page
              </a>

              {/* Certifications */}
              <a
                href="/certifications"
                className="flex items-center gap-3 px-3 py-2 text-sm text-muted hover:text-[#00F5D4] transition"
              >
                <FaCertificate className="text-[#00F5D4]" />
                Certifications
              </a>

              {/* Education */}
              <a
                href="/education"
                className="flex items-center gap-3 px-3 py-2 text-sm text-muted hover:text-[#00F5D4] transition"
              >
                <FaGraduationCap className="text-[#00F5D4]" />
                Education
              </a>

              {/* Achievements */}
              <a
                href="/achievements"
                className="flex items-center gap-3 px-3 py-2 text-sm text-muted hover:text-[#00F5D4] transition"
              >
                <FaAward className="text-[#00F5D4]" />
                Achievements
              </a>

              {/* Training */}
              <a
                href="/training"
                className="flex items-center gap-3 px-3 py-2 text-sm text-muted hover:text-[#00F5D4] transition"
              >
                <FaChalkboardTeacher className="text-[#00F5D4]" />
                Training
              </a>
            </div>
          </div>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1gXIYmDxeJQeBV0qZDtAbBEg4XZS_0A1o/view?usp=drive_link"
            download
            className="px-4 py-2 rounded-lg border border-[#00F5D4]/40 
            hover:bg-[#00F5D4]/20 hover:text-white transition text-sm"
          >
            CV
          </a>

          {/* Social Icons */}
          <a
            href="https://github.com/dhirajkumar62"
            className="text-xl text-muted hover:text-white hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/dhirajkumar62/"
            className="text-xl text-muted hover:text-white hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

          {/* Theme Toggle */}
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button
            className="p-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </motion.div>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/60 backdrop-blur-xl border-t border-white/10"
        >
          <div className="flex flex-col px-6 py-4 gap-4">

            {/* Pages with icons */}
            <a href="/projects" className="flex items-center gap-3 text-sm text-muted hover:text-white transition">
              <FaFolderOpen />
              Projects Page
            </a>

            <a href="/certifications" className="flex items-center gap-3 text-sm text-muted hover:text-white transition">
              <FaCertificate />
              Certifications
            </a>

            <a href="/education" className="flex items-center gap-3 text-sm text-muted hover:text-white transition">
              <FaGraduationCap />
              Education
            </a>

            <a href="/achievements" className="flex items-center gap-3 text-sm text-muted hover:text-white transition">
              <FaAward />
              Achievements
            </a>

            <a href="/training" className="flex items-center gap-3 text-sm text-muted hover:text-white transition">
              <FaChalkboardTeacher />
              Training
            </a>

            {/* Social icons */}
            <div className="flex gap-4 mt-3">
              <a href="https://github.com/dhirajkumar62" className="text-xl text-muted hover:text-white transition"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/dhirajkumar62/" className="text-xl text-muted hover:text-white transition"><FaLinkedin /></a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
