"use client";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Signature from "./Signature";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Switch } from "./ui/switch";

const Navbar = ({ theme, toggleDark, resumeLink, loading }: { theme: string, toggleDark: () => void, resumeLink: string, loading: boolean }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const openResume = () => {
    if (resumeLink) {
      window.open(resumeLink, "_blank");
    }
  }

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b px-4 py-3 backdrop-blur-md transition-all sm:px-6">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between sm:justify-end">
        {/* Menu Toggle */}
        <DropdownMenu onOpenChange={setMenuOpen}>
          <DropdownMenuTrigger>
            <FaBars
              className={`absolute inset-0 text-2xl transition-all duration-200 ease-out sm:hidden
          ${menuOpen ? "rotate-90 scale-90 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
            />
            <FaTimes
              className={`absolute inset-0 text-2xl transition-all duration-200 ease-out sm:hidden
          ${menuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-90 opacity-0"}`}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleScroll("experience")}>
              Experience
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleScroll("projects")}>
              Projects
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Signature Logo */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 sm:block">
          <Signature theme={theme} />
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <Switch
            onCheckedChange={toggleDark}
            checked={theme === "dark"}
          >
          </Switch>
          {
            theme === "dark" ? (
              <BsSunFill className="text-xl" aria-label="Light mode" />
            ) : (
              <BsFillMoonStarsFill className="text-xl" aria-label="Dark mode" />
            )
          }

          {/* Resume */}
          <Button
            className="bg-blue-600 text-white hover:bg-blue-700"
            onClick={openResume}
          >
            {loading ? "Loading..." : "Resume"}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
