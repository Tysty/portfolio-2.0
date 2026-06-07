import { motion } from "motion/react";
import resumePdf from "./assets/Resume.pdf";

function resume() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 25 }}
      transition={{ duration: 0.2 }}
    >
      <h1 className=" home-title center">
        <strong>Resume</strong>
      </h1>
      <br />
      <embed
        type="application/pdf"
        style={{ display: "block", margin: "0 auto" }}
        width="1000"
        height="1150"
        src={resumePdf}
      />
    </motion.div>
  );
}
export default resume;

/*
      <iframe
        src="https://rose-lauretta-19.tiiny.site"
        width="1000"
        height="1100"
        allowFullScreen
        style={{ display: "block", margin: "0 auto" }}
      />
*/
