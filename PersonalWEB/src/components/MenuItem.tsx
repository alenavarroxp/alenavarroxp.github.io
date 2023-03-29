import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -200 }
    }
  },
  close: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity:100}
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const    MenuItem = ({ i }:any) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="m-0 p-0 list-none mb-[20px] flex items-center cursor-pointer"
    >
      <div className="w-[40px] h-[40px] rounded-full flex mr-[20px]" style={style} />
      <div className="flex h-[20px] w-[200px] rounded-md" style={style} />
    </motion.li>
  );
};
