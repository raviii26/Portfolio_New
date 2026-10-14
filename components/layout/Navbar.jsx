"use client";
import { useEffect, useRef } from "react";

export default function Navbar() {
  const sideMenuRef = useRef();
  const navRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 50) {
          navRef.current.classList.add(
            "bg-white/90",
            "backdrop-blur-lg",
            "shadow-sm",
            "dark:bg-black/90",
            "dark:shadow-white/10",
          );
        } else {
          navRef.current.classList.remove(
            "bg-white/90",
            "backdrop-blur-lg",
            "shadow-sm",
            "dark:bg-black/90",
            "dark:shadow-white/10",
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case the page is reloaded halfway down
    handleScroll();

    // -------- light mode and dark mode -----------

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <img src="/assets/header-bg-color.png" alt="" className="w-full" />
      </div>

      <nav
        ref={navRef}
        className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-500"
      >
        <a href="https://prebuiltui.com?utm_source=eliana">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="w-28 cursor-pointer mr-14 dark:hidden"
          />
          <img
            src="/assets/logo_dark.png"
            alt="Logo"
            className="w-28 cursor-pointer mr-14 hidden dark:block"
          />
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-sm font-medium font-Ovo transition-all duration-500">
          <li>
            <a
              className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-500"
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-500"
              href="#about"
            >
              About me
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-500"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-500"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-500"
              href="#services"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-500"
              href="#work"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-500"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-300"
          >
            <img
              src="/assets/moon_icon.png"
              alt=""
              className="w-5 dark:hidden"
            />
            <img
              src="/assets/sun_icon.png"
              alt=""
              className="w-5 hidden dark:block"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:block px-6 py-2.5 rounded-[6px] text-sm font-medium cursor-pointer transition-all duration-500 bg-black text-white hover:bg-gray-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 ml-4 font-Ovo"
          >
            Contact
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <img
              src="/assets/menu-black.png"
              alt=""
              className="w-6 dark:hidden"
            />
            <img
              src="/assets/menu-white.png"
              alt=""
              className="w-6 hidden dark:block"
            />
          </button>
        </div>
        {/* -- ----- mobile menu ------  -- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-6 py-24 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white/90 backdrop-blur-xl shadow-2xl transition-all duration-500 font-Ovo dark:bg-black/90 dark:text-white border-l border-gray-200 dark:border-white/10"
        >
          <div
            className="absolute right-6 top-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 cursor-pointer transition-colors"
            onClick={closeMenu}
          >
            <img
              src="/assets/close-black.png"
              alt=""
              className="w-5 dark:hidden"
            />
            <img
              src="/assets/close-white.png"
              alt=""
              className="w-5 hidden dark:block"
            />
          </div>

          <li>
            <a
              className="text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors block py-2"
              href="#top"
              onClick={closeMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors block py-2"
              href="#about"
              onClick={closeMenu}
            >
              About me
            </a>
          </li>
          <li>
            <a
              className="text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors block py-2"
              href="#services"
              onClick={closeMenu}
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors block py-2"
              href="#work"
              onClick={closeMenu}
            >
              My Work
            </a>
          </li>
          <li>
            <a
              className="text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors block py-2"
              href="#contact"
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
