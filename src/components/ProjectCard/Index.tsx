import { Projects } from "@/services/types/projects";

import "@/components/ProjectCard/projectCard.css";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({
  project,
}: {
  project: Omit<Projects, "name" | "description" | "screen">;
}) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/project/${project.id}`)}>
      <img src={`${project.thumb}`} alt="lolo" />
    </div>
  );
}
