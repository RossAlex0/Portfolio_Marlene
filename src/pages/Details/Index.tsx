import { useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { Projects } from "@/services/types/projects";
import projectsData from "@/services/data/projects.json";

import "@/pages/Details/details.css";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState<Projects | undefined>();

  useEffect(() => {
    const result = projectsData.find((project) => project.id === id);

    setProject(result);
  }, [id]);

  return (
    <section className="detail">
      {project ? (
        <>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <img src={project.screen} alt={project.name} />
        </>
      ) : (
        <>
          <p className="txtErr">Error 404 - Not found</p>
        </>
      )}
      <button
        type="button"
        className="detail_btn"
        onClick={() => navigate("/")}
      >
        Retour à tous les projets
      </button>
    </section>
  );
}
