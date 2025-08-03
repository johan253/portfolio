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
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-zinc-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md transition-all dark:border-zinc-800 dark:bg-zinc-900/80 sm:px-6">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between sm:justify-end">
        {/* Menu Toggle */}
        <div className="flex items-center justify-center sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-zinc-700 focus:outline-none dark:text-zinc-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Signature Logo */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 sm:block">
          <Signature />
        </div>

        {/* Right Side Controls */}
        <ul className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <li
            onClick={toggleDark}
            className="cursor-pointer rounded-full p-2 transition hover:bg-zinc-200 dark:hover:bg-zinc-700"
          >
            {
              darkMode ? (
                <BsSunFill className="text-xl text-white" aria-label="Light mode" />
              ) : (
                <BsFillMoonStarsFill className="text-xl text-zinc-800" aria-label="Dark mode" />
              )
            }
          </li>

          {/* Resume */}
          <li>
            <a
              href={resumeLink || "#"}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white shadow transition hover:bg-blue-700"
            >
              {loading ? "Loading..." : "Resume"}
            </a>
          </li>
        </ul>
      </div>

      {/* Dropdown for mobile */}
      <ul
        className={`mt-3 flex flex-col overflow-hidden rounded-md bg-white shadow-md transition-all duration-300 dark:bg-zinc-800 sm:hidden ${menuOpen ? "max-h-40 py-2" : "max-h-0 py-0"
          }`}
      >
        <li>
          <button
            onClick={() => handleScroll("experience")}
            className="w-full px-6 py-3 text-left text-zinc-800 transition hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-700"
          >
            Experience
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("projects")}
            className="w-full px-6 py-3 text-left text-zinc-800 transition hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-700"
          >
            Projects
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
