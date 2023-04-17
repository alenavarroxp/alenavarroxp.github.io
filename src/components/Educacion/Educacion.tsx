import React from "react";
import AnimatedLine from "../AnimatedComponents/AnimatedLine";
import Idiomas from "./Idiomas/Idiomas";
import Timeline from "./Timeline/MyTimeline";
function Educacion() {
  return (
    <div className="lg:ml-24 md:ml-24 sm:ml-24 ml-4 text-4xl flex flex-col font-bold w-fit text-white mt-20">
      <div>
        <div className="w-fit">
          Educación
          <AnimatedLine />
        </div>
        <Timeline />
      </div>
      <Idiomas />
    </div>
  );
}

export default Educacion;
