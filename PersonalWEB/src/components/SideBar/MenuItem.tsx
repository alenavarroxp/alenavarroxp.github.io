import * as React from "react";
import { motion } from "framer-motion";
import { ImUser } from "react-icons/im";
import { IoSchool } from "react-icons/io5";
import { MdWork, MdAlternateEmail } from "react-icons/md";
import { FaFileCode } from "react-icons/fa";
import { useEffect, useState } from "react";
import 'animate.css';
import {TfiEmail} from 'react-icons/tfi'
import { Link } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -200 }
    }
  },
  close: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity:100}
    }
  }
};

export const MenuItem = ({ i }:any) => {
  const iconSize = 20
  const info = ["Sobre mí","Educacion","Experiencia","Proyectos","Contacto"]
  const icons = [<ImUser size={iconSize}/>,<IoSchool size={iconSize}/>,<MdWork size={iconSize}/>,<FaFileCode size={iconSize}/>,<TfiEmail size={iconSize}/>]
  const [hover, setHover] = useState(false);
  function comprobar(i:number){
    switch(i){
      case 0: return "sobre-mi";
      case 1: return "educacion";
      case 2: return "experiencia";
      case 3: return "proyectos";
      case 4: return "contacto";
      default: return "/"
    }
    
  }
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.23}}
      onHoverStart={()=>setHover(true)}
      onHoverEnd={()=> setHover(false)}
      whileTap={{ scale: 0.95 }}
      className="p-0 list-none mb-[20px] flex items-center cursor-pointer"
      
    >
  {hover &&<motion.div className="absolute w-[272px] h-[40px] place-content-start bg-cyan-200" initial={{x:-290}} animate={{ x: 0 }}
  transition={{ ease: "linear", duration: 0.3 }}/>}
      <motion.div className="w-[40px] relative h-[40px] rounded-full flex mr-[8px] m-auto items-center ">
        {icons[i]}
      </motion.div>
      <div className="flex h-[20px] relative w-[200px] rounded-md items-center">
        <Link to={comprobar(i)}>
        <a>{info[i]}</a>
        </Link>
      </div>
      
    </motion.li>
  );
};
