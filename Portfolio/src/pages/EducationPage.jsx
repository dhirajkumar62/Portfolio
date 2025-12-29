import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function EducationPage() {
  const education = [
    {
      school: "Lovely Professional University, Punjab",
      degree: "B.Tech in Computer Science & Engineering",
      score: "CGPA: 7.23",
      year: "2023 - Present",
      link: "https://www.lpu.in",
      logo: "https://www.lpu.in/lpu-assets/images/logo/lpu-seal.svg"
    },
    {
      school: "Manjhi Inter College, Bihar",
      degree: "Intermediate (Science)",
      score: "Percentage: 70.6%",
      year: "2022 - 2023",
      link: "https://www.justdial.com/Saran/Manjhi-Inter-college-Manjhi/9999P6152-6152-220317230133-V1Y4_BZDET",
      logo: "https://images.bhaskarassets.com/thumb/1200x900/web2images/521/2020/01/04/bih28-1701366-large.jpg"
    },
    {
      school: "Vivekanand International Public School, Bihar",
      degree: "Matriculation (10th)",
      score: "Percentage: 56%",
      year: "2020 - 2021",
      link: "http://vipschapra.com/Our_School.aspx",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkzFbx66AgKRdhdF_-t8MivjSmsozEf_56w&s"
    },
  ];

  return (
    <section className="py-20">
      {/* Page Title */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-extrabold neon-text text-center mb-14"
      >
        Education
                <div className="w-24 h-[3px] mx-auto mt-2 bg-gradient-to-r from-[#00F5D4] to-[#7C3AED] rounded-full"></div>

      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {education.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass p-6 rounded-2xl border border-white/10 shadow-neon-sm hover:shadow-neon-md transition"
          >
            {/* Top Section */}
            <div className="flex items-center gap-4">
              <img
                src={e.logo}
                alt="logo"
                className="w-14 h-14 object-contain rounded-md border border-white/10 bg-white/10 p-2"
              />

              <div className="flex-1">
                <h3 className="text-xl font-bold">{e.school}</h3>
                <a
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#00F5D4] flex items-center gap-1 hover:underline"
                >
                  Visit Website <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </div>

            {/* Details */}
            <p className="mt-4 text-base">{e.degree}</p>
            <p className="text-muted">{e.score}</p>
            <p className="text-xs text-[#00F5D4] mt-1">{e.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
