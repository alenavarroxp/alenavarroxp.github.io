import { AnimatePresence, animate, easeOut, motion, useInView } from 'framer-motion'
import {CSSTransition, SwitchTransition} from 'react-transition-group'
import React, { useEffect, useRef, useState } from 'react'
import './About.css'
import { Link } from 'react-router-dom';
import Photo from '../../images/PersonalPhoto.jpg'
import {MdVerified} from 'react-icons/md'
import FAQ from '../FAQ/FAQ';

function About() {
  const ref = useRef(null);
  const refImage = useRef(null);
  const isInViewImage = useInView(refImage)
  const isInView = useInView(ref);
  const [visibleBubble,setVisibleBubble] = useState(false)
  const arrayOfWords = ['Alejandro Navarro','Ingeniero Informático','Profesional','Desarrollador software','Creativo']
  const  [paragraph, setParagraph] = useState('')
  const [visible,setVisible] = useState(false)
  const [paragraphCounter, setParagraphCounter] = useState(0)
  const [time,setTime] = useState(3500)
  const [clock, setClock] = useState(new Date());
  useEffect(()=>{
    const interval = setInterval(()=>{
      setParagraphCounter((currentvalue)=>{
        if(currentvalue +1 === arrayOfWords.length){
          return 0;
        }
        return currentvalue+1
      });
      },time);
    return() => clearInterval(interval);
    
  },[]);
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [visibleBubble]);

  const formatTime = (date:any) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
  };


  return (
    <div className='lg:ml-24 md:ml-20 mt-4 '>
      <div className='w-full sm:w-auto relative top-6'>
        <div className='text-4xl font-bold w-fit text-white flex-row lg:ml-0 md:ml-4 sm:mt-8 sm:ml-24 ml-16 mt-12'>Sobre mi
        <motion.div
          animate={{
            transform: isInView ? "translateX(0)" : "translateX(-10vw)",
            opacity: isInView ? 1 : 0,
          }}
          ref={ref}
          className='text-white  h-1  bg-gray-50'>
        </motion.div>
        </div>
        
      </div>

      <div className="flex lg:flex-row mt-8 flex-col">
      <div className="text-white text-lg  lg:max-w-[70em] text-justify lg:p-0 lg:text-left md:h-fit  lg:mt-0 sm:ml-20 ml-12 md:ml-0 mb-8 max-h-96 h-screen lg:max-h-96 pr-4 lg:pr-0 p-4 lg:ml-0 overflow-y-auto  pt-0"
        style={{ paddingRight: "2rem" }}>
          <h3 className="mb-3 text-justify">¡Hola! Soy Alejandro Navarro, un estudiante de ingeniería informática dedicado, comprometido, creativo y apasionado por aprender y crecer profesionalmente en el desarrollo software.</h3>
          <h3 className="mb-3 text-justify">Como estudiante, estoy siempre aprendiendo y mejorando mis habilidades para estar al día de las últimas tendencias y tecnologías en el campo de la informática.</h3>
          <h3 className="mb-3 text-justify">En mi tiempo libre, me gusta hacer deporte y leer. Creo que es importante encontrar un equilibrio entre el trabajo y la vida personal para mantenerse saludable y motivado.</h3>
          <h3>Si está buscando un profesional motivado, con un enfoque en el éxito del equipo y la entrega de resultados de calidad, no dude en ponerse en <Link to={"/contacto"} className='font-bold underline'>contacto conmigo</Link>.</h3>
        </div>  

  <div className='p-4 md:p-14 w-full lg:mt-0 relative' style={{marginTop: '-5%'}}>
  <motion.img
    src={Photo}
    ref={refImage}
    alt="Not Photo Found"
    className={`m-auto rounded-full ring ring-[#02bff4] ring-offset-1 ring-offset-[#02bff4]`}
    initial={{ opacity: 0, scale: 0}}
    animate={{opacity: isInViewImage ? 1 : 0, scale:0.95}}
    transition={{ duration: 0.75}}
    whileHover={{scale:1.05}}
    onHoverStart={() => setVisibleBubble(true)}
    onHoverEnd={() => setVisibleBubble(false)}
  />
  {visibleBubble && 
  <motion.div 
    initial={{opacity:0}} 
    animate={{opacity:1}} 
    transition={{duration:0.5}} 
    className="chat chat-start absolute top-10 sm:top-10 right-0 sm:right-0 w-1/2 sm:w-2/5 max-w-screen-sm hidden sm:block">
      <div className='chat-header text-gray-300 flex items-center '>
        Alejandro Navarro 
        <MdVerified  size={12} style={{marginLeft:3}} color='#00B2FF'/>
      </div>
      <div className="chat-bubble bg-[#02bff4] text-white ">
        Hola! <br/> 
        Este soy yo 😉
      </div>
      <time className="text-xs opacity-100 ml-[105px] chat-footer text-gray-300">
        {formatTime(clock)}
      </time>
  </motion.div>
}

  <motion.div className=' text-center mt-3  w-fit m-auto font-bold  text-white  '
    initial={{ opacity: 0,scale:0}}
    animate={{opacity:1, scale:1}}
    transition={{ duration: 0.75}}>
      <h1 className='text-2xl tracking-wider'>ALEJANDRO</h1>
      <div className='text-xl'>NAVARRO DE LA CRUZ
      <div className='border w-full  mt-1'/></div>
      
      <h1 className='text-md mt-2'>Mencion: Ingenieria de Software</h1>
  </motion.div>
</div>
      </div>
      <FAQ/>
    </div>
)
}

export default About