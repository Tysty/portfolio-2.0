import ProjectCard from "./ProjectCard";
import CircleLink from "./CircleLink";
import { projects } from "../projects";

function Home() {
  return (
    <div>
      <br></br>
      <h1 className="center home-title">Hi, I'm Tyler</h1>
      <h3 className="center home-text">I like making games</h3>
      <div className="center h-group">
        <ProjectCard
          title={projects[0].title}
          image={projects[0].thumbnail}
          desc={projects[0].desc}
          link={projects[0].id}
        />
        <ProjectCard
          title={projects[1].title}
          image={projects[1].thumbnail}
          desc={projects[1].desc}
          link={projects[1].id}
        />
        <ProjectCard
          title={projects[2].title}
          image={projects[2].thumbnail}
          desc={projects[2].desc}
          link={projects[2].id}
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
    </div>
  );
}
export default Home;
