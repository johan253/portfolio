import type { Experience } from "@prisma/client";

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div>
      <h2>{experience.title}</h2>
      <p>{experience.company}</p>
      <p>{experience.startDate.toString()}</p>
      <p>{experience.endDate.toString()}</p>
      <ul className="">
        {
          experience.bullets.map((bullet, index) => {
            return <li key={index}>{bullet}</li>;
          })
        }
      </ul>
      
    </div>
  );
}