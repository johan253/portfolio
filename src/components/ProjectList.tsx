"use client";

import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@prisma/client";

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data.sort((p1: Project, p2: Project) => p2.order - p1.order));
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="p-10 pt-0 bg-neutral-200 dark:bg-slate-800">
      <h1 className="text-3xl text-left text-black dark:text-white font-bold">
        Projects
      </h1>
      {loading ? (
        <div className="grid md:grid-cols-1 2xl:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-1 2xl:grid-cols-2 animate-fade-in">
          {projects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-slate-700 shadow-lg rounded-3xl p-6 m-6 animate-pulse">
      <div className="h-6 bg-gray-300 dark:bg-slate-600 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 dark:bg-slate-600 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-300 dark:bg-slate-600 rounded mb-4 w-1/2"></div>
      <div className="w-full h-40 bg-gray-300 dark:bg-slate-600 rounded"></div>
    </div>
  );
}
