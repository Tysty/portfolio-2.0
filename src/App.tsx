import { Routes, Route } from "react-router-dom";

import "./styles/App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./projects";
import About from "./About";
import Resume from "./Resume";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
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
