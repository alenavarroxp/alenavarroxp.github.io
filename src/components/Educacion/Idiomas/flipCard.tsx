import { motion } from "framer-motion";
import React, { useState } from "react";
import { MdInfo } from "react-icons/md";
import Girar from "../../../images/girar.png";

interface FlipCardProps {
  idioma: any;
  id: number;
}

const Card: React.FC<FlipCardProps> = ({ idioma, id }) => {
  const [flippedIds, setFlippedIds] = useState<any>({});

  function handleFlip(id: any) {
    setFlippedIds((prevIds: any) => {
      return {
        ...prevIds,
        [id]: !prevIds[id],
      };
    });
  }
  return (
    <div className="relative" style={{ perspective: 1000 }}>
      <motion.div
        key={idioma.id}
        animate={
          flippedIds[idioma.id]
            ? { rotateY: "-180deg", display: "none" }
            : { rotateY: 0, opacity: 1 }
        }
        transition={{ type: "spring", stiffness: 100 }}
        className="card w-80 h-fit mr-24 shadow-2xl"
        style={{
          borderRadius: "3.7rem",
          backfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={idioma.image}
          alt=""
          className="pointer-events-none"
          style={{ borderRadius: "3.7rem" }}
        />
        <p
          className={`absolute text-xl transform ${
            idioma.idioma === "Inglés"
              ? "translate-x-6 top-24"
              : "translate-x-0 top-5"
          } ml-8`}
          style={{
            textShadow: "3px 3px 3px rgba(0, 0, 0, 0.7)",
            color: "#FFFFFF",
          }}
        >
          {idioma.idioma} - {idioma.certificacion}
        </p>
        <button
          type="button"
          className="text-gray-900 absolute bg-white border top-44 right-3 border-gray-300 focus:outline-none hover:bg-gray-200 focus:ring-2 focus:ring-[#0072F5] font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2"
          onClick={() => handleFlip(idioma.id)}
          style={{ boxShadow: "3px 3px 1px rgba(0, 0, 0, 0.5)" }}
        >
          <div className="flex items-center justify-end">
            <p className="text-[#0072F5] mr-3">INFO</p>
            <MdInfo color="#0072F5" className="absolute right-2" />
          </div>
        </button>
      </motion.div>
      <motion.div
        key={idioma.id}
        animate={
          !flippedIds[idioma.id]
            ? { rotateY: "180deg", display: "none" }
            : { rotateY: 0, opacity: 1 }
        }
        transition={{ type: "spring", stiffness: 100 }}
        className="card relative w-80 h-fit mr-24 shadow-2xl text-black bg-white"
        style={{
          borderRadius: "3.7rem",
          backfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="h-56 m-auto bg-white"></div>
        <div
          className={`absolute text-xl top-5  transform  text-black  ml-8`}
          style={{ width: "fit-content", maxWidth: "500px" }}
        >
          <div className=" w-fit">
            {idioma.idioma} - {idioma.certificacion}
            <div className="h-[2px] w-full bg-black" />
          </div>
          <p className="font-thin leading-6 text-[15px] text-justify mr-7 left-0">
            {idioma.description}
          </p>
        </div>

        <button
          type="button"
          className="text-cyan-500 absolute bg-[#0072F5]  top-44 left-7 focus:outline-none hover:bg-blue-500 focus:ring-2 focus:ring-[#0072F5] font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2"
          onClick={() => handleFlip(idioma.id)}
          style={{ boxShadow: "3px 3px 1px rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex items-center justify-end">
            <p className="text-white mr-3">GIRAR</p>
            <img
              src={Girar}
              width={18}
              height={10}
              className="absolute right-2"
            />
          </div>
        </button>
      </motion.div>
    </div>
  );
};

export default Card;
