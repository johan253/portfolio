"use client";

import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@prisma/client";
import { TypographyH1 } from "./ui/typography";
import { Skeleton } from "./ui/skeleton";
import { Accordion } from "./ui/accordion";
import { Button } from "./ui/button";

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [expandAll, setExpandAll] = useState(false);
  const [opened, setOpened] = useState<string[]>([]);

  const handleExpandAll = () => {
    if (expandAll) {
      setOpened([]);
    } else {
      setOpened(projects?.map((project) => project.name) || []);
    }
    setExpandAll(!expandAll);
  }

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch {
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex items-center justify-between">
        <TypographyH1>
          Projects
        </TypographyH1>
        <Button
          variant="ghost"
          onClick={handleExpandAll}
        >
          {expandAll ? "Collapse All" : "Expand All"}
        </Button>
      </div>
      <Accordion type="multiple" value={opened} onValueChange={setOpened}>
        {(loading ? Array.from({ length: 4 }) : projects)?.map((project, index) =>
          loading ? (
            <SkeletonCard key={index} />
          ) : (
            <ProjectCard key={(project as Project).id} project={project as Project} values={opened} />
          )
        )}
      </Accordion>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="my-8 flex items-center justify-center gap-4 space-y-2">
      <Skeleton className="h-6 w-1/4 rounded" />
      <Skeleton className="h-4 w-full rounded" />
      <Skeleton className="size-6 rounded-full" />
    </div>
  );
}
