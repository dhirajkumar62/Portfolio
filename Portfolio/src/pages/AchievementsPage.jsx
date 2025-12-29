import React from "react";
import { motion } from "framer-motion";
import { FaMedal, FaCode, FaShieldAlt, FaUsers, FaCheckCircle } from "react-icons/fa";

export default function AchievementsPage() {
  const achievements = [
    {
      title: "Solved 200+ LeetCode Problems",
      desc: "Strengthened problem-solving skills using Data Structures & Algorithms.",
      icon: <FaCode className="text-[#00F5D4] text-2xl" />,
    },
    {
      title: "Attended Cybersecurity Seminar",
      desc: "Explored security vulnerabilities, ethical hacking, and secure coding practices.",
      icon: <FaShieldAlt className="text-[#7C3AED] text-2xl" />,
    },
    {
      title: "Hackathon Participation",
      desc: "Collaborated with a team to build a functional prototype under time pressure.",
      icon: <FaUsers className="text-[#00F5D4] text-2xl" />,
    },
    {
      title: "Soft Skills Development Workshop",
      desc: "Enhanced communication, teamwork, decision making, and leadership abilities.",
      icon: <FaCheckCircle className="text-[#7C3AED] text-2xl" />,
    },
  ];

  return (
    <section className="py-20">
      {/* Title */}
      <h2 className="text-3xl font-extrabold neon-text text-center mb-10">
        Achievements
        <div className="w-24 h-[3px] mx-auto mt-2 bg-gradient-to-r from-[#00F5D4] to-[#7C3AED] rounded-full"></div>
      </h2>

      {/* Achievements List */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass p-6 rounded-2xl border border-white/10 shadow-neon-sm hover:shadow-neon-md transition"
          >
            <div className="flex items-center gap-4">
              {a.icon}

              <div>
                <h3 className="text-lg font-bold">{a.title}</h3>
                <p className="text-sm text-muted mt-1 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Medal Icon at the end for decoration */}
      <div className="flex justify-center mt-12 opacity-60">
        <FaMedal className="text-4xl text-[#00F5D4]" />
      </div>
    </section>
  );
}
