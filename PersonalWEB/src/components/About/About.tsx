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
    <div className='ml-[350px] top-8'>
  <div className=' w-fit relative top-6'>
    <h1 className='text- text-4xl font-bold text-white'>
      Sobre mi
    </h1>
    <motion.div 
      animate={{transform:isInView ? "translateX(0px)" : "translateX(-350px)",
                opacity: isInView ? 1 : 0,}
              }
      ref={ref}
      className='text-white h-1 w-30 bg-gray-50'>
    </motion.div>
  </div>

  <div className='flex  mt-8 flex-row'>
    <div className='text-white text-lg w-[95vm] max-w-[800px] text-justify'>
      <h3 className='mb-3 '>¡Hola! Soy Alejandro Navarro, un estudiante de ingeniería informática dedicado, comprometido,
        creativo y apasionado por aprender y crecer profesionalmente en el desarrollo software.
      </h3>
      <h3 className='mb-3'>
        Como estudiante, estoy siempre aprendiendo y mejorando mis habilidades para estar al dia de las últimas 
        tendencias y tecnologias en el campo de la informatica.
      </h3>
      <h3 className='mb-3'>
        En mi tiempo libre, me gusta hacer deporte y leer. Creo que es importante encontrar un equilibrio 
        entre el trabajo y la vida personal para mantenerse saludable y motivado.
      </h3>
      <h3>
        Si está buscando un profesional motivado, con un enfoque en el éxito del equipo y la entrega
        de resultados de calidad, no dude en ponerse en <Link to={"/contacto"} className='font-bold'>contacto conmigo</Link>.
      </h3>
    </div>

    <div className='p-14 w-[50%] 'style={{marginTop: '-5%'}}>
    
    <motion.img
  src={Photo}
  alt="Not Photo Found"
  className={`m-auto rounded-full ring ring-[#02bff4] ring-offset-1 ring-offset-[#02bff4]`}
  
  initial={{ opacity: 0, scale: 0}}
  animate={{
    
    opacity: isInView ? 1 : 0,
    scale:0.95
  }}
  transition={{ duration: 0.75}}
  whileHover={{scale:1.05}}
  onHoverStart={() => setVisibleBubble(true)}
  onHoverEnd={() => setVisibleBubble(false)}
>
  
  </motion.img>
  
  {visibleBubble && <motion.div initial={{opacity:0}} 
          animate={{opacity:1}} transition={{duration:0.5}} className="chat chat-start absolute top-16 right-12 w-56  ">
        <div className='chat-header text-gray-300 flex items-center'>Alejandro Navarro <MdVerified  size={12} style={{marginLeft:3}} color='#00B2FF'/>
        </div>
        <div className="chat-bubble bg-[#02bff4] text-white ">Hola! <br/> Este soy yo 😉</div>
        <time className="text-xs opacity-100 ml-[105px] chat-footer text-gray-300">{formatTime(clock)}</time>
     </motion.div>}
<motion.div className=' text-center mt-3 font-bold  text-white  '
  initial={{ opacity: 1}}
  
  transition={{ duration: 0.75}}>
    <h1 className='text-2xl tracking-wider'>ALEJANDRO </h1>
    <h1 className='text-xl'>NAVARRO DE LA CRUZ</h1>
    
    <div className='border m-auto w-64 mt-1'/>
    <h1 className='text-md  mt-2'>Mencion: Ingenieria de Software</h1>
  </motion.div>
      
    </div>
    
    
    
  </div>
  
  <FAQ/>
  
  
  
</div>
)
}

export default About