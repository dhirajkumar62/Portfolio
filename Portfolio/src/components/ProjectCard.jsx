import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ p }) {
  return (
    <motion.article
      className="card-tilt rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:shadow-neon-sm transition"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Image */}
      <div className="h-48 bg-gray-900 overflow-hidden">
        <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-lg">{p.title}</h3>
        <p className="text-sm text-muted mt-1">{p.desc}</p>

        {/* Bullet Points */}
        {p.points && (
          <ul className="text-xs text-muted mt-3 list-disc ml-5 space-y-1">
            {p.points.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
        )}

        {/* Tech Stack */}
        <div className="flex items-center gap-2 mt-4 flex-wrap">
          {p.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 bg-white/10 border border-white/10 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-5 flex gap-3">
          <a
            href={p.live}
            target="_blank"
            className="btn-neon px-3 py-2 rounded-md bg-gradient-to-r from-[#00F5D4] to-[#7C3AED] text-black text-sm"
          >
            Live
          </a>
          <a
            href={p.repo}
            target="_blank"
            className="px-3 py-2 rounded-md border text-sm"
          >
            Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}
