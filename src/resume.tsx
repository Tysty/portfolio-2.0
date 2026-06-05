import { motion } from "motion/react";

function resume() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 25 }}
      transition={{ duration: 0.2 }}
    >
      <h1 className="center home-title">Resume</h1>
      <br />
      <iframe
        src="https://rose-lauretta-19.tiiny.site"
        width="1000"
        height="1100"
        allowFullScreen
        style={{ display: "block", margin: "0 auto" }}
      />
    </motion.div>
  );
}
export default resume;
