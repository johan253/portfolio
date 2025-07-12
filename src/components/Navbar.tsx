"use client";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Signature from "./Signature";

const Navbar = ({ darkMode, toggleDark, resumeLink, loading }: { darkMode: boolean, toggleDark: () => void, resumeLink: string, loading: boolean }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-all shadow-sm">
      <div className="relative flex justify-between sm:justify-end items-center max-w-7xl mx-auto">
        {/* Menu Toggle */}
        <div className="flex items-center justify-center sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-zinc-700 dark:text-zinc-300 focus:outline-none text-2xl"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Signature Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden sm:block">
          <Signature />
        </div>

        {/* Right Side Controls */}
        <ul className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <li
            onClick={toggleDark}
            className="cursor-pointer p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
          >
            {
              darkMode ? (
                <BsSunFill className="text-white text-xl" aria-label="Light mode" />
              ) : (
                <BsFillMoonStarsFill className="text-zinc-800 text-xl" aria-label="Dark mode" />
              )
            }
          </li>

          {/* Resume */}
          <li>
            <a
              href={resumeLink || "#"}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md shadow transition"
            >
              {loading ? "Loading..." : "Resume"}
            </a>
          </li>
        </ul>
      </div>

      {/* Dropdown for mobile */}
      <ul
        className={`sm:hidden flex flex-col bg-white dark:bg-zinc-800 shadow-md mt-3 rounded-md overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-40 py-2" : "max-h-0 py-0"
          }`}
      >
        <li>
          <button
            onClick={() => handleScroll("experience")}
            className="w-full text-left px-6 py-3 text-zinc-800 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 transition"
          >
            Experience
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("projects")}
            className="w-full text-left px-6 py-3 text-zinc-800 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 transition"
          >
            Projects
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
