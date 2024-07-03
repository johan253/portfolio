"use client";

import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiFillMail} from "react-icons/ai";
import Image from "next/image";
import error from "../assets/error.png"
import Project from "@/components/Project";
import {useEffect, useState} from "react";
import {db} from "@/firebaseConfig";
import { getDocs, collection, getDoc, doc } from "firebase/firestore"

export default function Home() {

    const [darkMode, setDarkMode] = useState(true);
    const [importantImages, setImportantImages] = useState([]);
    const [projects, setProjects] = useState([])
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    // Fetches the projects from the database
    const getProjects = async () => {
        let data = []
        await getDocs(collection(db, "projects")).then((qs) => {
            data = qs.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            setProjects(data)
        });
    }
    // Fetches the important images from the database
    const fetchImportantImages = async () => {
        let data = {};
        await getDocs(collection(db, "images")).then((qs) => {
            data = qs.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            setImportantImages(data);
        });
    }
    useEffect(() => {
        getProjects();
        fetchImportantImages();
    }, [])
    // Sorts the projects by order and maps them to the Project component
    const cards = projects.sort((p1, p2) => p2.order - p1.order).map(p =>
        <Project key={p.id} title={p.name} desc={p.description} url={p.url}
            tags={p.tags} img={p.img ? p.img : error}/>
    );
    const johan = importantImages?.filter((img) => img.id === "johan")[0]?.url || "";
    const resume = importantImages?.filter((img) => img.id === "resume")[0]?.url || "";
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
                        <a href={"#"} className="bg-gradient-to-br from-blue-900 to-blue-600 text-white px-5 py-2 rounded-md ml-6">
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
                <Image className={"scale-75 -translate-y-10 -translate-x-1.5 w-auto h-auto"} src={johan} alt={"Animated Image of Johan"} width={1} height={1}/>
            </div>
        </section>
        <section className={"p-5 bg-neutral-200 dark:bg-slate-800 "}>
            <h1 className={"text-3xl text-left text-black dark:text-white font-bold"}>
                Projects
            </h1>
            {
                cards ? cards : "Projects failed to load... :("
            }
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
