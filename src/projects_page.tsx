import ProjectCard from "./components/ProjectCard";
import { projects } from "./projects";

function ProjectsPage() {
  return (
    <div>
      <br></br>
      <h1 className="center home-title">Projects</h1>
      <h3 className="center home-text">
        Here are some of the projects I have worked on.
      </h3>
      {Array.from({ length: Math.ceil(projects.length / 3) }, (_, i) =>
        projects.slice(i * 3, i * 3 + 3),
      ).map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="center h-group"
          style={{ marginRight: "45px" }}
        >
          {row.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.thumbnail}
              desc={project.desc}
              link={project.id}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
export default ProjectsPage;
