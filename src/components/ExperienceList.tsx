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

  const expCards = experiences.map((exp) => <ExperienceCard key={exp.id} experience={exp} />);

  return (
    <section>
      <h1>Experience</h1>
      {loading ? <p>Loading...</p> : expCards}
    </section>
  );
}