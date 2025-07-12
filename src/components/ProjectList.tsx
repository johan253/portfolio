"use client";

import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@prisma/client";

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [expandAll, setExpandAll] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data.sort((a: Project, b: Project) => b.order - a.order));
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="bg-neutral-100 dark:bg-zinc-900 px-6 py-20 sm:px-12 lg:px-32 transition border-t border-zinc-200 dark:border-zinc-700 ">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white">
            Projects
          </h1>
          <button
            className="text-sm hover:bg-zinc-800 text-white px-4 py-2 rounded-md transition"
            onClick={() => setExpandAll((prev) => !prev)}
          >
            {expandAll ? "Collapse All" : "Expand All"}
          </button>
        </div>
        <div className="flex flex-col gap-16">
          {(loading ? Array.from({ length: 4 }) : projects)?.map((project, index) =>
            loading ? (
              <SkeletonCard key={index} />
            ) : (
              <ProjectCard key={project.id} project={project} expandAll={expandAll} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

function SkeletonCard() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="w-full h-52 bg-zinc-300 dark:bg-zinc-600 rounded-xl" />
      <div className="h-6 w-2/3 bg-zinc-300 dark:bg-zinc-600 rounded" />
      <div className="h-4 w-1/2 bg-zinc-300 dark:bg-zinc-600 rounded" />
    </div>
  );
}
