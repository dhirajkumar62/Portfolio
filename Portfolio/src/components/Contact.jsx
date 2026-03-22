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
        className="text-3xl font-extrabold mb-10 neon-text text-center"
      >
        Contact Me
        <div className="w-24 h-[3px] mx-auto mt-2 bg-gradient-to-r 
        from-[#00F5D4] to-[#7C3AED] rounded-full"></div>
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-6 rounded-xl border border-white/10 shadow-neon-sm flex flex-col gap-6"
        >
          <h3 className="text-xl font-semibold neon-text">Let's Connect</h3>

          {/* Email */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#00F5D4] text-xl" />
            <div>
              <p className="text-sm text-muted">Email</p>
              <p className="text-white text-sm">dhiraj.kumar06281@gmail.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-[#00F5D4] text-xl" />
            <div>
              <p className="text-sm text-muted">Location</p>
              <p className="text-white text-sm">Punjab, India</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-[#00F5D4] text-xl" />
            <div>
              <p className="text-sm text-muted">Phone</p>
              <p className="text-white text-sm">+91 6201318374</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-4 text-2xl">
            <a href="mailto:dhiraj.kumar06281@gmail.com" className="text-muted hover:text-white hover:scale-110 transition">
              <FaEnvelope />
            </a>

            <a href="https://github.com/dhirajkumar62" className="text-muted hover:text-white hover:scale-110 transition">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/dhirajkumar62/" className="text-muted hover:text-white hover:scale-110 transition">
              <FaLinkedin />
            </a>

            <a href="https://wa.me/916201318374" className="text-muted hover:text-white hover:scale-110 transition">
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 glass p-8 rounded-xl shadow-neon-sm border border-white/10"
        >
          <form onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* NAME */}
            <div className="relative group">
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="peer w-full p-3 rounded-lg bg-black/20 border border-white/10 
                  focus:border-[#00F5D4] focus:outline-none transition"
              />
              <label
                className={`absolute left-3 text-muted text-sm transition-all pointer-events-none
                  ${formData.name ? "-top-4 text-xs text-[#00F5D4]" : "top-3"}
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
                className="peer w-full p-3 rounded-lg bg-black/20 border border-white/10 
                  focus:border-[#00F5D4] focus:outline-none transition"
              />
              <label
                className={`absolute left-3 text-muted text-sm transition-all pointer-events-none
                  ${formData.email ? "-top-4 text-xs text-[#00F5D4]" : "top-3"}
                `}
              >
                Email Address
              </label>
            </div>

            {/* MESSAGE */}
            <div className="relative group md:col-span-2">
              <textarea
                rows="6"
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="peer w-full p-3 rounded-lg bg-black/20 border border-white/10 
                  focus:border-[#00F5D4] focus:outline-none transition"
              ></textarea>

              <label
                className={`absolute left-3 text-muted text-sm transition-all pointer-events-none
                  ${formData.message ? "-top-4 text-xs text-[#00F5D4]" : "top-3"}
                `}
              >
                Message
              </label>
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="btn-neon px-5 py-3 rounded-md bg-gradient-to-r 
                from-[#00F5D4] to-[#7C3AED] text-black font-medium md:col-span-2 
                shadow-md hover:shadow-neon-sm transition"
            >
              Send Message
            </motion.button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}
