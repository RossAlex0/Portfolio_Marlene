import ProjectCard from "@/components/ProjectCard/Index";

import projectsData from "@/services/data/projects.json";
import { Projects } from "@/services/types/projects";

import Masonry from "react-masonry-css";
import "@/pages/Home/home.css";

export default function Home() {
  const data: Projects[] = projectsData;

  const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1,
  };

  return (
    <main>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Masonry>
    </main>
  );
}
