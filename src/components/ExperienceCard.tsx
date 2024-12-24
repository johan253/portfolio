import type { Experience } from "@prisma/client";

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="bg-white dark:bg-slate-800 shadow-slate-900 shadow-lg rounded-2xl p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
      <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{experience.title}</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">{experience.company}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {new Date(experience.startDate).toLocaleDateString()} -{" "}
        {experience.endDate ? new Date(experience.endDate).toLocaleDateString() : "Present"}
      </p>
      <ul className="mt-4 space-y-2">
        {experience.bullets.map((bullet, index) => (
          <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
            <span className="mr-2">&#8226;</span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
