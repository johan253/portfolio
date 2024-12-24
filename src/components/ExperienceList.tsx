"use client";
import { useState, useEffect } from "react";
import type { Experience } from "@prisma/client";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceList() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/experience")
      .then((response) => response.json())
      .then((data) => {
        setExperiences(data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-neutral-200 dark:bg-slate-800 text-black dark:text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Experience</h1>
      {loading ? (
        <div className="space-y-10">
          {Array.from({ length: 2 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <div className="space-y-10">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      )}
    </section>
  );
}

function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="h-6 bg-gray-300 dark:bg-slate-700 rounded mb-4 w-1/2"></div>
      <div className="h-4 bg-gray-300 dark:bg-slate-700 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-300 dark:bg-slate-700 rounded mb-4 w-1/3"></div>
      <div className="space-y-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="h-4 bg-gray-300 dark:bg-slate-700 rounded w-full"
          ></div>
        ))}
      </div>
    </div>
  );
}
