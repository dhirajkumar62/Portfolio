import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaAward, FaBriefcase, FaUser, FaMapMarkerAlt, FaEnvelope, FaLaptopCode } from "react-icons/fa";

// Import your profile image. 
// Vite will automatically optimize this and add a unique hash during build so it always updates safely!
import profileImg from "../assets/profile.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start"
      >

        {/* PROFILE CARD (Bento 1) */}
        <motion.div
          className="lg:col-span-1 glass bento-card p-8 flex flex-col items-center text-center h-full justify-between"
          whileHover={{ y: -4 }}
        >
          <div className="flex flex-col items-center">
            {/* Profile Image */}
            <div className="w-32 h-32 rounded-2xl overflow-hidden ring-2 ring-[var(--accent-primary)]/20 shadow-lg mb-6">
              <img
                src={profileImg}
                alt="Dhiraj"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name + Role */}
            <div>
              <h3 className="text-2xl font-bold neon-text font-heading">Dhiraj Kumar</h3>
              <p className="text-sm text-muted mt-2 font-medium">
                Full Stack Web Developer
              </p>
            </div>

            {/* Quick Info */}
            <div className="mt-8 w-full space-y-4 text-left bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-[var(--muted)]/10">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[var(--accent-primary)]" />
                <span className="text-sm font-medium">Punjab, India</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[var(--accent-primary)]" />
                <span className="text-sm font-medium">dhiraj.kumar06281@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaLaptopCode className="text-[var(--accent-primary)]" />
                <span className="text-sm font-medium">Freelance: <span className="text-[var(--success)]">Available</span></span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 w-full flex flex-col gap-3">
            <a
              href="https://drive.google.com/file/d/12dZueTrhuJC9Qd5NUEDxtJtHZeEMcCpQ/view?usp=drive_link"
              download
              className="btn-neon w-full flex justify-center items-center gap-2 px-4 py-3 text-sm font-semibold"
            >
              <FaDownload /> Download Resume
            </a>
            <a
              href="#contact"
              className="w-full flex justify-center items-center gap-2 px-4 py-3 bg-[var(--surface)] border border-[var(--muted)]/20 rounded-xl text-sm font-medium hover:border-[var(--accent-primary)]/50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN (Bento Grid) */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* ABOUT TEXT (Bento 2) */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass bento-card p-8"
          >
            <h2 className="text-3xl font-extrabold mb-4 neon-text font-heading">About Me</h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-muted leading-relaxed text-base md:text-lg"
            >
              I'm <span className="font-semibold text-[var(--accent-primary)]">Dhiraj Kumar</span>, a passionate{" "}
              <span className="text-[var(--text)] font-medium">Full Stack Web Developer</span> who enjoys
              building modern, scalable web applications with clean UI and smooth user interactions.
              I work across the entire stack—from modern frontend frameworks to robust backend architectures.
            </motion.p>
          </motion.div>

          {/* TWO INFO CARDS (Bento 3 & 4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* What I Do */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass bento-card p-6 flex flex-col"
            >
              <h4 className="text-sm text-muted font-semibold uppercase tracking-wider mb-4">What I Do</h4>
              <ul className="text-sm leading-relaxed space-y-3 font-medium">
                <li className="flex gap-2">
                  <span className="text-[var(--accent-primary)]">▹</span> Build component-driven UI with React
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent-primary)]">▹</span> Design responsive interfaces with Tailwind
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent-primary)]">▹</span> Develop secure backend APIs with Node.js
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent-primary)]">▹</span> Database management (MySQL, MongoDB)
                </li>
              </ul>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass bento-card p-6 flex flex-col"
            >
              <h4 className="text-sm text-muted font-semibold uppercase tracking-wider mb-4">Highlights</h4>
              <div className="flex flex-col gap-5">
                {/* Achievement */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                    <FaAward size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[var(--text)]">Hackathon Finalist</div>
                    <div className="text-xs text-muted mt-1">2024 • Team Collaboration</div>
                  </div>
                </div>

                {/* Internship */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[var(--accent-secondary)]/10 text-[var(--accent-secondary)]">
                    <FaBriefcase size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[var(--text)]">Frontend Developer Intern</div>
                    <div className="text-xs text-muted mt-1">Completed 6-month internship</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* SKILL TAGS (Bento 5) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass bento-card p-6"
          >
            <h4 className="text-sm text-muted font-semibold uppercase tracking-wider mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "React", "Tailwind CSS", "JavaScript", "Node.js",
                "MySQL", "PHP", "MongoDB", "Framer Motion", "Vite"
              ].map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--surface)] 
                  border border-[var(--muted)]/20 hover:border-[var(--accent-primary)]/50 
                  hover:text-[var(--accent-primary)] transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
