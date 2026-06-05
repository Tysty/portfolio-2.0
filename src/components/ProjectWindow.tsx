import { useParams } from "react-router-dom";
import { useState } from "react";
import PageNotFound from "../components/PageNotFound";
import { projects } from "../projects";
import { motion } from "motion/react";
import * as images from "../assets";

const carouselStyle: React.CSSProperties = {
  width: "100%",
  height: "750px",
  overflow: "hidden",
  paddingLeft: "30px",
};

const carouselImageStyle: React.CSSProperties = {
  width: "100%",
  height: "735px",
  objectFit: "cover",
};

function ProjectWindow() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <PageNotFound />;

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 25 }}
      transition={{ duration: 0.2 }}
    >
      <br />
      <br />
      <div className="row g-0">
        <div className="col-8">
          <div
            id="projectCarousel"
            className="carousel slide rounded-3"
            data-bs-interval="false"
            style={carouselStyle}
          >
            <div className="carousel-inner">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  {image.endsWith(".mp4") ? (
                    <video
                      className="d-block w-100"
                      controls
                      style={{ objectFit: "contain" }}
                    >
                      <source src={image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={image}
                      className="d-block w-100"
                      alt={`${project.title} screenshot ${index + 1}`}
                      style={carouselImageStyle}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide="prev"
              className="carousel-button"
              onClick={() =>
                setActiveIndex(
                  activeIndex <= 0
                    ? project.images.length - 1
                    : activeIndex - 1,
                )
              }
            >
              <img src={images.ArrowLeft} />
              <span className="visually-hidden">Previous</span>
            </motion.button>
            <p className="center" style={{ fontSize: "30px" }}>
              {activeIndex + 1}/{project.images.length}
            </p>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide="next"
              className="carousel-button"
              onClick={() =>
                setActiveIndex(
                  activeIndex >= project.images.length - 1
                    ? 0
                    : activeIndex + 1,
                )
              }
            >
              <img src={images.ArrowRight} />
              <span className="visually-hidden">Next</span>
            </motion.button>
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
      <br />
      <br />
    </motion.div>
  );
}

export default ProjectWindow;
