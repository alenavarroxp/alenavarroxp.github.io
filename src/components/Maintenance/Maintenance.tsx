import React, { useEffect, useRef } from "react";
import lottie from 'lottie-web'
import ErrorJSON from '../../images/98642-error-404.json'

function Maintenance() {
    const container = useRef<any>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: ErrorJSON
    });
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      
        <div className="absolute inset-0" ref={container}></div>
        <div className="absolute right-32 text-white font-bold text-center text-3xl"><p>Página en mantenimiento</p>
        <p className="font-thin text-xl">PRÓXIMAMENTE</p></div>
      </div>
    
  );
}

export default Maintenance;
