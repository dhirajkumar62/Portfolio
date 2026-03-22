import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="py-24 relative overflow-hidden">
      {/* Gradient Orb */}
      <div className="orb-glow top-0 md:top-10 left-0 md:left-[10%]"></div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* TITLE */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight font-heading">
          I engineer digital experiences <br className="hidden md:block" />
          <span className="neon-text">that scale.</span>
        </h1>

        {/* SUBTITLE */}
        <p className="mt-6 max-w-2xl text-muted text-lg relative z-10">
          I'm Dhiraj, a Full Stack Web Developer building modern, scalable applications.
          I focus on creating clean UI, efficient backend systems, and smooth user experiences
          with React, Node.js, and Tailwind CSS.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-wrap items-center gap-4 relative z-10">
          <a
            href="#projects"
            className="btn-neon inline-block px-7 py-3.5 text-sm md:text-base font-semibold transition"
          >
            View My Work
          </a>

          <a
            href="https://drive.google.com/file/d/1gXIYmDxeJQeBV0qZDtAbBEg4XZS_0A1o/view?usp=drive_link"
            download
            className="inline-block px-7 py-3.5 rounded-xl border border-[var(--muted)]/30 hover:border-[var(--accent-primary)] 
            hover:text-[var(--accent-primary)] transition text-sm md:text-base font-medium bg-white/5 backdrop-blur-sm"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
