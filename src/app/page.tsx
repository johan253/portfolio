import Home from "./Home";
import ProjectList from "@/components/ProjectList";
import ExperienceList from "@/components/ExperienceList";

export default function Page() {
  return (
    <>
      <Home>
        <ExperienceList/>
        <ProjectList/>
      </Home>
    </>
  );
}