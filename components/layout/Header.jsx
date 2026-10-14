"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "FullStack Developer",
  "Software Developer",
];

export default function Header() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3500); // Change role every 3.5 seconds to allow time for the full animation

    return () => clearInterval(interval);
  }, []);

  const role = roles[currentRole];
  const letters = Array.from(role);

  // Variants for the container to stagger the children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
        duration: 0.2,
      },
    },
  };

  // Variants for each individual letter
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 150,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        ease: "easeIn",
        duration: 0.2,
      },
    },
  };

  return (
    <header
      id="top"
      className="w-11/12 max-w-5xl mx-auto min-h-screen flex flex-col items-center justify-center gap-6 pt-24 pb-12 font-Outfit"
    >
      {/* Profile Image & Badge */}
      <div className="relative mb-4">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
        <img
          src="/assets/profile-img.png"
          alt="Ravi Sharma"
          className="relative rounded-full w-32 h-32 md:w-40 md:h-40 object-cover shadow-2xl border-4 border-white dark:border-white/10 transition-colors duration-500 z-10"
        />
        <div className="absolute -bottom-3 -right-3 bg-white dark:bg-zinc-800 rounded-full p-2 shadow-lg z-20 border border-zinc-100 dark:border-zinc-700 transition-colors duration-500">
          <span
            className="text-3xl inline-block animate-bounce"
            style={{ animationDuration: "2s" }}
          >
            👋
          </span>
        </div>
      </div>

      {/* Availability Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 shadow-sm"
      >
        <div className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
        </div>
        <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
          Available For New Opportunities
        </span>
      </motion.div>

      {/* Animated Headline */}
      <h1 className="flex flex-col items-center justify-center text-center">
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight tracking-tight whitespace-normal sm:whitespace-nowrap transition-colors duration-500">
          Turning ideas into digital experiences
        </span>

        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-500 dark:text-zinc-400 mt-2 sm:mt-4 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 h-[3em] sm:h-[1.5em] transition-colors duration-500">
          <span>as a</span>
          <span className="inline-flex text-transparent bg-clip-text bg-gradient-to-r from-[#b820e6] to-[#da7d20] pb-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="inline-flex overflow-hidden"
              >
                {letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={childVariants}
                    className={letter === " " ? "w-[0.3em]" : "inline-block"}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
            </AnimatePresence>
          </span>
        </span>
      </h1>

      {/* Sub-headline */}
      <p className="max-w-3xl mx-auto text-center text-base md:text-xl text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed transition-colors duration-500">
        I build clean, scalable, and responsive web applications with a focus on
        modern design principles and robust architecture.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-5 mt-4 w-full sm:w-auto">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 font-medium text-base cursor-pointer transition-all duration-500"
        >
          Contact Me
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>

        <a
          href="/resume.pdf"
          download
          className="w-full sm:w-auto px-8 py-3.5 rounded-full border-2 border-zinc-300 dark:border-white/20 hover:border-zinc-400 dark:hover:border-white/40 hover:bg-zinc-50 dark:hover:bg-white/5 flex items-center justify-center gap-2 bg-white dark:bg-transparent dark:text-white font-medium text-base cursor-pointer transition-all duration-500"
        >
          My Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
        </a>
      </div>
    </header>
  );
}
