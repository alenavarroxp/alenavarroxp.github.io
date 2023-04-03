import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {MdKeyboardArrowDown} from 'react-icons/md'
import ReorderLanguages from './Reordered/ReorderLanguages';
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const panels = [
    {
      title: '¿Con qué has hecho esta web?',
      content:
       <ReorderLanguages/>
    },
    {
      title: '¿Cómo puedo cambiar mi contraseña?',
      content:
        'Para cambiar tu contraseña, debes ir a la sección de "Configuración de cuenta" y hacer clic en "Cambiar contraseña". Luego, sigue los pasos que se indican para completar el proceso.',
    },
    {
      title: '¿Puedo cancelar mi suscripción en cualquier momento?',
      content:
        'Sí, puedes cancelar tu suscripción en cualquier momento. Para hacerlo, ve a la sección de "Configuración de cuenta" y haz clic en "Cancelar suscripción". Si necesitas ayuda, ponte en contacto con nuestro equipo de soporte.',
    },
  ];

  const togglePanel = (index:any) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-3xl">
        <h1 className='text-white font-bold text-3xl'>Preguntas frecuentes</h1>
        <motion.div 
      animate={{transform:isInView ? "translateX(0px)" : "translateX(-350px)",
                opacity: isInView ? 1 : 0,}
              }
      ref={ref}
      className='text-white h-1 w-[40%] bg-gray-50 mb-2'>
    </motion.div>
      {panels.map((panel, index) => (
        <motion.div key={index} className={`border-b`}>
          <motion.div
            className={`flex justify-between items-center cursor-pointer ${index==0 ? 'rounded-xl':''} rounded-b-none py-4`}
            onClick={() => togglePanel(index)}
            initial={{ backgroundColor: 'transparent' }}
            animate={{ backgroundColor: activeIndex === index ? '#02bff4' : 'transparent' }}
            whileHover={{ backgroundColor: activeIndex === index ? '#02bff4' : '' }}
          >
            <motion.h3 className="font-semibold text-lg ml-3" animate={{color: activeIndex === index ? "white" : "lightgray",
            transition: { duration: 0.2 }}} >
              {panel.title}
            </motion.h3>
            <motion.svg
              
              className={`h-6 w-6 mr-2 transition-transform text-white ${activeIndex === index ? 'transform rotate-180' : ''}`}
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.1 }}
            >
              <MdKeyboardArrowDown size={27}/>
            </motion.svg>
          </motion.div>
          {activeIndex === index && (
            <motion.div
              className="p-4 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
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
