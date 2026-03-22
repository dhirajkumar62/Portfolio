import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form change
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Send email function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_solio8n",
        "template_9vof9cx",
        formData,
        "S3S33DBED_WHS-rLO"
      )
      .then(
        () => {
          toast.success("Message sent successfully! 🚀");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          toast.error("Failed to send message ❌");
        }
      );
  };

  return (
    <section id="contact" className="py-20">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-extrabold mb-10 neon-text text-center font-heading tracking-wide"
      >
        Contact Me
        <div className="w-24 h-[3px] mx-auto mt-2 bg-gradient-to-r 
        from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full"></div>
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass bento-card p-8 flex flex-col gap-8 h-full"
        >
          <h3 className="text-2xl font-bold neon-text font-heading">Let's Connect</h3>

          <div className="flex flex-col gap-6">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center text-[var(--accent-primary)] text-xl border border-[var(--accent-primary)]/20">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted">Email</p>
                <p className="text-[var(--text)] font-medium text-sm mt-1">dhiraj.kumar06281@gmail.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center text-[var(--accent-primary)] text-xl border border-[var(--accent-primary)]/20">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted">Location</p>
                <p className="text-[var(--text)] font-medium text-sm mt-1">Punjab, India</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center text-[var(--accent-primary)] text-xl border border-[var(--accent-primary)]/20">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted">Phone</p>
                <p className="text-[var(--text)] font-medium text-sm mt-1">+91 6201318374</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-auto pt-6 border-t border-[var(--muted)]/10">
            {[
              { icon: <FaEnvelope />, link: "mailto:dhiraj.kumar06281@gmail.com" },
              { icon: <FaGithub />, link: "https://github.com/dhirajkumar62" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/dhirajkumar62/" },
              { icon: <FaWhatsapp />, link: "https://wa.me/916201318374" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--surface)] border border-[var(--muted)]/20 text-muted hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] hover:scale-105 transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 glass bento-card p-8 h-full"
        >
          <form onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full flex-col">

            {/* NAME */}
            <div className="relative group">
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="peer w-full p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-[var(--muted)]/20
                  focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
              />
              <label
                className={`absolute left-4 text-muted text-sm transition-all pointer-events-none bg-[var(--surface)] px-1
                  ${formData.name ? "-top-2.5 text-xs text-[var(--accent-primary)]" : "top-4"}
                  peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[var(--accent-primary)]
                `}
              >
                Your Name
              </label>
            </div>

            {/* EMAIL */}
            <div className="relative group">
              <input
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="peer w-full p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-[var(--muted)]/20
                  focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
              />
              <label
                className={`absolute left-4 text-muted text-sm transition-all pointer-events-none bg-[var(--surface)] px-1
                  ${formData.email ? "-top-2.5 text-xs text-[var(--accent-primary)]" : "top-4"}
                  peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[var(--accent-primary)]
                `}
              >
                Email Address
              </label>
            </div>

            {/* MESSAGE */}
            <div className="relative group md:col-span-2 flex-grow flex flex-col">
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="peer w-full p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-[var(--muted)]/20
                  focus:border-[var(--accent-primary)] focus:outline-none transition-colors flex-grow resize-none min-h-[150px]"
              ></textarea>

              <label
                className={`absolute left-4 text-muted text-sm transition-all pointer-events-none bg-[var(--surface)] px-1
                  ${formData.message ? "-top-2.5 text-xs text-[var(--accent-primary)]" : "top-4"}
                  peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[var(--accent-primary)]
                `}
              >
                Message
              </label>
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-neon px-6 py-4 rounded-xl text-white font-semibold md:col-span-2 mt-auto"
            >
              Send Message
            </motion.button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}
