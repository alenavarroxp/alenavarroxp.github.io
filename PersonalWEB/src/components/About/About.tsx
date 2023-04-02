import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

function About() {
    const location = useLocation();
  
    const variants = {
       init:{
        x: '0%',
        opacity:1,
       },
        exit: {
          
          x: '-100%',
          opacity: 0,
        },
      };
    
   
      
    
  return (
    <div className=' h-screen'>
        {/*Sacarlo como otro componente*/}
        <motion.div 
            initial="init"
            animate="center"
            exit={"exit"}
            variants={variants}
            transition={{duration:3}}
            key={location.key}
            className=' h-screen'>

        ABout
        </motion.div>
    </div>
  
  )
}

export default About