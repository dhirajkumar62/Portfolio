import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CertificationsPage from './pages/CertificationsPage';
import EducationPage from './pages/EducationPage';
import AchievementsPage from './pages/AchievementsPage';
import TrainingPage from './pages/TrainingPage';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  // THEME FIX (WORKING 100%)
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Navbar shadow on scroll (your original logic)
  useEffect(() => {
    const nav = document.getElementById("site-nav");
    const onScroll = () => {
      if (!nav) return;
      if (window.scrollY > 18) nav.classList.add("shadow-neon");
      else nav.classList.remove("shadow-neon");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} setTheme={setTheme} />

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <TrainingPage/>
        <CertificationsPage/>
        <AchievementsPage/>
        <Timeline />
        <EducationPage/>
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
