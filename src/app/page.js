"use client";

import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiFillMail} from "react-icons/ai";
import Image from "next/image";
import johan from "../assets/johan.png";
import Project from "@/app/Project";
import projection from "../assets/projection.png";
import tetris from "../assets/tetris.png";
import {useState} from "react";


export default function Home() {
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
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
  return (
    <main className={darkMode ? "dark" : ""}>
      <section className="bg-neutral-200 dark:bg-slate-800">
          <nav className="mb-10 flex justify-between p-5 w-full">
              <div className={"bg-neutral-50 shadow-md shadow-neutral-300 p-3 text-white rounded-md dark:bg-slate-700 dark:shadow-slate-950"}>
                  <h1 className={"bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent font-bold"}>
                      J H
                  </h1>
                </div>
              <ul className="flex items-center">
                  <li>
                      <BsFillMoonStarsFill className="fill-black dark:fill-white cursor-pointer" onClick={()=>toggleDarkMode()}/>
                  </li>
                  <li>
                      <a href="#" className="bg-gradient-to-br from-blue-900 to-blue-600 text-white px-5 py-2 rounded-md ml-8">
                          Resume
                      </a>
                  </li>
              </ul>
          </nav>
          <div className="text-center">
              <p className="font-mono text-black dark:text-white">Hi, my name is</p>
              <h2 className="text-5xl bg-gradient-to-b from-blue-700 to-blue-400 bg-clip-text text-transparent p-2">Johan Hernandez</h2>
              <h3 className="text-2xl p-2 text-black dark:text-white">Aspiring Software Engineer</h3>
              <p className="text-md p-5 leading-8 text-gray-600 dark:text-gray-400">
                  Computer Science Student at UWT. Passionate about programming and solving problems.
                  Connect with me and get to know me better!
              </p>
          </div>
          <div className="text-3xl flex justify-center gap-14 py-3 text-gray-700 dark:text-gray-400">
              <a href={"https://www.linkedin.com/in/johan253/"} target={"_blank"} rel={"noopener noreferrer"}>
                  <AiFillLinkedin/>
              </a>
              <a href={"https://github.com/johan253"} target={"_blank"} rel={"noopener noreferrer"}>
                  <AiFillGithub/>
              </a>
              <a href={"mailto:johannjo2000@gmail.com"}>
                  <AiFillMail/>
              </a>
          </div>
          <div className={"relative mx-auto bg-gradient-to-b from-blue-900 rounded-full w-80 h-80 mt-20"}>
            <Image className={"scale-75"} src={johan} alt={"Animated Image of Johan"} layout={"fill"} objectFit={"cover"} />
          </div>
      </section>
        <section className={" p-5 bg-neutral-200 dark:bg-slate-800"}>
            <h1 className={"text-3xl text-center text-black dark:text-white"}>
                Projects
            </h1>
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
    </main>
  );
}
