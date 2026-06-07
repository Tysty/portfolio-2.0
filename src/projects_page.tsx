import ProjectCard from "./components/ProjectCard";
import { projects } from "./projects";
import { motion } from "motion/react";

function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 25 }}
      transition={{ duration: 0.2 }}
    >
      <br></br>
      <h1 className=" home-title center">
        <strong>Projects</strong>
      </h1>
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
    </motion.div>
  );
}
export default ProjectsPage;
