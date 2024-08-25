import React from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@prisma/client";
import prisma from "@/lib/prisma";

export default async function ProjectList() {
    // const projects: Project[] = await fetch("http://localhost:3000/api/projects", {
    //     next: {
    //         revalidate: 60
    //     }
    // }).then(res => res.json());
    const projects: Project[] = await prisma.project.findMany();
    const cards = projects.sort((p1, p2) => p2.order - p1.order).map(p =>
        <ProjectCard key={p.id} project={p}/>
    );
    console.log({projects});
    return (
        <section className={"p-10 bg-neutral-200 dark:bg-slate-800 "}>
            <h1 className={"text-3xl text-left text-black dark:text-white font-bold"}>
                Projects
            </h1>
            {
                cards ? cards : <p>Loading...</p>
            }
        </section>
    );
}