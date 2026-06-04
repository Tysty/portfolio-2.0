import { useParams } from "react-router-dom";
import PageNotFound from "../components/PageNotFound";
import { projects } from "../projects";

const carouselImageStyle: React.CSSProperties = {
  height: "500px",
  objectFit: "cover",
};

function ProjectWindow() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <PageNotFound />;

  return (
    <>
      <div className="h-group">
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
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

        <div>
          <h1 className="center home-title">{project.title}</h1>
          <p>{project.desc}</p>
          <ul className="project-p" style={{ listStyleType: "none" }}>
            <li>Development Time: {project.dev_time}</li>
            <li>Team Size: {project.team_size}</li>
            <li>Tools: {project.tools}</li>
          </ul>
          <div className="nav-separator" />
          <h1 className="project-title center">My Involvement</h1>
          <p>Role: {project.role}</p>
          <p>Things I did:</p>
          <ul className="project-p" style={{ listStyleType: "none" }}>
            {project.implementations.map((implementation, index) => (
              <li key={index}>- {implementation}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="nav-separator" />
      <h1 className="project-title center">Retrospective</h1>
      <p>{project.retrospective}</p>
    </>
  );
}

export default ProjectWindow;
