"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home({children}: {children: React.ReactNode}) {
    const [resume, setResume] = useState<string>("");
    const [johan, setJohan] = useState<string>("");
    const [darkMode, setDarkMode] = useState<boolean>(true);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    useEffect(() => {
        const fetchData = async () => {
            setJohan(await fetch("/api/images/johan").then(res => res.json()));
            setResume(await fetch("/api/images/resume").then(res => res.json()));
        }
        fetchData();
    }, [])
    // Sorts the projects by order and maps them to the Project component
    // const cards = projects.sort((p1, p2) => p2.order - p1.order).map(p =>
    //     <ProjectCard key={p.id} project={p}/>
    // );
    return (
    <main className={darkMode ? "dark" : ""}>
        <section className="transition bg-neutral-200 dark:bg-slate-800">
            <Navbar toggleDark={toggleDarkMode} resumeLink={resume}/>
            <div className="text-center">
                <p className="font-mono text-black dark:text-white">Hi, my name is</p>
                <h2 className="text-5xl bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent p-2 font-bold animate-gradient-wave">Johan Hernandez</h2>
                <h3 className="text-2xl p-2 text-black dark:text-white">Aspiring Software Engineer</h3>
                <p className="text-md p-5 leading-8 text-gray-600 dark:text-gray-400 ">
                    I am a Computer Science student at the University of Washington and Passionate about programming and solving problems
                    alongside others. I love to learn new things every day and facing different kinds of challenges along the way.
                    Connect with me and get to know me better!
                </p>
            </div>
            <div className="text-3xl flex justify-center gap-14 py-3 text-gray-700 dark:text-gray-400">
                <a href={"https://www.linkedin.com/in/johan253/"} target={"_blank"} rel={"noopener noreferrer"}>
                    <AiFillLinkedin className={"transition hover:scale-105 hover:fill-blue-600"}/>
                </a>
                <a href={"https://github.com/johan253"} target={"_blank"} rel={"noopener noreferrer"}>
                    <AiFillGithub className={"transition hover:scale-105 hover:fill-black"}/>
                </a>
                <a href={"mailto:johannjo2000@gmail.com"}>
                    <AiFillMail className={"transition hover:scale-105 hover:fill-red-600"}/>
                </a>
            </div>
            <div className={"relative mx-auto bg-gradient-to-b from-blue-900 rounded-full w-80 h-80 mt-4"}>
                <Image className={"scale-75 -translate-y-10 -translate-x-1.5 w-auto h-auto"} src={johan} alt={"Animated Image of Johan"} width={1} height={1}/>
            </div>
        </section>
        {
            children
        }
        <Footer/>
    </main>
);
}
