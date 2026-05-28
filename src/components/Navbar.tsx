import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <div>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/projects">
            Projects
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/resume">
            Resume
          </Link>
        </div>
      </nav>
      <div className="nav-separator" />
    </>
  );
}
