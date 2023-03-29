import * as React from "react";
import { motion } from "framer-motion";

const Path = (props:any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }:any) => (
  <button onClick={toggle} className="p-2 absolute top-[18px] cursor-pointer -user rounded-full bg-transparent h-[50px] w-[50px] left-[15px]">
    <svg width="23" height="23" viewBox="0 0 23 23" className="m-auto">
      <Path
        variants={{
          close: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          close: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          close: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);
