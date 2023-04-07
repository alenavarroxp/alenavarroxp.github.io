import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

function AnimatedLine() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      animate={{
        transform: isInView ? "translateX(0%)" : "translateX(-100%)",
        opacity: isInView ? 1 : 0,
      }}
      ref={ref}
      className="text-white h-1 w-full bg-gray-50 mb-2 rounded-full"
    />
  );
}

export default AnimatedLine;
