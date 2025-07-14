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
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (typeof window !== "undefined") {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      localStorage.setItem("hasVisited", "true");
      setTimeout(() => {
        setShowPopup(true);
      }, 5000);
    }
  }

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
      <section className="bg-neutral-100 pb-16 pt-24 transition dark:bg-zinc-900">
        <Navbar darkMode={darkMode} toggleDark={toggleDarkMode} resumeLink={resume} loading={loading} />

        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
            Hi, my name is
          </p>

          <h1 className="typewriter animate-gradient-wave mb-4 max-w-fit bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl">
            Johan Hernandez
          </h1>

          <h2 className="mb-6 text-2xl text-zinc-700 dark:text-zinc-300">
            Software Engineer
          </h2>

          <p className="text-md mb-10 leading-relaxed text-zinc-600 dark:text-zinc-400">
            I&apos;m a Computer Science student at the University of Washington with a passion for building things and solving meaningful problems. I enjoy collaborating with others and tackling new challenges while continuously learning and improving. Let&apos;s connect!
          </p>

          <div className="mb-10 flex justify-center gap-6 text-2xl text-zinc-600 dark:text-zinc-400">
            <a
              href="https://www.linkedin.com/in/johan253/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin className="transition-transform hover:scale-110 hover:text-blue-600" />
            </a>
            <a
              href="https://github.com/johan253"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <AiFillGithub className="transition-transform hover:scale-110 hover:text-black dark:hover:text-white" />
            </a>
            <a href="mailto:johannjo2000@gmail.com" aria-label="Email">
              <AiFillMail className="transition-transform hover:scale-110 hover:text-red-500" />
            </a>
          </div>

          {!loading && (
            <div className="mx-auto size-32 overflow-hidden rounded-full border-4 border-zinc-300 dark:border-zinc-700">
              <Image
                src={johan}
                alt="Photo of Johan"
                width={128}
                height={128}
                className="h-full w-fit -translate-y-1 translate-x-1 object-cover"
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
      {/* Popup for first-time visitors */}
      {
        showPopup && (
          <div className="fixed bottom-6 left-6 z-50 flex animate-fade-in items-center justify-center gap-4 rounded-md bg-zinc-800 p-4 text-white shadow-lg shadow-black transition-transform">
            <div className="flex flex-col items-start justify-center">
              <p>
                Get a quick summary with the <strong>curl</strong> command:
              </p>
              <code>
                <pre className="mt-2 flex gap-2 rounded-md bg-zinc-900 p-2">
                  <p>
                    &gt;
                  </p>
                  <p className="text-green-500">
                    curl
                  </p>
                  <p>
                    -L johanhernandez.com
                  </p>
                </pre>
              </code>
            </div>
            <button
              className="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        )
      }
    </main >
  );
}
