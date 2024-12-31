"use client";
import type { Experience } from "@prisma/client";

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="overflow-hidden">
      <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2 animate-fade-in">
        {experience.title}
      </h2>
      <p className="text-md text-gray-700 dark:text-gray-300 animate-fade-in">
        {experience.company}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 animate-fade-in ">
        {new Date(experience.startDate).toLocaleDateString()} -{" "}
        {experience.endDate ? new Date(experience.endDate).toLocaleDateString() : "Present"}
      </p>
      <ul className="mt-4 space-y-2">
        {experience.bullets.map((bullet, index) => (
          <li
            key={index}
            className={"flex items-center text-gray-600 dark:text-gray-300 opacity-0 animate-fade-in"}
            style={{ animationDelay: `${index * 400}ms` }}
          >
            <span className="mr-2">&#8226;</span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
