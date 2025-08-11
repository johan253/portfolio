"use client";
import { useState, useEffect } from "react";
import type { Experience } from "@prisma/client";
import ExperienceCard from "./ExperienceCard";
import { Skeleton } from "./ui/skeleton";
import { TypographyH1 } from "./ui/typography";

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
    <div className="mx-auto max-w-7xl">
      <TypographyH1>
        Experience
      </TypographyH1>
      <div className="grid grid-cols-1">
        {(loading ? Array.from({ length: 2 }) : experiences).map((exp, index) =>
          loading ? (
            <SkeletonCard key={index} />
          ) : (
            <ExperienceCard key={(exp as Experience).id} experience={exp as Experience} />
          )
        )}
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 p-6">
      <Skeleton className="h-6 w-2/3 rounded" />
      <Skeleton className="h-4 w-1/3 rounded" />
      <Skeleton className="h-4 w-1/4 rounded" />
      <div className="space-y-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton
            key={i}
            className="h-3 rounded"
          />
        ))}
      </div>
    </div>
  );
}
