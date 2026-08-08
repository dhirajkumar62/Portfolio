import React from "react";
import { motion } from "framer-motion";
import { VscVscode } from "react-icons/vsc";

void motion;

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaPhp,
  FaJava,
  FaBrain,
  FaServer,
  FaClock,
  FaSyncAlt,
  FaBalanceScale,
  FaDocker,
  FaAws,
  FaLinux,
  FaNpm,
  FaDatabase,
  FaUsers,
  FaComments,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiVite,
  SiMysql,
  SiMongodb,
  SiC,
  SiCplusplus,
  SiPython,
  SiKubernetes,
  SiJenkins,
  SiGithubactions,
  SiNginx,
  SiTerraform,
  SiGrafana,
  SiPrometheus,
  SiPostman,
  SiGitlab,
  SiAnsible,
  SiApache,
  SiRedis,
  SiJsonwebtokens,
  SiTypescript,
  SiPostgresql,
  SiGraphql,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    description: "Modern UI development with responsive, interactive interfaces.",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "#E44D26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "React.js", icon: <FaReact />, color: "#61DBFB" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "Vite", icon: <SiVite />, color: "#A56BFF" },
    ],
  },

  {
    title: "Backend",
    description: "Reliable APIs, authentication, and scalable server-side logic.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A" },
      { name: "Express.js", icon: <SiExpress />, color: "#FFFFFF" },
      { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
      { name: "REST APIs", icon: <FaServer />, color: "#00ADB5" },
     
    ],
  },

  {
    title: "Database",
    description: "Data modeling, persistence, and query optimization across relational and NoSQL systems.",
    skills: [
      { name: "MySQL", icon: <SiMysql />, color: "#00618A" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#00ED64" },
      { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
     
    ],
  },

  {
    title: "Programming Languages",
    description: "Core language skills for building and maintaining modern systems.",
    skills: [
      { name: "C", icon: <SiC />, color: "#00599C" },
      { name: "C++", icon: <SiCplusplus />, color: "#004482" },
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      { name: "Java", icon: <FaJava />, color: "#EA2D2E" },
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
    ],
  },

  {
    title: "DevOps & Cloud",
    description: "Deployment pipelines, infrastructure automation, and cloud-native delivery.",
    skills: [
      { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
      { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
      { name: "Jenkins", icon: <SiJenkins />, color: "#D24939" },
      { name: "AWS", icon: <FaAws />, color: "#FF9900" },
      { name: "Linux", icon: <FaLinux />, color: "#FCC624" },
      { name: "Nginx", icon: <SiNginx />, color: "#009639" },
      { name: "GitHub Actions", icon: <SiGithubactions />, color: "#2088FF" },
      { name: "Terraform", icon: <SiTerraform />, color: "#7B42BC" },
      { name: "Ansible", icon: <SiAnsible />, color: "#EE0000" },
      { name: "CI/CD", icon: <FaSyncAlt />, color: "#00ADB5" },
    ],
  },

  

  {
    title: "Tools",
    description: "Developer workflow and collaboration tools that keep delivery smooth.",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05033" },
      { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF" },
      { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { name: "npm", icon: <FaNpm />, color: "#CB3837" },
      { name: "GitLab", icon: <SiGitlab />, color: "#FC6D26" },
    ],
  },

  {
    title: "Soft Skills",
    description: "Focused on communication, ownership, and dependable execution.",
    skills: [
      { name: "Problem Solving", icon: <FaBrain />, color: "#FF6B6B" },
      { name: "Time Management", icon: <FaClock />, color: "#4ECDC4" },
      { name: "Adaptability", icon: <FaSyncAlt />, color: "#FFD93D" },
      { name: "Decision Making", icon: <FaBalanceScale />, color: "#6C5CE7" },
      { name: "Team Collaboration", icon: <FaUsers />, color: "#00ADB5" },
      { name: "Communication", icon: <FaComments />, color: "#7C3AED" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 px-4" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-extrabold mb-4 neon-text text-center"
      >
        Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center text-muted max-w-3xl mx-auto mb-10"
      >
        I build full-stack web applications with a strong focus on modern frontend experiences,
        robust backend services, cloud deployment, and reliable observability.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-6 rounded-2xl shadow-neon-sm"
          >
            <h3 className="text-xl font-semibold mb-2 neon-text">{group.title}</h3>
            <p className="text-sm text-muted mb-4">{group.description}</p>

            <div
              className={`grid gap-4 ${
                group.title === "Soft Skills"
                  ? "grid-cols-2 justify-items-center"
                  : "grid-cols-2"
              }`}
            >
              {group.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.07, y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 card-tilt cursor-pointer h-full overflow-hidden min-h-18 w-full ${
                    group.title === "Soft Skills" ? "max-w-full" : ""
                  }`}
                >
                  <div
                    className="text-2xl shrink-0 mt-0.5"
                    style={{
                      color: skill.color,
                      filter: "drop-shadow(0 0 6px rgba(255,255,255,0.25))",
                    }}
                  >
                    {skill.icon}
                  </div>

                  <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
                    <span className="font-medium text-sm leading-tight wrap-break-word">
                      {skill.name}
                    </span>
                    <span className="text-[10px] sm:text-xs text-muted mt-1 truncate">
                      {group.title === "Soft Skills" ? "Core Strength" : "Experienced"}
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