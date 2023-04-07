import React from "react";
import AnimatedLine from "../AnimatedComponents/AnimatedLine";
import Idiomas from "./Idiomas/Idiomas";
import Timeline from "./Timeline/MyTimeline"
function Educacion() {
  return (
    <div className="lg:ml-24 md:ml-24 text-4xl font-bold w-fit text-white flex-row mt-14  ml-12 ">
      <div className="w-fit">
        Educacion
        <AnimatedLine />
      </div>
      <Timeline/>
      <Idiomas />
    </div>
  );
}

export default Educacion;
