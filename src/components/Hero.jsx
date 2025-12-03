import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Hi, I’m Dhiraj.{" "}
          <span className="neon-text">Full Stack Web Developer</span>
        </h1>

        {/* SUBTITLE */}
        <p className="mt-4 max-w-2xl text-muted">
          I build modern, scalable and user-friendly web applications using
          React, Node.js, PHP, MySQL and Tailwind CSS. I focus on creating clean
          UI, efficient backend systems, and smooth user experiences.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex items-center gap-4">
          <a
            href="#projects"
            className="btn-neon inline-block px-5 py-3 rounded-lg bg-gradient-to-r 
            from-[#00F5D4] to-[#7C3AED] text-black font-medium shadow-md 
            hover:shadow-neon-sm transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="inline-block px-4 py-3 rounded-lg border border-white/6 hover:border-[#00F5D4] transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
