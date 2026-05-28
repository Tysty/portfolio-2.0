import CardDoorTop from "../assets/CardDoorTop.png";
import CardDoorBottom from "../assets/CardDoorBottom.png";

interface Props {
  title: string;
  image: string;
  desc: string | React.ReactNode;
  link: string;
}

function ProjectCard({ title, image, desc, link }: Props) {
  return (
    <div style={{ position: "relative", width: "22rem", margin: "25px" }}>
      <img
        src={CardDoorTop}
        style={{
          position: "absolute",
          top: -10,
          left: 18,
          width: "23rem",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <div
        className="card p-2 staggered-fade"
        style={{
          display: "flex",
          width: "22rem",
          height: "27rem",
          margin: "25px",
        }}
      >
        <img
          src={image}
          className="card-img-top"
          alt="..."
          style={{
            marginTop: "30px",
            height: "200px",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a
            href={link}
            className="btn btn-primary"
            style={{ marginTop: "auto" }}
          >
            Go to Project
          </a>
        </div>
      </div>
      <img
        src={CardDoorBottom}
        style={{
          position: "absolute",
          bottom: -25,
          left: 18,
          width: "23rem",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
export default ProjectCard;
