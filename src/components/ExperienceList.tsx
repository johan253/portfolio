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
    <section className="bg-neutral-200 dark:bg-slate-800 text-black dark:text-white p-10 min-h">
      <h1 className="text-4xl font-bold mb-6 text-center">Experience</h1>
      {loading ? (
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {Array.from({ length: 2 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
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
    <div className="bg-white dark:bg-slate-800 shadow-slate-900 shadow-lg rounded-2xl p-6 animate-pulse">
      <div className="h-6 bg-gray-300 dark:bg-slate-700 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 dark:bg-slate-700 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-slate-700 rounded w-1/2 mb-4"></div>
      <div className="space-y-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-4 bg-gray-300 dark:bg-slate-700 rounded w-full"
          ></div>
        ))}
      </div>
    </div>
  );
}
