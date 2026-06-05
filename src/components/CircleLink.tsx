import { motion } from "motion/react";

interface Props {
  url: string;
  icon: string;
}

function CircleLink({ url, icon }: Props) {
  return (
    <motion.a
      whileHover={{ scale: 1.2 }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="button-link"
    >
      <i className={"fa-brands " + icon}></i>
    </motion.a>
  );
}
export default CircleLink;
