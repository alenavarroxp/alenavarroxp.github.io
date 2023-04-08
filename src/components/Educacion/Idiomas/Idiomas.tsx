import React from "react";
import AnimatedLine from "../../AnimatedComponents/AnimatedLine";
import Spain from "../../../images/espana.png";
import English from "../../../images/reino-unido.png";
const idiomas = [
  { id: 1, idioma: "Español", certificacion: "Nativo", image: Spain },
  { id: 2, idioma: "Inglés", certificacion: "Sin certificar", image: English },
];

function Idiomas() {
  return (
    <div className="">
      <div className="w-fit">
        <h2>Idiomas</h2>
        <AnimatedLine />
      </div>
      {idiomas.map((idioma) => (
        <div key={idioma.id} className="text-base">
          <img src={idioma.image}/>
        </div>
      ))}
    </div>
  );
}

export default Idiomas;
