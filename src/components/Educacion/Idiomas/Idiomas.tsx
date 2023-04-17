import React, { useState } from "react";
import AnimatedLine from "../../AnimatedComponents/AnimatedLine";
import Spain from "../../../images/espana.jpg";
import English from "../../../images/reino-unido.jpg";
import { motion } from "framer-motion";
import Card from "./flipCard";

const idiomas = [
  {
    id: 0,
    idioma: "Español",
    certificacion: "C2 o Nativo",
    image: Spain,
    flip: false,
    description:"Tengo un dominio avanzado del español, con un amplio conocimiento del vocabulario, gramática y una comunicación fluida y natural."
  },
  {
    id: 1,
    idioma: "Inglés",
    certificacion: "B1 sin certificar",
    image: English,
    flip: false,
    description:"Tengo un nivel intermedio para comunicarme y entender conversaciones sencillas, aunque todavía tengo limitaciones en mi vocabulario y gramática.",
  },
];

function Idiomas() {
  
  return (
    <div className="">
      <div className="w-fit">
        <h2>Idiomas</h2>
        <AnimatedLine />
      </div>
      <div className="flex md:flex-row lg:flex-row flex-col"> 
        {idiomas.map((idioma, id) => (
          <Card idioma={idioma} id={id}/>
        ))}
      </div>
    </div>
  );
}

export default Idiomas;
