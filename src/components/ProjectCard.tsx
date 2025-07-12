"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AiFillGithub, AiOutlineDown } from "react-icons/ai";
import type { Project } from "@prisma/client";

export default function ProjectCard({
  project,
  expandAll,
}: {
  project: Project;
  expandAll?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Sync internal state with expandAll toggle
  useEffect(() => {
    setExpanded(expandAll ?? false);
  }, [expandAll]);

  return (
    <div className="transition-all">
      <div
        onClick={() => setExpanded((prev) => !prev)}
        className="flex cursor-pointer select-none items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            {project.name}
          </h2>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-zinc-600 hover:text-sky-500 dark:text-zinc-400"
          >
            <AiFillGithub className="size-6 transition hover:text-sky-500" />
          </a>
        </div>
        <AiOutlineDown
          className={`size-5 transition-transform duration-300 ${expanded ? "rotate-180" : "rotate-0"
            }`}
        />
      </div>

      <p
        className={`mt-2 text-zinc-600 transition-transform duration-300 dark:text-zinc-300 ${expanded ? "" : "line-clamp-2"
          }`}
      >
        {project.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="rounded-full bg-sky-500 px-3 py-1 text-xs font-medium text-white"
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        ref={contentRef}
        style={{
          maxHeight: expanded ? contentRef.current?.scrollHeight : 0,
        }}
        className={`flex justify-center overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <div className="mt-6">
          <div className="mb-4 w-fit overflow-hidden rounded-2xl">
            <Image
              src={project.img || ""}
              alt={project.name}
              className="h-64 w-full rounded-xl object-cover transition-transform duration-300 hover:scale-105"
              width={640}
              height={256}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
