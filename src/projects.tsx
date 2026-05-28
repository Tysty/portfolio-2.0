import ProjectCard from "../src/components/ProjectCard";
import prawnbrawl from "../assets/PrawnBrawl.png";
import snailspace from "../assets/snailspace.png";
import dicediviners from "../assets/dicediviners.png";

function projects() {
  return (
    <div>
      <br></br>
      <h1 className="center home-title">Hi, I'm Tyler</h1>
      <h3 className="center home-text">I like making games</h3>
      <div className="center project-group">
        <ProjectCard
          title="Prawn Brawl"
          image={prawnbrawl}
          desc="Battle your friends in this 2D local multiplayer crustacean showdown!"
          link=""
        />
        <ProjectCard
          title="Snail Space"
          image={snailspace}
          desc={
            <>
              Snails in space!
              <br />
              What else is there to say?
            </>
          }
          link=""
        />
        <ProjectCard
          title="Dice Diviners"
          image={dicediviners}
          desc="Fight waves of enemies using a dice that transforms into a random weapon"
          link=""
        />
      </div>
      <div className="center project-group">
        <ProjectCard
          title="Prawn Brawl"
          image={prawnbrawl}
          desc="Battle your friends in this 2D local multiplayer crustacean showdown!"
          link=""
        />
        <ProjectCard
          title="Snail Space"
          image={snailspace}
          desc={
            <>
              Snails in space!
              <br />
              What else is there to say?
            </>
          }
          link=""
        />
        <ProjectCard
          title="Dice Diviners"
          image={dicediviners}
          desc="Fight waves of enemies using a dice that transforms into a random weapon"
          link=""
        />
      </div>
      <div className="center project-group">
        <ProjectCard
          title="Prawn Brawl"
          image={prawnbrawl}
          desc="Battle your friends in this 2D local multiplayer crustacean showdown!"
          link=""
        />
        <ProjectCard
          title="Snail Space"
          image={snailspace}
          desc={
            <>
              Snails in space!
              <br />
              What else is there to say?
            </>
          }
          link=""
        />
      </div>
    </div>
  );
}
export default projects;
