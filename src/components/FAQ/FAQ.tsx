import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";
import ReorderLanguages from "./Reordered/ReorderLanguages";
import Year from "./Year/Year";
import Mencion from "./Mencion/Mencion";
import AnimatedLine from "../AnimatedComponents/AnimatedLine";
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const panels = [
    {
      title: "¿Con qué has hecho esta web?",
      content: <ReorderLanguages />,
    },
    {
      title: "¿Por qué empezaste a estudiar ingeniería informática?",
      content: <Year />,
    },
    {
      title: "¿Por qué elegiste la mención de ingeniería de software?",
      content: <Mencion />,
    },
  ];

  const togglePanel = (index: any) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="lg:max-w-3xl md:max-w-4xl md:min-w-2xl md:mr-8 lg:ml-0 md:ml-0 sm:max-w-2xl sm:ml-12 sm:mr-2 m-4">
      <h1 className="text-white w-fit font-bold text-3xl">
        Preguntas frecuentes
        <AnimatedLine />
      </h1>
      {panels.map((panel, index) => (
        <motion.div key={index} className="border-b w-full">
          <motion.div
            className={`flex justify-between items-center cursor-pointer ${
              index === 0 ? "rounded-xl" : ""
            } rounded-b-none py-4`}
            onClick={() => togglePanel(index)}
            initial={{ backgroundColor: "transparent" }}
            animate={{
              backgroundColor:
                activeIndex === index ? "#02bff4" : "transparent",
            }}
            whileHover={{
              backgroundColor: activeIndex === index ? "#02bff4" : "",
            }}
          >
            <motion.h3
              className="font-semibold text-lg ml-3 w-fit"
              animate={{
                color: activeIndex === index ? "white" : "lightgray",
                transition: { duration: 0.2 },
              }}
            >
              {panel.title}
            </motion.h3>
            <motion.svg
              className={`h-6 w-6 mr-2 transition-transform  text-white ${
                activeIndex === index ? "transform rotate-180" : ""
              }`}
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.1 }}
            >
              <MdKeyboardArrowDown size={27} />
            </motion.svg>
          </motion.div>
          {activeIndex === index && (
            <motion.div
              className="p-2 text-white"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              {panel.content}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FAQ;
