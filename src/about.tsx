import { motion } from "motion/react";
import * as images from "./assets";
import CircleLink from "./components/CircleLink";

function about() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 25 }}
      transition={{ duration: 0.12 }}
    >
      <div className="row center">
        <div className="col-6">
          <h1
            className=" home-title"
            style={{ textAlign: "left", marginLeft: 30 }}
          >
            <strong>About Me</strong>
          </h1>
          <br />
          <p style={{ textAlign: "left" }}>
            {" "}
            I am a junior studying Software Development at the University of
            Utah. I am interested in building software that creates interaction
            and shared experiences between people.
            <br />
            <br />
            I enjoy working on applications that combine functionality with
            interaction, collaboration, and competition. I enjoy building
            efficient, well-optimized code that performs at a high level.
            <br />
            <br />
            My experiences with tools like Discord, VS Code, and Wii Sports have
            shaped how I think about software development. They showed me how
            different systems can support communication, productivity, and
            interaction in different ways.
            <br />
            <br />
            I’ve built projects using C#, C++, Python, Java, JavaScript, React,
            and game engines like Unity, Unreal Engine, and Godot, and I hope to
            build interactive software that creates shared experiences.
          </p>
        </div>
        <div className="col-4">
          <br />
          <img
            src={images.portrait}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <br />
          <br />
          <div className="center">
            <CircleLink
              url="mailto:tylerstyle05@gmail.com"
              icon="fa-solid fa-envelope"
            />
            <CircleLink
              url="https://www.youtube.com/@tylerstyle307"
              icon="fa-brands fa-youtube"
            />
            <CircleLink
              url="https://discordapp.com/users/517953398625140776"
              icon="fa-brands fa-discord"
            />
            <CircleLink
              url="https://www.linkedin.com/in/tyler-chin-7a2829252/"
              icon="fa-brands fa-linkedin"
            />
            <CircleLink
              url="https://github.com/Tysty"
              icon="fa-brands fa-github"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default about;
