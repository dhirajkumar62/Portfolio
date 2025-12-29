import React from "react";
import { motion } from "framer-motion";

export default function Timeline() {
  const items = [
    {
      year: "2024",
      title: "Frontend Developer - Infosys",
      desc: "Developed interactive dashboards, optimized UI performance, and improved user experience using React and Tailwind.",
    },
    {
      year: "2023",
      title: "Intern - Urban Company",
      desc: "Built reusable UI components, contributed to API integration, and supported frontend development workflows.",
    },
  ];

  return (
    <section id="timeline" className="py-20">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-extrabold mb-14 neon-text text-center"
      >
        Experience
        <div className="w-24 h-[3px] mx-auto mt-2 bg-gradient-to-r from-[#00F5D4] to-[#7C3AED] rounded-full"></div>
       </motion.h2>

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 h-full w-[3px] bg-gradient-to-b from-[#00F5D4] to-[#7C3AED] opacity-40"></div>

        <div className="space-y-12">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-16"
            >
              {/* Dot */}
              <div className="absolute left-3 top-1 w-6 h-6 rounded-full bg-[#00F5D4] shadow-[0_0_12px_#00F5D4] border border-white/20"></div>

              {/* Card */}
              <div className="glass p-5 rounded-xl shadow-neon-sm border border-white/10">
                <div className="text-sm font-semibold text-[#00F5D4]">{it.year}</div>
                <div className="text-lg font-bold mt-1">{it.title}</div>
                <div className="text-sm text-muted mt-2 leading-relaxed">{it.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
