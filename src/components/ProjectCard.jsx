import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ p }) {
  return (
    <motion.article
      className="card-tilt rounded-2xl overflow-hidden border border-[var(--muted)]/20 bg-[var(--surface)] transition-all duration-300 group flex flex-col h-full"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Image */}
      <div className="h-48 bg-black/5 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl font-heading text-[var(--text)] group-hover:text-[var(--accent-primary)] transition-colors">{p.title}</h3>
        <p className="text-sm text-muted mt-2 leading-relaxed flex-grow">{p.desc}</p>

        {/* Bullet Points */}
        {p.points && (
          <ul className="text-xs text-muted mt-3 list-disc ml-5 space-y-1">
            {p.points.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
        )}

        {/* Tech Stack */}
        <div className="flex items-center gap-2 mt-5 flex-wrap">
          {p.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 bg-[var(--muted)]/10 text-[var(--text)] font-medium border border-[var(--muted)]/20 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3 pt-4 border-t border-[var(--muted)]/10">
          <a
            href={p.live}
            target="_blank"
            className="btn-neon px-5 py-2 rounded-lg text-sm font-semibold flex-1 text-center"
          >
            Live Site
          </a>
          <a
            href={p.repo}
            target="_blank"
            className="px-5 py-2 rounded-lg border border-[var(--muted)]/30 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition text-sm font-medium flex-1 text-center bg-white/5"
          >
            Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}
