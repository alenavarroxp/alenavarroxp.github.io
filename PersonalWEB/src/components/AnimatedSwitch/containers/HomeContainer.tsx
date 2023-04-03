import { motion } from "framer-motion";
import Home from "../../Home/Home";

export const HomeContainer = ({ variants, transition, location }:any) => (
    <motion.div
      initial="enter"
      animate="center"
      exit={"exit"}
      variants={variants}
      transition={transition}
      key={location.key}
    >
      <Home />
    </motion.div>
  );