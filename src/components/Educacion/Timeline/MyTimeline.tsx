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
    badge: "Actualmente",
    icon: <FaUniversity color="#02bff4" />,
  },
  {
    id: 2,
    title: "Certificación de inglés",
    description: "Aún sin realizar",
    fecha: "Fecha estimada: mediados de 2023",
    icon: <IoIosMedal color="#02bff4" />,
  },
];

const MyTimeline = () => {
  const reversedEvents = [...events].reverse(); // Hacer una copia de la matriz y luego invertirla
  const [draggedIndex, setDraggedIndex] = useState<number>(0);

  return (
    <div className="mt-4 ml-4">
      <ol className="relative border-l-2 border-white ">
        {reversedEvents.map((event,index) => (
          <li key={event.id} className="mb-10 ml-8">
            <motion.span
              drag
              dragConstraints={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
              dragElastic={0.01}
              dragDirectionLock={true}
              className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-8 mt-2 ring-white"
              whileHover={
                draggedIndex === index // Verificar si el índice actual coincide con el índice del evento que se está arrastrando
                  ? { scale: 1.2 }
                  : {}
              }
              onDragStart={() => setDraggedIndex(index)} // Actualizar el estado del índice del evento arrastrado al iniciar el arrastre
              onDragEnd={() => setDraggedIndex(-1)} // Limpiar el estado del índice del evento arrastrado al finalizar el arrastre
            >
              
    
              {event.icon}
            </motion.span>
            <h3 className="flex items-center mb-1 text-2xl font-semibold text-gray-200">
              {event.title}{" "}
              {event.badge != null && (
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2 py-0.5 rounded ml-3">
                  {event.badge}
                </span>
              )}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
              {event.fecha}
            </time>
            <p className="mb-4 text-base font-normal max-w-lg text-justify text-white">
              {event.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MyTimeline;
