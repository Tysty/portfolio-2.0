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
      <br></br>
      <h1 className="center home-title">Hi, I'm Tyler</h1>
      <h3 className="center home-text">I like making games</h3>
      <div className="center h-group" style={{ marginRight: "45px" }}>
        <ProjectCard
          title={projects[0].title}
          image={projects[0].thumbnail}
          desc={projects[0].desc}
          link={"projects/" + projects[0].id}
        />
        <ProjectCard
          title={projects[1].title}
          image={projects[1].thumbnail}
          desc={projects[1].desc}
          link={"projects/" + projects[1].id}
        />
        <ProjectCard
          title={projects[2].title}
          image={projects[2].thumbnail}
          desc={projects[2].desc}
          link={"projects/" + projects[2].id}
        />
      </div>
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
    </motion.div>
  );
}
export default Home;
