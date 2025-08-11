"use client";
import type { Experience } from "@prisma/client";
import { TypographyH3, TypographyP, TypographyMuted } from "./ui/typography";

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="mt-7 space-y-2">
      {/* Title & Company */}
      <div>
        <TypographyH3>
          {experience.title}
        </TypographyH3>
        <TypographyP>
          {experience.company}
        </TypographyP>
        <TypographyMuted>
          {new Date(experience.startDate).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
          })}{" "}
          –{" "}
          {experience.endDate
            ? new Date(experience.endDate).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
            })
            : "Present"}
        </TypographyMuted>
      </div>

      {/* Bullet Points */}
      <ul className="mt-3 space-y-3 border-l-2 pl-4">
        {experience.bullets.map((bullet, index) => (
          <li
            key={index}
            className="relative animate-fade-in pl-5 leading-relaxed opacity-0"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "forwards",
            }}
          >
            <span className="absolute left-0 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-sky-500" />
            <TypographyP>
              {bullet}
            </TypographyP>
          </li>
        ))}
      </ul>
    </div>
  );
}
