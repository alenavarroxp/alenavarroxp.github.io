import { FaUniversity } from "react-icons/fa";
import { IoIosMedal } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";

const events = [
  {
    id: 1,
    title: "Ingenieria Informática",
    description:
      "Empecé los estudios en el grado de ingenieria informática y en el tercer curso me especialicé en la rama de ingenieria del software. Estudio en la Escuela Superior de Ingenieria Informática de la UCLM en Albacete",
    fecha: "2020 - 2024",
    badge: "Activo",
    colorBadge: "#17C964", 
    icon: <FaUniversity color="#0072F5" />,
  },
  {
    id: 2,
    title: "Certificación de inglés",
    description: "Certificación Linguaskill de nivel B1 de inglés por la Universidad de Cambridge. Para ver la certificación, click <a href='https://drive.google.com/file/d/1GXpRImxRP-L64kXAq4s1_-KDzb1kBheg/view?usp=sharings'>aquí</a>",
    fecha: "Marzo 2024",
    badge: "Finalizado",
    colorBadge: "#0072F5",
    icon: <IoIosMedal color="#0072F5" />,
  },
];

const MyTimeline = () => {
  const reversedEvents = [...events].reverse(); // Hacer una copia de la matriz y luego invertirla
  const [draggedIndex, setDraggedIndex] = useState<number>(0);

  return (
    <div className="mt-4 ml-4">
      <ol className="relative border-l-2 border-white">
        {reversedEvents.map((event, index) => (
          <li key={event.id} className="mb-10 ml-8">
            <motion.span
              drag
              dragConstraints={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
              dragElastic={0.05}
              dragDirectionLock={true}
              className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-8 mt-2 ring-white"
              whileHover={draggedIndex === index ? { scale: 1.2 } : {}}
              onDragStart={() => setDraggedIndex(index)}
              onDragEnd={() => setDraggedIndex(-1)}
            >
              {event.icon}
            </motion.span>
            <h3 className="flex items-center mb-1 text-2xl font-semibold text-gray-200">
              {event.title}{" "}
              {event.badge != null && (
                <div
                className={`badge text-white font-thin mr-2 px-2.5 py-3 ml-3 `}
                style={{backgroundColor:event.colorBadge}}
                >
                  {event.badge}
                </div>
              )}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
              {event.fecha}
            </time>
            <p className="mb-4 text-base font-normal max-w-[19em] max-w-5 mr-8 text-justify text-white"
              dangerouslySetInnerHTML={{ __html: event.description }}
            ></p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MyTimeline;
