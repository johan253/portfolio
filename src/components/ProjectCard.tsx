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
        className="flex items-center justify-between cursor-pointer select-none"
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
            className="text-zinc-600 dark:text-zinc-400 hover:text-sky-500"
          >
            <AiFillGithub className="w-6 h-6 hover:text-sky-500 transition" />
          </a>
        </div>
        <AiOutlineDown
          className={`w-5 h-5 transition-transform duration-300 ${expanded ? "rotate-180" : "rotate-0"
            }`}
        />
      </div>

      <p
        className={`mt-2 text-zinc-600 dark:text-zinc-300 transition-transform duration-300 ${expanded ? "" : "line-clamp-2"
          }`}
      >
        {project.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-sky-500 text-white text-xs font-medium px-3 py-1 rounded-full"
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
        className={`overflow-hidden transition-all duration-500 ease-in-out flex justify-center`}
      >
        <div className="mt-6">
          <div className="w-fit rounded-2xl overflow-hidden mb-4">
            <Image
              src={project.img || ""}
              alt={project.name}
              className="w-full h-64 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
              width={640}
              height={256}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
