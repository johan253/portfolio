"use client";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import type { Project } from "@prisma/client";
import { AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { TypographyH4, TypographyP } from "./ui/typography";
import { Badge } from "./ui/badge";

export default function ProjectCard({
  project,
  values,
}: {
  project: Project,
  values?: string[]
}) {

  return (
    <AccordionItem value={project.name} className="transition-all">
      <div className="flex items-center justify-between gap-3">
        <AccordionTrigger>
          <TypographyH4 className="text-nowrap">
            {project.name}
          </TypographyH4>
        </AccordionTrigger>
        <TypographyP className={`line-clamp-1 animate-fade-in text-sm transition-transform ${values?.includes(project.name) ? "hidden" : ""}`}>
          {project.description}
        </TypographyP>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          <AiFillGithub className="size-6 transition hover:text-sky-500" />
        </a>
      </div>
      <AccordionContent>
        <TypographyP>
          {project.description}
        </TypographyP>

        <div className="flex flex-wrap gap-4">
          {project.tags.map((tag, i) => (
            <Badge
              key={i}
              className="animate-fade-in bg-sky-500 opacity-0 transition-transform hover:bg-sky-500"
              style={{ animationDelay: `${i * 200 + 200}ms` }}
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex w-full items-center justify-center p-4">
          <Image
            loading="eager"
            fetchPriority="high"
            src={project.img || ""}
            alt={project.name}
            className="h-64 w-fit rounded-xl object-cover transition-transform duration-300"
            width={640}
            height={256}
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
