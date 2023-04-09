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
      <div className="flex flex-row w-fit ">
        {idiomas.map((idioma) => (
          <div className="card w-96  shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">{idioma.idioma} - {idioma.certificacion}</h2>
            <p className="text-base"></p>
          </div>
          <figure><img src={idioma.image} alt="" /></figure>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Idiomas;
