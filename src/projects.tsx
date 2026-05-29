import ProjectCard from "../src/components/ProjectCard";

import prawnbrawl from "../src/assets/PrawnBrawl.png";
import snailspace from "../src/assets/snailspace.png";
import dicediviners from "../src/assets/dicediviners.png";
import stickysituation from "../src/assets/stickyssituation.png";
import bravethestorm from "../src/assets/bravethestorm.png";
import flurry from "../src/assets/flurry.png";
import bullethellevator from "../src/assets/bullethellevator.png";
import sternhall from "../src/assets/sternhall.png";
import modeling from "../src/assets/3dModel1.png";
import spriteeditor from "../src/assets/SpriteEditor1.png";
import teamsorter from "../src/assets/team_sorter.png";

function projects() {
  return (
    <div>
      <br></br>
      <h1 className="center home-title">Projects</h1>
      <h3 className="center home-text">
        Here are some of the projects I have worked on.
      </h3>
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
          title="Sticky's Situation"
          image={stickysituation}
          desc="Help Sticky escape the notebook before the monsters get to him!"
          link=""
        />
        <ProjectCard
          title="Brave The Storm"
          image={bravethestorm}
          desc="Embark on a journey as Bob to save his sister from a deadly disease."
          link=""
        />
        <ProjectCard
          title="Flurry"
          image={flurry}
          desc="Remake of Qbert for the National High School Game Academy at Carnegie Mellon University"
          link=""
        />
      </div>
      <div className="center project-group">
        <ProjectCard
          title="Bullet Hellevator"
          image={bullethellevator}
          desc="Battle your friends in this 2D local multiplayer crustacean showdown!"
          link="Dodge an onslaught of bullets to make it to floor 100 of the tower."
        />
        <ProjectCard
          title="Escape: Stern Hall"
          image={sternhall}
          desc="You are trapped in the Stern Hall building with no AC. Escape before you get heatstroke."
          link=""
        />
        <ProjectCard
          title="3D Modeling"
          image={modeling}
          desc="3D models made in Blender."
          link=""
        />
      </div>
      <div className="center project-group">
        <ProjectCard
          title="Sprite Editor"
          image={spriteeditor}
          desc="An application for creating sprites/animation and exporting them into image files."
          link=""
        />
        <ProjectCard
          title="AI Game Jam Team Sorter"
          image={teamsorter}
          desc="An intelligent agent that automatically creates balanced game jam teams using participant skills, roles, and preferences."
          link=""
        />
      </div>
    </div>
  );
}
export default projects;
