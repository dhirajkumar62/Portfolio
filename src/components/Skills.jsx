import React from "react";
import { motion } from "framer-motion";
import { VscVscode } from "react-icons/vsc";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDatabase,
  FaGithub,
  FaPhp,
  FaJava,
  FaBrain,
   FaServer,
  FaClock,
  FaSyncAlt,
  FaBalanceScale
} from "react-icons/fa";

import {
  SiTailwindcss,
    SiExpress,
  SiVite,
  SiMysql,
  SiMongodb,
  SiC,
  SiCplusplus,
  SiPython
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 />, color: "#E44D26" },
      { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "React", icon: <FaReact />, color: "#61DBFB" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8" },
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A" },
      { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
       { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
       { name: "REST APIs", icon: <FaServer />, color: "#00ADB5" },
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql />, color: "#00618A" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#00ED64" },
      { name: "Database Concepts", icon: <FaDatabase />, color: "#AEE2FF" },
    ],
  },

  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: <SiC />, color: "#00599C" },
      { name: "C++", icon: <SiCplusplus />, color: "#004482" },
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      { name: "Java", icon: <FaJava />, color: "#EA2D2E" },
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05033" },
      { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF" },
      { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
      { name: "Vite", icon: <SiVite />, color: "#A56BFF" },
    ],
  },

  {
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", icon: <FaBrain />, color: "#FF6B6B" },
      { name: "Time Manage\u00ADment", icon: <FaClock />, color: "#4ECDC4" },
      { name: "Adapta\u00ADbility", icon: <FaSyncAlt />, color: "#FFD93D" },
      { name: "Decision Making", icon: <FaBalanceScale />, color: "#6C5CE7" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-extrabold mb-10 neon-text text-center"
      >
        Skills
        <div className="w-24 h-[3px] mx-auto mt-2 bg-gradient-to-r from-[#00F5D4] to-[#7C3AED] rounded-full"></div>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-6 rounded-2xl shadow-neon-sm"
          >
            <h3 className="text-xl font-semibold mb-4 neon-text">
              {group.title}
            </h3>

            {/* 🔥 FIXED GRID */}
            <div
              className={`grid gap-4 ${group.title === "Soft Skills"
                  ? "grid-cols-2 justify-items-center"
                  : "grid-cols-2"
                }`}
            >
              {group.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.07 }}
                  className={`flex items-center gap-3 p-3 rounded-xl bg-white/2 border border-white/10 card-tilt cursor-pointer h-full ${group.title === "Soft Skills" ? "w-full max-w-[170px]" : "w-full"
                    }`}
                >
                  <div
                    className="text-2xl shrink-0"
                    style={{
                      color: skill.color,
                      filter: "drop-shadow(0 0 6px rgba(255,255,255,0.25))",
                    }}
                  >
                    {skill.icon}
                  </div>

                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="font-medium text-sm leading-tight">
                      {skill.name}
                    </span>
                    <span className="text-[10px] sm:text-xs text-muted mt-1">
                      {group.title === "Soft Skills"
                        ? "Core Strength"
                        : "Experienced"}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}