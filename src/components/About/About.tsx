import { motion } from "framer-motion";
import "./About.css";
import { Link } from "react-router-dom";
import FAQ from "../FAQ/FAQ";
import AnimatedLine from "../AnimatedComponents/AnimatedLine";
import AnimatedImage from "../AnimatedComponents/AnimatedImage";

function About() {
  return (
    <div className="lg:ml-24 md:ml-20 mt-4 ">
      <div className="w-full sm:w-auto relative top-6">
        <div className="text-4xl font-bold w-fit text-white flex-row lg:ml-0 md:ml-4 sm:mt-8 sm:ml-24 ml-4 mt-12">
          Sobre mi
          <AnimatedLine />
        </div>
      </div>

      <div className="flex lg:flex-row mt-8 flex-col">
        <div
          className="text-white text-lg  lg:max-w-[70em] text-justify lg:p-0 lg:text-left md:h-fit  lg:mt-0 sm:ml-20 ml-0 md:ml-0 mb-8 max-h-96 h-screen lg:max-h-96 pr-4 lg:pr-0 p-4 lg:ml-0 overflow-y-auto  pt-0"
          style={{ paddingRight: "2rem" }}
        >
          <h3 className="mb-3 text-justify">
            ¡Hola! Soy Alejandro Navarro, un estudiante de ingeniería
            informática dedicado, comprometido, creativo y apasionado por
            aprender y crecer profesionalmente en el desarrollo software.
          </h3>
          <h3 className="mb-3 text-justify">
            Como estudiante, estoy siempre aprendiendo y mejorando mis
            habilidades para estar al día de las últimas tendencias y
            tecnologías en el campo de la informática.
          </h3>
          <h3 className="mb-3 text-justify">
            En mi tiempo libre, me gusta hacer deporte y leer. Creo que es
            importante encontrar un equilibrio entre el trabajo y la vida
            personal para mantenerse saludable y motivado.
          </h3>
          <h3>
            Si está buscando un profesional motivado, con un enfoque en el éxito
            del equipo y la entrega de resultados de calidad, no dude en ponerse
            en{" "}
            <Link to={"/contacto"} className="font-bold underline">
              contacto conmigo
            </Link>
            .
          </h3>
        </div>

        <div
          className="p-4 md:p-14 w-full lg:mt-0 relative"
          style={{ marginTop: "-5%" }}
        >
          <AnimatedImage />

          <motion.div
            className=" text-center mt-3  w-fit m-auto font-bold  text-white  "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75 }}
          >
            <h1 className="text-2xl tracking-wider">ALEJANDRO</h1>
            <div className="text-xl">
              NAVARRO DE LA CRUZ
              <div className="border w-full  mt-1" />
            </div>

            <h1 className="text-md mt-2">Mencion: Ingenieria de Software</h1>
          </motion.div>
        </div>
      </div>
      <FAQ />
    </div>
  );
}

export default About;
