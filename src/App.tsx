import { Routes, Route } from "react-router-dom";

import "./styles/App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProjectsPage from "./projects_page";
import About from "./about";
import Resume from "./resume";
import PageNotFound from "./components/PageNotFound";
import ProjectWindow from "./components/ProjectWindow";
import Modeling from "./modeling";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/3dmodeling" element={<Modeling />} />
        <Route path="/projects/:id" element={<ProjectWindow />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

/*
import { motion } from "motion/react";

    <>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          {alertVisible && (
            <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>
          )}
          <button color="primary" onClick={() => setAlertVisibility(true)}>
            Show Alert
          </button>
          <ListGroup
            items={items}
            heading="Cars"
            onSelectItem={(item: string) => console.log(item)}
          />
        </div>
      </motion.div>
    </>
*/
