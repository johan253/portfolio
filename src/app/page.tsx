import Home from "./Home";
import ProjectList from "@/components/ProjectList";
import ExperienceList from "@/components/ExperienceList";

export const dynamic = "force-dynamic";

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