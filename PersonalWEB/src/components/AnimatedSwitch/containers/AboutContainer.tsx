import { motion } from "framer-motion";
import About from "../../About/About";

export const AboutContainer = ({ variants, transition, location }:any) => (
    <motion.div
      initial="enter"
      animate="center"
      exit="exit"
      variants={variants}
      transition={transition}
      key={location.key}
    >
      <About />
    </motion.div>
  );