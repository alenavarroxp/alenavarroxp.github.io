import { motion } from "framer-motion";
import Educacion from "../../Educacion/Educacion";

export const EducacionContainer = ({ variants, transition, location }: any) => (
  <motion.div
    initial="enter"
    animate="center"
    exit="exit"
    variants={variants}
    transition={transition}
    key={location.key}
  >
    <Educacion />
  </motion.div>
);
