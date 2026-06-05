import { useParams } from "react-router-dom";
import PageNotFound from "../components/PageNotFound";
import { projects } from "../projects";
import { motion } from "motion/react";

const carouselStyle: React.CSSProperties = {
  width: "100%",
  height: "700px",
  overflow: "hidden",
  paddingLeft: "30px",
};

const carouselImageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

function ProjectWindow() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <PageNotFound />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 25 }}
      transition={{ duration: 0.2 }}
    >
      <br />
      <div className="row g-0">
        <div className="col-8">
          <div
            id="myCarousel"
            className="carousel slide"
            data-bs-interval="false"
            style={carouselStyle}
          >
            <div className="carousel-indicators">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                />
              ))}
            </div>

            <div className="carousel-inner">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={image}
                    className="d-block w-100"
                    alt={`${project.title} screenshot ${index + 1}`}
                    style={carouselImageStyle}
                  />
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-4">
          <h1 className="center project-title">{project.title}</h1>
          <p className="">{project.desc}</p>
          <ul className="project-p" style={{ listStyleType: "none" }}>
            <li className="">Development Time: {project.dev_time}</li>
            <li className="">Team Size: {project.team_size}</li>
            <li className="">Tools: {project.tools}</li>
          </ul>
          <br />
          <div className="nav-separator" />
          <br />
          <h1 className="project-title" style={{ paddingLeft: "25px" }}>
            My Involvement
          </h1>
          <p className="">Role: {project.role}</p>
          <p className="">Things I did:</p>
          <ul className="project-p" style={{ listStyleType: "none" }}>
            {project.implementations.map((implementation, index) => (
              <li className="" key={index}>
                - {implementation}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <br />
      <div className="nav-separator" />
      <br />
      <h1 className="project-title center">Retrospective</h1>
      <p>{project.retrospective}</p>
    </motion.div>
  );
}

export default ProjectWindow;
