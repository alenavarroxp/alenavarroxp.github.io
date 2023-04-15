import { motion } from "framer-motion";
import Maintenance from "../../Maintenance/Maintenance";

export const MaintenanceContainer = ({ variants, transition, location }: any) => (
  <motion.div
    initial="enter"
    animate="center"
    exit={"exit"}
    variants={variants}
    transition={transition}
    key={location.key}
  >
    <Maintenance/>
  </motion.div>
);
