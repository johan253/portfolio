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
      .then((data) => setExperiences(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="relative bg-neutral-100 dark:bg-zinc-900 text-zinc-900 dark:text-white px-6 py-20 sm:px-12 lg:px-32 border-t border-zinc-200 dark:border-zinc-700">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-12">
          Experience
        </h1>
        <div className="grid grid-cols-1 gap-12">
          {(loading ? Array.from({ length: 2 }) : experiences).map((exp, index) =>
            loading ? (
              <SkeletonCard key={index} />
            ) : (
              <ExperienceCard key={(exp as undefined | Experience).id ?? index} experience={exp as Experience} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 p-6 shadow-md bg-white dark:bg-zinc-800 animate-pulse">
      <div className="h-6 bg-zinc-300 dark:bg-zinc-700 rounded w-2/3 mb-4" />
      <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-1/3 mb-2" />
      <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-1/4 mb-4" />
      <div className="space-y-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-3 bg-zinc-300 dark:bg-zinc-700 rounded"
          />
        ))}
      </div>
    </div>
  );
}
