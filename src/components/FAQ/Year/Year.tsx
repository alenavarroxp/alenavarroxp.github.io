import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect } from "react";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";

function Year() {
  const count = useMotionValue(2000);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const controls = animate(count, 2020, { duration: 2 });
    return controls.stop;
  }, []);
  return (
    <div className="">
      <motion.div
        className="flex items-center"
        style={{ textAlign: "justify" }}
      >
        <p className="mr-1.5 text-justify">
          Empecé a estudiar ingeniería informática en{" "}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ textAlign: "justify" }}
            className="text-2xl"
          >
            {rounded}
          </motion.span>{" "}
          por mi interés por la tecnología, la informática y por el papel
          creciente en la sociedad actual. Además la demanda laboral en este
          campo, suele ser alta y está en constante crecimiento, lo que me
          posibilita seguir creciendo profesionalmente.
          <br /> Si quieres saber más sobre mi experiencia pulsa en
          <Link to={"/experiencia"}>
            <div className="badge bg-[#02bff4] text-white h-6 ml-1 items-center">
              Experiencia
              <MdWork size={18} className="ml-1" />
            </div>
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Year;
