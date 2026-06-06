import ProjectCard from "./components/ProjectCard";
import CircleLink from "./components/CircleLink";
import { projects } from "./projects";
import { motion } from "motion/react";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 25 }}
      transition={{ duration: 0.2 }}
    >
      <br />
      <div className="center h-group" style={{ marginRight: "0%" }}>
        <div>
          <h3
            className=" home-text"
            style={{ fontSize: "33px", textAlign: "left" }}
          >
            Hi! I'm
          </h3>
          <h1 className=" home-title">
            <strong>TYLER CHIN</strong>
          </h1>
          <h3
            className=" home-text"
            style={{
              marginRight: "18%",
              color: "#008cff",
              textAlign: "left",
            }}
          >
            Software Developer
          </h3>
          <h3
            className=" home-text"
            style={{ maxWidth: "600px", textAlign: "left" }}
          >
            <br /> I focus on building efficient, well-optimized applications
            and games that improve productivity, streamline communication, and
            create interactive, engaging experiences. <br /> <br />I am
            currently a rising junior at
            <br /> The University of Utah studying software development with a
            games emphasis.
          </h3>
          <br />
          <h3 className="center home-text">Let's get in touch</h3>
          <div className="center">
            <CircleLink
              url="https://www.youtube.com/@tylerstyle307"
              icon="fa-youtube"
            />
            <CircleLink
              url="https://discordapp.com/users/517953398625140776"
              icon="fa-discord"
            />
            <CircleLink
              url="https://www.linkedin.com/in/tyler-chin-7a2829252/"
              icon="fa-linkedin"
            />
            <CircleLink url="https://github.com/Tysty" icon="fa-github" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Home;
