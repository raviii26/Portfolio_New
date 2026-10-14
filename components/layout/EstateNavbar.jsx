"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function EstateNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "dark";
      setTheme("dark");
    } else {
      localStorage.theme = "light";
      setTheme("light");
    }
  };

  useEffect(() => {
    // Clear any existing hash from the URL on load
    if (typeof window !== "undefined" && window.location.hash) {
      window.history.replaceState(
        null,
        document.title,
        window.location.pathname + window.location.search,
      );
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#personal-projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (e, href, name) => {
    e.preventDefault();
    setActiveItem(name);
    setIsMobileMenuOpen(false);

    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      // Clean the URL up completely (removes any #hash)
      window.history.replaceState(
        null,
        document.title,
        window.location.pathname + window.location.search,
      );
    }
  };

  // Framer motion variants for the theme icon
  const iconVariants = {
    initial: { y: -20, opacity: 0, rotate: -90, scale: 0.5 },
    animate: { y: 0, opacity: 1, rotate: 0, scale: 1 },
    exit: { y: 20, opacity: 0, rotate: 90, scale: 0.5 },
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pt-4 md:pt-6 px-4 sm:px-6 pointer-events-none">
        <nav
          className={`pointer-events-auto transition-all duration-500 w-full max-w-6xl font-Outfit rounded-full 
                    ${
                      isScrolled
                        ? "bg-white/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-3 dark:bg-black/95 border border-zinc-200 dark:border-white/10"
                        : "bg-white/90 dark:bg-black/70 backdrop-blur-md shadow-sm py-4 border border-zinc-200/80 dark:border-white/10"
                    }`}
        >
          <div className="flex items-center justify-between px-6 md:px-8 w-full">
            {/* Logo */}
            <a
              href="#top"
              onClick={(e) => handleScrollTo(e, "#top", "Home")}
              className="flex items-center gap-2 cursor-pointer"
            >
              <span className="text-2xl font-bold tracking-tight transition-colors duration-300 text-zinc-900 dark:text-white">
                Ravi.
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href, item.name)}
                  className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 py-1 cursor-pointer
                                ${activeItem === item.name ? "text-zinc-900 dark:text-white" : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"}`}
                >
                  {item.name}
                  {/* Active Indicator */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#b820e6] to-[#da7d20] transition-all duration-300 ease-out ${activeItem === item.name ? "w-full" : "w-0"}`}
                  ></span>
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
              {/* Animated Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors duration-300 text-zinc-900 dark:text-white shadow-inner"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === "dark" ? (
                    <motion.div
                      key="dark"
                      variants={iconVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{
                        duration: 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="absolute"
                    >
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
                        className="text-yellow-400"
                      >
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2" />
                        <path d="M12 20v2" />
                        <path d="m4.93 4.93 1.41 1.41" />
                        <path d="m17.66 17.66 1.41 1.41" />
                        <path d="M2 12h2" />
                        <path d="M20 12h2" />
                        <path d="m6.34 17.66-1.41 1.41" />
                        <path d="m19.07 4.93-1.41 1.41" />
                      </svg>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="light"
                      variants={iconVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{
                        duration: 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="absolute"
                    >
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
                        className="text-indigo-500"
                      >
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact", "Contact")}
                className="px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white hover:scale-105 shadow-md shadow-[#b820e6]/20 cursor-pointer"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Toggle & Theme */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full flex items-center justify-center relative overflow-hidden bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors duration-300 text-zinc-900 dark:text-white"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === "dark" ? (
                    <motion.div
                      key="dark-mobile"
                      variants={iconVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                      className="absolute"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-yellow-400"
                      >
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2" />
                        <path d="M12 20v2" />
                        <path d="m4.93 4.93 1.41 1.41" />
                        <path d="m17.66 17.66 1.41 1.41" />
                        <path d="M2 12h2" />
                        <path d="M20 12h2" />
                        <path d="m6.34 17.66-1.41 1.41" />
                        <path d="m19.07 4.93-1.41 1.41" />
                      </svg>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="light-mobile"
                      variants={iconVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                      className="absolute"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-indigo-500"
                      >
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
              <button
                className="p-2 rounded-md aspect-square transition cursor-pointer text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-white/95 dark:bg-black/95 backdrop-blur-xl transition-all duration-500 ease-in-out md:hidden flex flex-col overflow-y-auto
                ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
      >
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-end z-[70]">
          <button
            className="p-2 rounded-md aspect-square transition cursor-pointer bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center gap-6 px-6 font-Outfit pt-24 pb-12 min-h-full">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href, item.name)}
              className={`text-2xl sm:text-3xl font-bold transition-colors cursor-pointer ${activeItem === item.name ? "text-transparent bg-clip-text bg-gradient-to-r from-[#b820e6] to-[#da7d20]" : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"}`}
            >
              {item.name}
            </a>
          ))}
          <div className="mt-4 w-full max-w-[200px] pb-12">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact", "Contact")}
              className="flex items-center justify-center w-full text-center px-6 py-4 rounded-full text-lg font-bold transition-all duration-300 bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white shadow-lg shadow-[#b820e6]/20 cursor-pointer"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
