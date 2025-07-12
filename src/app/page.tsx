"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExperienceList from "@/components/ExperienceList";
import ProjectList from "@/components/ProjectList";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [resume, setResume] = useState<string>("");
  const [johan, setJohan] = useState<string>(
    "https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-loading-icon-vector-transparent-png-image_5687537.png"
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const fetchData = async () => {
      setJohan(await fetch("/api/images/johan").then((res) => res.json()));
      setResume(await fetch("/api/images/resume").then((res) => res.json()));
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <main className={darkMode ? "dark" : ""}>
      {/* Hero / Intro Section */}
      <section className="bg-neutral-100 dark:bg-zinc-900 pt-24 pb-16 transition">
        <Navbar darkMode={darkMode} toggleDark={toggleDarkMode} resumeLink={resume} loading={loading} />

        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
            Hi, my name is
          </p>

          <h1 className="typewriter max-w-fit text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 text-transparent bg-clip-text animate-gradient-wave mb-4">
            Johan Hernandez
          </h1>

          <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 mb-6">
            Software Engineer
          </h2>

          <p className="text-md text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
            I&apos;m a Computer Science student at the University of Washington with a passion for building things and solving meaningful problems. I enjoy collaborating with others and tackling new challenges while continuously learning and improving. Let&apos;s connect!
          </p>

          <div className="flex justify-center gap-6 text-zinc-600 dark:text-zinc-400 text-2xl mb-10">
            <a
              href="https://www.linkedin.com/in/johan253/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin className="hover:text-blue-600 transition-transform hover:scale-110" />
            </a>
            <a
              href="https://github.com/johan253"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <AiFillGithub className="hover:text-black dark:hover:text-white transition-transform hover:scale-110" />
            </a>
            <a href="mailto:johannjo2000@gmail.com" aria-label="Email">
              <AiFillMail className="hover:text-red-500 transition-transform hover:scale-110" />
            </a>
          </div>

          {!loading && (
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-zinc-300 dark:border-zinc-700">
              <Image
                src={johan}
                alt="Photo of Johan"
                width={128}
                height={128}
                className="w-fit h-full translate-x-1 -translate-y-1 object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <ExperienceList />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectList />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
