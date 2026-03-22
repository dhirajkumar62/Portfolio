import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";

export default function CertificationsPage() {
  const [selected, setSelected] = useState(null);

  const certifications = [
    {
      title: "Cloud Computing",
      platform: "NPTEL",
      date: "May 2025",
      link: "https://drive.google.com/file/d/1zJs-Mk3YBb0Xyar4nH7-9QfMYMFNI3LY/view",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxdbLEksrDBEnq9y8-j6NH7xf7kQyqEfCFA&s"
    },
    {
      title: "Responsive Web Design",
      platform: "FreeCodeCamp",
      date: "Oct 2024",
      link: "https://drive.google.com/file/d/1c61c-4NUupwA5T23CHgWHgKkCtteu-YK/view",
      logo: "https://i.pcmag.com/imagery/reviews/01tPXClg2WjLamQzScplH3y-15..v1627670281.png"
    },
    {
      title: "Object Oriented Programming",
      platform: "iamneo",
      date: "Dec 2024",
      link: "https://drive.google.com/file/d/1LAbjKjlL57p9dZHG7BGIjTigut8SMbpw/view?usp=drive_link",
      logo: "https://play-lh.googleusercontent.com/7DDEFdPlz1Myej3-Ws3VY2gU0tA3iipaa3b6pdnsFR_BFLaK6VGDh0j4cwEoDpGiGUQ=w3840-h2160-rw"
    },
    {
      title: "Data Structures & Algorithms",
      platform: "iamneo",
      date: "Dec 2024",
      link: "https://drive.google.com/file/d/1MH7eM5TMH5-kDk5Gs1r8E4SG0-4qIghQ/view?usp=drive_link",
      logo: "https://play-lh.googleusercontent.com/7DDEFdPlz1Myej3-Ws3VY2gU0tA3iipaa3b6pdnsFR_BFLaK6VGDh0j4cwEoDpGiGUQ=w3840-h2160-rw"
    },
    {
      title: "Soft Skills",
      platform: "Infosys",
      date: "Nov 2024",
      link: "https://drive.google.com/file/d/1nMNjnTpR32at0UXeXXIqwqsi6YqmmPAD/view",
      logo: "https://www.infosys.com/content/dam/infosys-web/en/about/springboard/images/infosys-springboard.png"
    },
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-extrabold neon-text text-center mb-10">
        Certifications
        <div className="w-24 h-[3px] mx-auto mt-2 bg-gradient-to-r from-[#00F5D4] to-[#7C3AED] rounded-full"></div>
      </h2>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            className="glass p-6 rounded-xl border border-white/10 shadow-neon-sm hover:shadow-neon-md hover:-translate-y-1 transition cursor-pointer"
            onClick={() => setSelected(cert)}
          >
            <div className="flex items-center gap-4">
              <img
                src={cert.logo}
                alt={cert.platform}
                className="w-16 h-16 object-contain rounded-md bg-white/10 p-2 border border-white/10"
              />

              <div className="flex-1">
                <h3 className="text-lg font-bold">{cert.title}</h3>
                <p className="text-sm text-muted">{cert.platform}</p>
                <p className="text-xs text-[#00F5D4] mt-1">{cert.date}</p>

                {/* TAG */}
    <span
  className="px-3 py-1 text-[11px] rounded-md 
  bg-gradient-to-r from-[#00F5D4]/20 to-[#7C3AED]/20
  border border-white/20 
  text-[#00F5D4] font-semibold 
  shadow-[0_0_8px_rgba(0,245,212,0.35)]
  backdrop-blur-sm"
>
  View Certificate
</span>


              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL VIEWER */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-black/40 glass p-6 rounded-xl border border-white/10 shadow-xl max-w-3xl w-full"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold neon-text">{selected.title}</h3>
                <button onClick={() => setSelected(null)}>
                  <FaTimes className="text-white text-xl hover:text-red-400 transition" />
                </button>
              </div>

              {/* PDF iframe */}
              <iframe
                src={selected.link.replace("/view", "/preview")}
                className="w-full h-96 rounded-lg border border-white/10"
                allow="fullscreen"
              ></iframe>

              {/* Buttons */}
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => setSelected(null)}
                  className="px-4 py-2 rounded-md border border-white/20 text-sm hover:bg-white/10 transition"
                >
                  Close
                </button>

                <a
                  href={selected.link}
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
