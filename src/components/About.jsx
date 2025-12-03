import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaAward, FaBriefcase, FaUser, FaMapMarkerAlt, FaEnvelope, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start"
      >

        {/* PROFILE CARD */}
        <motion.div
          className="col-span-1 glass rounded-2xl p-6 flex flex-col items-center text-center card-tilt hover:shadow-neon-sm transition"
          whileHover={{ y: -6 }}
        >
          {/* Profile Image */}
          <div className="w-40 h-40 rounded-xl overflow-hidden ring-2 ring-[#00F5D4]/40 shadow-xl mb-4">
            <img
              src="https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg"
              alt="Dhiraj"
              className="w-80 h-45 object-cover"
            />
          </div>

          {/* Name + Role */}
          <div>
            <h3 className="text-2xl font-bold neon-text">Dhiraj Kumar</h3>
            <p className="text-sm text-muted mt-1">
              Full Stack Web Developer • React | Node.js | MySQL
            </p>
          </div>

          {/* Quick Info */}
          <div className="mt-5 w-full space-y-3 text-left">
            <div className="flex items-center gap-3">
              <FaUser className="text-[#00F5D4]" />
              <span className="text-sm">Age: <span className="text-muted">21</span></span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#00F5D4]" />
              <span className="text-sm">Location: <span className="text-muted">Punjab, India</span></span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#00F5D4]" />
              <span className="text-sm">Email: <span className="text-muted">dhiraj.kumar06281@gmail.com</span></span>
            </div>

            <div className="flex items-center gap-3">
              <FaLaptopCode className="text-[#00F5D4]" />
              <span className="text-sm">Freelance: <span className="text-green-400">Available</span></span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 w-full grid grid-cols-3 gap-3">
            <div className="p-3 rounded-lg bg-white/2 border border-white/4 text-center">
              <div className="text-sm text-muted">Projects</div>
              <div className="font-bold neon-text text-xl">15+</div>
            </div>
            <div className="p-3 rounded-lg bg-white/2 border border-white/4 text-center">
              <div className="text-sm text-muted">Experience</div>
              <div className="font-bold neon-text text-xl">1 yr</div>
            </div>
            <div className="p-3 rounded-lg bg-white/2 border border-white/4 text-center">
              <div className="text-sm text-muted">Open Source</div>
              <div className="font-bold neon-text text-xl">05</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-3">
            <a
              href="https://drive.google.com/file/d/1gXIYmDxeJQeBV0qZDtAbBEg4XZS_0A1o/view?usp=drive_link" 
              download
              className="btn-neon inline-flex items-center gap-2 px-4 py-2 text-black bg-gradient-to-r from-[#00F5D4]/20 to-[#7C3AED]/20 border border-white/10 rounded-lg text-sm"
            >
              <FaDownload /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/6 rounded-lg text-sm hover:scale-105 transition"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* ABOUT TEXT */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-extrabold mb-3 neon-text">About Me</h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-[#00F5D4] to-[#7C3AED] rounded-full mb-6"></div>

          {/* Main About Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-muted leading-relaxed max-w-3xl"
          >
            I'm <span className="neon-text font-semibold">Dhiraj Kumar</span>, a passionate{" "}
            <span className="text-white font-medium">Full Stack Web Developer</span> who enjoys
            building modern, scalable web applications with clean UI and smooth user interactions.
            I work across the entire stack—from{" "}
            <span className="text-[#00F5D4] font-semibold">React, Tailwind, Framer Motion</span>{" "}
            on the frontend to{" "}
            <span className="text-[#7C3AED] font-semibold">Node.js, MySQL, and PHP</span> on the backend.
          </motion.p>

          {/* Two Info Cards */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* What I Do */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glass p-4 rounded-lg card-tilt hover:shadow-neon-sm"
            >
              <h4 className="text-sm text-muted">What I Do</h4>
              <ul className="mt-2 text-sm leading-relaxed">
                <li>• Build component-driven UI with React</li>
                <li>• Design responsive interfaces with Tailwind</li>
                <li>• Add delightful motion with Framer Motion</li>
                <li>• Develop secure backend APIs with Node.js</li>
                <li>• Work with MySQL, MongoDB, and PHP</li>
              </ul>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glass p-4 rounded-lg card-tilt hover:shadow-neon-sm"
            >
              <h4 className="text-sm text-muted">Highlights</h4>

              <div className="mt-3 flex flex-col gap-3">
                {/* Achievement */}
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-white/3">
                    <FaAward />
                  </div>
                  <div>
                    <div className="text-sm">Hackathon Finalist</div>
                    <div className="text-xs text-muted">2024 • Team Collaboration</div>
                  </div>
                </div>

                {/* Internship */}
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-white/3">
                    <FaBriefcase />
                  </div>
                  <div>
                    <div className="text-sm">Frontend Developer Intern</div>
                    <div className="text-xs text-muted">Completed 6-month internship</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skill Tags */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "React",
              "Tailwind CSS",
              "JavaScript",
              "Node.js",
              "MySQL",
              "PHP",
              "MongoDB",
              "Framer Motion",
              "Vite",
            ].map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full text-sm bg-gradient-to-r
                from-[#00F5D4]/10 to-[#7C3AED]/10 border border-white/10"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
