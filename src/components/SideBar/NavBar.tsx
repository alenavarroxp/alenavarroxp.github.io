import React, { ReactNode, useRef } from "react";
import Image from "../images/PersonalImage.png";
import { ImUser } from "react-icons/im";
import { IoSchool } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

function NavBar({ isOpen, setIsOpen }: any) {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    close: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.25,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "close"}
      custom={height}
      ref={containerRef}
      className="fixed top-0 bottom-0 left-0 w-[20px]"
    >
      <motion.div
        className="absolute top-0 bottom-0 left-0 w-[300px] bg-gray-50 h-full"
        variants={sidebar}
      >
        <Navigation />
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        <div className="absolute bottom-0 left-0 right-0 text-center text-black">
          <p className="">Alejandro Navarro</p>
          <p className="text-sm mb-3">© 2023 Todos los derechos reservados</p>
        </div>
      </motion.div>
    </motion.nav>
  );
}

{
  /* <aside id="logo-sidebar" className="fixed top-0 left-0  w-72 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 bg-gray-50">
   <img src={Image} className=" sm:h-40 m-auto self-center" alt="PersonalImage" />
      <a href="" className="flex items-center mb-5 m-auto">
         <span className="self-center mt-4 m-auto text-2xl font-semibold dark:text-white">Alejandro Navarro</span>
      </a>
      <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
                <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <svg aria-hidden="true" viewBox="0 0 20 20" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" >
                    <ImUser size={18}/> 
                </svg>
                <span className="ml-3">Sobre m</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                </a>
            </li>

            <li>
                <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <svg aria-hidden="true" viewBox="0 0 20 20" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" >
                    <IoSchool size={18}/> 
                </svg>
                <span className="ml-3">Educación</span>
                 <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                </a>
            </li>

            <li>
                <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <svg aria-hidden="true" viewBox="0 0 20 20" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" >
                    <MdWork size={18}/> 
                </svg>
                <span className="ml-3">Experiencia</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                </a>
            </li>
      </ul>
      <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
                <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
                <span className="ml-3">Help</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                </a>
            </li>
      </ul>
         

   </div>
</aside> */
}

export default NavBar;
