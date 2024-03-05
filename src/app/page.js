"use client";

import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiFillMail} from "react-icons/ai";
import Image from "next/image";
import johan from "../assets/johan.png";
import Project from "@/app/Project";
import rateMyCoursesPreview from "../assets/rate-my-courses-dev.png"
import projection from "../assets/projection.png";
import tetris from "../assets/tetris.png";
import portfolio from "../assets/portfolio.png";
import {useState} from "react";

export default function Home() {
    const ratemycoursesTags = [
        {name: "React"},
        {name: "Next.js"},
        {name: "TailwindCSS"},
        {name: "Firebase"},
    ]
    const portfolioTags = [
        {name: "React"},
        {name: "TailwindCSS"},
        {name: "Next.js"},
    ]
    const projectionTags = [
        {name: "JavaFX"},
        {name: "SQLite"},
        {name: "CSS"}
    ]
    const tetrisTags = [
        {name: "Java"},
        {name: "MVC"},
        {name: "Observer Design Pattern"}
    ]

    const [darkMode, setDarkMode] = useState(true);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
  return (
    <main className={darkMode ? "dark" : ""}>
      <section className="transition bg-neutral-200 dark:bg-slate-800">
          <nav className="mb-10 flex justify-between p-5 w-full">
              <div className={"bg-neutral-50 shadow-md shadow-neutral-300 p-3 text-white rounded-md dark:bg-slate-700 dark:shadow-slate-950"}>
                  <h1 className={"bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent font-bold"}>
                      J H
                  </h1>
                </div>
              <ul className="flex items-center">
                  <li className={"bg-neutral-200 dark:bg-slate-800 w-10 p-1 rounded-3xl shadow-inner shadow-gray-600 dark:shadow-black cursor-pointer"}
                      onClick={()=>toggleDarkMode()}>
                      <BsFillMoonStarsFill className="transition fill-black dark:fill-white dark:translate-x-4"/>
                  </li>
                  <li className={"transition ease-in-out hover:scale-95"}>
                      <a href="#" className="bg-gradient-to-br from-blue-900 to-blue-600 text-white px-5 py-2 rounded-md ml-6">
                          Resume
                      </a>
                  </li>
              </ul>
          </nav>
          <div className="text-center">
              <p className="font-mono text-black dark:text-white">Hi, my name is</p>
              <h2 className="text-5xl bg-gradient-to-b from-blue-700 to-blue-400 bg-clip-text text-transparent p-2 font-bold">Johan Hernandez</h2>
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
            <Image className={"scale-75 -translate-y-10 -translate-x-1.5"} src={johan} alt={"Animated Image of Johan"}/>
          </div>
      </section>
        <section className={"p-5 bg-neutral-200 dark:bg-slate-800 "}>
            <h1 className={"text-3xl text-left text-black dark:text-white font-bold"}>
                Projects
            </h1>
            <Project img={rateMyCoursesPreview} title={"Rate My Courses (coming soon)"} url={"https://github.com/johan253/rate-my-courses"}
                     desc={"Currently under development, this website will allow students to rate their courses and write reviews " +
                         "similarly to Rate My Professor, but for courses! This will assist students in picking out the best core classes, " +
                         "required electives, or classes just for fun! Data is stored in a Firestore Database using the Firebase SDK to " +
                         "save reviews and display them for users."}
                     tags={ratemycoursesTags}/>
            <Project img={portfolio} title={"Portfolio"} url={"https://github.com/johan253/portfolio"}
                     desc={"The website that you are currently on was built using Next.js and React, with " +
                         "TailwindCSS for styling. Simple yet beautiful and responsive UI to fully capture " +
                         "your attention and introduce myself effectively."}
                     tags={portfolioTags}/>
            <Project img={projection} title={"PROJECTion"} url={"https://github.com/johan253/projection"}
                     desc={"Desktop application that allows users to manage projects and track tasks associated with all your projects. " +
                         "Local SQLite database and simple GUI allows users to easily organize and track completion " +
                         "towards projects."}
                     tags={projectionTags}/>
            <Project img={tetris} title={"Tetris Clone"} url={"https://github.com/johan253/tetris-clone"}
                     desc={"Fully functioning Tetris clone featuring responsive gameplay and various customizable GUI elements. " +
                         "Collaborated with class to meet deadlines and create a MVC structure to allow communication with " +
                         "front end and back end."}
                     tags={tetrisTags}/>
        </section>
        <footer className={"p-5 pt-12 bg-gradient-to-b dark:from-slate-800 from from-neutral-200 via-black to-black"}>
            <div className={"text-xs text-center"}>
                This website was made and is maintained by Johan Hernandez.
                <br/>
                For any questions, comments, or concerns, please email me at:
                <br/>
                <a href={"mailto:johannjo2000@gmail.com"} className={"text-gray-400"}>
                    johannjo2000@gmail.com
                </a>
            </div>
        </footer>
    </main>
  );
}
