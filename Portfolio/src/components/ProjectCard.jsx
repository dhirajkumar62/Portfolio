import React from "react";
import { motion } from "framer-motion";

void motion;

export default function ProjectCard({ p }) {
  return (
    <motion.article
      className="card-tilt rounded-2xl overflow-hidden border border-(--muted)/20 bg-(--surface) transition-all duration-300 group flex flex-col h-full"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Image */}
      <div className="w-full h-48 shrink-0 bg-black/5 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img
          src={p.img}
          alt={p.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        <h3 className="font-bold text-xl font-heading text-(--text) group-hover:text-(--accent-primary) transition-colors">
          {p.title}
        </h3>
        <p className="text-sm text-muted mt-2 leading-relaxed grow">
          {p.desc}
        </p>

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
              className="text-xs px-2.5 py-1 bg-(--muted)/10 text-(--text) font-medium border border-(--muted)/20 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3 pt-4 border-t border-(--muted)/10">
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-lg border border-(--muted)/30 hover:border-(--accent-primary) hover:text-(--accent-primary) transition text-sm font-medium flex-1 text-center bg-white/5"
            >
              GitHub
            </a>
          )}
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-lg border border-(--accent-primary)/40 bg-(--accent-primary)/10 text-(--accent-primary) transition text-sm font-medium flex-1 text-center"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
