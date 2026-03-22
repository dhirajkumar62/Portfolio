import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaChalkboardTeacher, FaTimes } from "react-icons/fa";

export default function TrainingPage() {
  const [openModal, setOpenModal] = useState(false);

  const training = {
    title: "Mastering C++: Object Oriented Programming to Dynamic Programming",
    institute: "Lovely Professional University (LPU)",
    date: "June 2025 - July 2025",
    logo: "https://www.lpu.in/lpu-assets/images/logo/lpu-seal.svg",

    certificate: "https://drive.google.com/file/d/1i8UU96TskdcuRsXXElRLxnSODrhtKxsB/view?usp=drive_link",

    points: [
      "Strengthened modular coding using Object-Oriented Programming principles.",
      "Implemented dynamic programming techniques to optimize algorithms.",
      "Enhanced debugging, memory optimization, and problem-solving skills.",
      "Worked on structured C++ projects following industry coding standards.",
    ],
  };

  return (
    <section className="py-20">
      <h2 className="text-3xl neon-text font-extrabold text-center mb-12">
        Training
        <div className="w-24 h-[3px] mx-auto mt-2 bg-gradient-to-r from-[#00F5D4] to-[#7C3AED] rounded-full"></div>
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto glass p-8 rounded-2xl border border-white/10 shadow-neon-sm hover:shadow-neon-md transition"
      >
        <div className="flex items-center gap-5">
          <img
            src={training.logo}
            alt="Institute Logo"
            className="w-16 h-16 rounded-md border border-white/20 bg-white/10 p-2"
          />

          <div>
            <h3 className="text-xl font-bold flex items-center gap-2">
              <FaChalkboardTeacher className="text-[#00F5D4]" />
              {training.title}
            </h3>

            <p className="text-sm text-muted">{training.institute}</p>
            <p className="text-xs text-[#00F5D4] mt-1">{training.date}</p>
          </div>
        </div>

        <ul className="text-sm text-muted mt-6 list-disc ml-6 leading-relaxed">
          {training.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>

        {/* Button that opens modal */}
        <button
          onClick={() => setOpenModal(true)}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-lg 
            bg-gradient-to-r from-[#00F5D4] to-[#7C3AED] text-black font-medium 
            hover:shadow-neon-sm transition"
        >
          View Certificate <FaExternalLinkAlt size={14} />
        </button>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-black/40 glass p-6 rounded-xl border border-white/10 shadow-xl max-w-3xl w-full"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold neon-text">{training.title}</h3>
                <button onClick={() => setOpenModal(false)}>
                  <FaTimes className="text-white text-xl hover:text-red-400 transition" />
                </button>
              </div>

              {/* PDF Preview */}
              <iframe
                src={training.certificate.replace("/view", "/preview")}
                className="w-full h-96 rounded-lg border border-white/10"
                allow="fullscreen"
              ></iframe>

              {/* Footer Buttons */}
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => setOpenModal(false)}
                  className="px-4 py-2 rounded-md border border-white/20 text-sm hover:bg-white/10 transition"
                >
                  Close
                </button>

                <a
                  href={training.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-[#00F5D4] to-[#7C3AED] text-black font-medium flex items-center gap-2"
                >
                  Open in New Tab <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
