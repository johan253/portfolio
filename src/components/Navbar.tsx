import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa"; // Menu icon
import { useState } from "react";
import Signature from "./Signature";

const Navbar = ({ toggleDark, resumeLink, loading }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-50 dark:bg-slate-700 shadow-md shadow-neutral-300 dark:shadow-slate-950 p-3 flex justify-between items-center">
      {/* Menu Icon */}
      <div
        className="p-3 text-white rounded-md bg-neutral-200 dark:bg-slate-800 cursor-pointer"
        onClick={toggleMenu}
      >
        <FaBars className="text-2xl text-black dark:text-white" />
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-neutral-50 dark:bg-slate-700 shadow-lg">
          <li className="p-3 border-b border-neutral-300 dark:border-slate-600">
            <a
              href="#experience"
              className="text-black dark:text-white block hover:bg-neutral-200 dark:hover:bg-slate-600"
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </a>
          </li>
          <li className="p-3 border-b border-neutral-300 dark:border-slate-600">
            <a
              href="#projects"
              className="text-black dark:text-white block hover:bg-neutral-200 dark:hover:bg-slate-600"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          </li>
        </ul>
      )}

      {/* Other Navbar Items */}
      <div className="translate-x-12 hidden sm:block">
        <Signature />
      </div>
      <ul className="flex items-center">
        {/* Dark Mode Toggle */}
        <li
          className="bg-neutral-200 dark:bg-slate-800 w-10 p-1 rounded-3xl shadow-inner shadow-gray-600 dark:shadow-black cursor-pointer"
          onClick={toggleDark}
        >
          <BsFillMoonStarsFill className="transition fill-black dark:fill-white dark:translate-x-4" />
        </li>

        {/* Resume Button */}
        <li className="transition ease-in-out hover:scale-95">
          <a
            href={resumeLink || "#"}
            className="bg-gradient-to-br from-blue-900 to-blue-600 text-white px-5 py-2 rounded-md ml-6"
          >
            {loading ? "Loading..." : "Resume"}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
