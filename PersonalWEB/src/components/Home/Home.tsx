import { animate, easeOut, motion } from 'framer-motion'
import {CSSTransition, SwitchTransition} from 'react-transition-group'
import React, { useEffect, useState } from 'react'
import './Home.css'

function Home() {
  const arrayOfWords = ['Alejandro Navarro','Ingeniero Informático','Profesional','Desarrollador software','Creativo']
  const  [paragraph, setParagraph] = useState('')
  const [paragraphCounter, setParagraphCounter] = useState(0)
  const [time,setTime] = useState(4000)
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


  return (
    <div className='top-0 h-screen bottom-0 flex justify-center items-center'>
      <p className="text-3xl font-bold text-white">Soy</p>
      <SwitchTransition>
        <CSSTransition classNames={"slide-up"} key={arrayOfWords[paragraphCounter]} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}>
          
          <div className='ml-2.5 text-4xl font-bold text-white text-right animate__backInUp '>{arrayOfWords[paragraphCounter]}</div> 
        </CSSTransition>
      </SwitchTransition>
     
     </div>
  )
}

export default Home