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
          <h1 className="home-title">About Me</h1>
          <br />
          <p style={{ textAlign: "left" }}>
            {" "}
            Growing up in California, I developed an interest in technology at
            an early age through video games. Like many kids, I enjoyed playing
            games with friends, but I was also curious about how they were
            built. I found myself wondering what was happening behind the scenes
            and how developers created the worlds and experiences that players
            enjoyed. That curiosity led me to teach myself game development
            through online tutorials, personal projects, and a lot of
            experimentation. Along the way, I learned Unity, Unreal Engine,
            Godot, GameMaker, and Blender. Each project taught me something new
            and helped me develop both my technical and creative skills.
            <br />
            <br />
            When it came time to choose a college, I decided to leave California
            and attend the University of Utah. I was drawn to its strong game
            development program and the opportunity to learn alongside others
            who shared similar interests. Since then, I have continued to grow
            through coursework, game jams, personal projects, and leadership
            roles within the game development community.
            <br />
            <br />
            Today, I enjoy building games, exploring AI, and developing software
            that solves real problems. What started as curiosity about how games
            were made has grown into a passion for creating technology that
            people can use, enjoy, and learn from.
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
export default about;
