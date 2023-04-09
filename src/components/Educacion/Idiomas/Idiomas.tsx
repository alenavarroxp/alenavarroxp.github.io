import React, { useState } from "react";
import AnimatedLine from "../../AnimatedComponents/AnimatedLine";
import Spain from "../../../images/espana.jpg";
import English from "../../../images/reino-unido.jpg";
import { motion } from "framer-motion";

const idiomas = [
  { id: 0, idioma: "Español", certificacion: "Nativo", image: Spain },
  {
    id: 1,
    idioma: "Inglés",
    certificacion: "B1 sin certificar",
    image: English,
  },
];

function Idiomas() {
  const [flip, setFlip] = useState(false);

  function handleFlip() {
    setFlip(!flip);
  }

  return (
    <div className="">
      <div className="w-fit">
        <h2>Idiomas</h2>
        <AnimatedLine />
      </div>
      <div className="flex flex-row">
        {idiomas.map((idioma,id) => (
          <div className="">
           
          <motion.div
            key={idioma.id}
            initial={{ rotate: 0 }}
            animate={
              flip ? { rotateY: 180, opacity: 0 } : { rotateY: 0, opacity: 1 }
            }
            className="card w-80 h-fit mr-24 shadow-2xl"
            style={{ borderRadius: "3.7rem" }}
          >
            <img
              src={idioma.image}
              alt=""
              className=""
              style={{ borderRadius: "3.7rem" }}
            />
            <p
              className={`absolute text-xl top-5 transform ${
                idioma.idioma === "Inglés"
                  ? "translate-x-6 top-24"
                  : "translate-x-0"
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
              onClick={() => handleFlip()}
              style={{ boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.5)" }}
            >
              <div>
                <p className="text-[#0072F5]">INFO</p>
              </div>
            </button>
            </motion.div>
            <motion.div
              key={idioma.id}
              initial={{ rotate:0,opacity:0 }}
              animate={
              !flip
                  ? { rotateY: 180, opacity: 0 }
                  : { rotateY: 0, opacity: 1 }
              }
              className="card relative w-80 h-fit mr-24 shadow-2xl bg-white"
              style={{ borderRadius: "3.7rem" }}
            >
              <div className="h-60 w-32 m-auto bg-white"></div>
              <p
                className={`absolute text-xl top-5 transform ${
                  idioma.idioma === "Inglés"
                    ? "translate-x-6 top-24"
                    : "translate-x-0"
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
                onClick={() => handleFlip()}
                style={{ boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.5)" }}
              >
                <div>
                  <p className="text-[#0072F5]">INFO</p>
                </div>
              </button>
          </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Idiomas;
