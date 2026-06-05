import { Link } from "react-router-dom";
import { motion } from "motion/react";

interface GlowLinkProps {
  to: string;
  children: React.ReactNode;
}

export default function Navbar() {
  const GlowLink = ({ to, children }: GlowLinkProps) => (
    <motion.div whileHover="hover" initial="rest" animate="rest">
      <motion.div
        whileHover={{ y: 5 }}
        variants={{
          rest: { textShadow: "0 0 0px rgba(255,255,255,0)" },
          hover: {
            textShadow: [
              "0 0 8px rgba(255,255,255,1)",
              "0 0 16px rgba(255,255,255,0.8)",
              "0 0 8px rgba(255,255,255,1)",
            ],
            transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
          },
        }}
      >
        <Link className="link" to={to}>
          {children}
        </Link>
      </motion.div>
    </motion.div>
  );
  return (
    <>
      <nav className="nav">
        <div className="nav-div">
          <GlowLink to="/">Home</GlowLink>
          <GlowLink to="/Projects">Projects</GlowLink>
          <GlowLink to="/About">About</GlowLink>
          <GlowLink to="/Resume">Resume</GlowLink>
        </div>
      </nav>
      <div className="nav-separator" />
    </>
  );
}
