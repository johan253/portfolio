"use client";
import type { Experience } from "@prisma/client";

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="space-y-2">
      {/* Title & Company */}
      <div>
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
          {experience.title}
        </h2>
        <p className="text-md text-zinc-600 dark:text-zinc-400">
          {experience.company}
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
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
        </p>
      </div>

      {/* Bullet Points */}
      <ul className="mt-3 space-y-2 pl-4 border-l-2 border-zinc-300 dark:border-zinc-700">
        {experience.bullets.map((bullet, index) => (
          <li
            key={index}
            className="relative text-zinc-700 dark:text-zinc-300 leading-relaxed pl-5 opacity-0 animate-fade-in"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "forwards",
            }}
          >
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-sky-500" />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
