import { motion } from "motion/react";
function about() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 25 }}
      transition={{ duration: 0.12 }}
    >
      About Page
    </motion.div>
  );
}
export default about;
