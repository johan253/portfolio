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
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="border-t border-zinc-200 bg-neutral-100 px-6 py-20 transition dark:border-zinc-700 dark:bg-zinc-900 sm:px-12 lg:px-32 ">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center justify-between">
          <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white sm:text-5xl">
            Projects
          </h1>
          <button
            className="rounded-md px-4 py-2 text-sm text-white transition hover:bg-zinc-800"
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
              <ProjectCard key={(project as Project).id} project={project as Project} expandAll={expandAll} />
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
      <div className="h-52 w-full rounded-xl bg-zinc-300 dark:bg-zinc-600" />
      <div className="h-6 w-2/3 rounded bg-zinc-300 dark:bg-zinc-600" />
      <div className="h-4 w-1/2 rounded bg-zinc-300 dark:bg-zinc-600" />
    </div>
  );
}
