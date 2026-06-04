import ProjectCard from "./ProjectCard";
import CircleLink from "./CircleLink";
import * as images from "../assets";

function Home() {
  return (
    <div>
      <br></br>
      <h1 className="center home-title">Hi, I'm Tyler</h1>
      <h3 className="center home-text">I like making games</h3>
      <div className="center h-group">
        <ProjectCard
          title="Prawn Brawl"
          image={images.PrawnThumb}
          desc="Battle your friends in this 2D local multiplayer crustacean showdown!"
          link="/projects/prawnbrawl"
        />
        <ProjectCard
          title="Snail Space"
          image={images.SnailThumb}
          desc={
            <>
              Snails in space!
              <br />
              What else is there to say?
            </>
          }
          link="/projects/snailspace"
        />
        <ProjectCard
          title="Dice Diviners"
          image={images.dicediviners}
          desc="Fight waves of enemies using a dice that transforms into a random weapon"
          link="/projects/dicediviners"
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
