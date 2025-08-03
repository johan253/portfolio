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
    <section className="relative border-t border-zinc-200 bg-neutral-100 px-6 py-20 text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white sm:px-12 lg:px-32">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Experience
        </h1>
        <div className="grid grid-cols-1 gap-12">
          {(loading ? Array.from({ length: 2 }) : experiences).map((exp, index) =>
            loading ? (
              <SkeletonCard key={index} />
            ) : (
              <ExperienceCard key={(exp as Experience).id} experience={exp as Experience} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-2xl border border-zinc-200 bg-white p-6 shadow-md dark:border-zinc-700 dark:bg-zinc-800">
      <div className="mb-4 h-6 w-2/3 rounded bg-zinc-300 dark:bg-zinc-700" />
      <div className="mb-2 h-4 w-1/3 rounded bg-zinc-300 dark:bg-zinc-700" />
      <div className="mb-4 h-4 w-1/4 rounded bg-zinc-300 dark:bg-zinc-700" />
      <div className="space-y-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-3 rounded bg-zinc-300 dark:bg-zinc-700"
          />
        ))}
      </div>
    </div>
  );
}
