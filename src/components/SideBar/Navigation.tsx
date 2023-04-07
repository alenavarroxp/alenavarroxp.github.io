import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { useEffect, useState } from "react";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  close: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul
    variants={variants}
    className=" p-0 absolute top-[100px] w-[300px]  "
  >
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
