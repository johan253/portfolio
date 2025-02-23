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
  const [johan, setJohan] = useState<string>("https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-loading-icon-vector-transparent-png-image_5687537.png");
  const [loading, setLoading] = useState<boolean>(true);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    const fetchData = async () => {
      setJohan(await fetch("/api/images/johan").then(res => res.json()));
      setResume(await fetch("/api/images/resume").then(res => res.json()));
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <main className={darkMode ? "dark" : ""}>
      <section className="transition bg-neutral-200 dark:bg-slate-800 pt-24 pb-8">
        <Navbar toggleDark={toggleDarkMode} resumeLink={resume} loading={loading} />
        <div className="text-center">
          <p className="font-mono text-black dark:text-white">Hi, my name is</p>
          <h1 className="typewriter max-w-fit text-5xl bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 p-2 font-bold animate-gradient-wave">
            Johan Hernandez
          </h1>
          <h3 className="text-2xl p-2 text-black dark:text-white">
            Software Engineer
          </h3>
          <p className="text-md p-12 max-w-screen-xl mx-auto leading-8 text-gray-600 dark:text-gray-400">
            I am a Computer Science student at the University of Washington and passionate about programming and solving problems alongside others. I
            love to learn new things every day and face different kinds of challenges along the way. Connect with me and get to know me better!
          </p>
        </div>
        <div className="text-3xl flex justify-center gap-14 py-3 text-gray-700 dark:text-gray-400">
          <a href={"https://www.linkedin.com/in/johan253/"} target={"_blank"} rel={"noopener noreferrer"}>
            <AiFillLinkedin className={"transition hover:scale-105 hover:fill-blue-600"} />
          </a>
          <a href={"https://github.com/johan253"} target={"_blank"} rel={"noopener noreferrer"}>
            <AiFillGithub className={"transition hover:scale-105 hover:fill-black"} />
          </a>
          <a href={"mailto:johannjo2000@gmail.com"}>
            <AiFillMail className={"transition hover:scale-105 hover:fill-red-600"} />
          </a>
        </div>
        <div className={"relative mx-auto bg-gradient-to-b from-blue-900 rounded-full w-40 h-40 mt-12"}>
          <Image
            className={`scale-75 -translate-y-6 -translate-x-1.5 w-auto h-auto ${loading ? "animate-spin" : ""}`}
            src={johan}
            alt={"Animated Image of Johan"}
            width={1}
            height={1}
          />
        </div>
      </section>
      <section id="experience">
        <ExperienceList />
      </section>
      <section id="projects">
        <ProjectList />
      </section>
      <Footer />
    </main>
  );
  
}
