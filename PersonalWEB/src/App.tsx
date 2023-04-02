import { useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { motion } from 'framer-motion';
import NavBar from './components/SideBar/NavBar';
import Home from './components/Home/Home';
import { Routes, Route, useLocation, Router, BrowserRouter } from 'react-router-dom';
import About from './components/About/About';
import { Transition, TransitionGroup } from 'react-transition-group';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <BrowserRouter>
      <div className="App bg-[#3A3F46] h-screen w-screen">
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <AnimatedSwitch/>
      </div>
    </BrowserRouter>
  )
}

const AnimatedSwitch = () => {
  const location = useLocation();
  
  const variants = {
    enter: {
      x: '-100%',
      opacity: 0,
    },
    center: {
      zIndex:1,
      x: '0%',
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      x: '100%',
      opacity: 0,
    },
  };

  const transition = {
    type: 'spring',
    mass: 0.35,
    stiffness: 75,
    duration: 0.4,
  };

  return(
    <Routes>
      <Route path='/' element={<HomeContainer variants={variants} transition={transition} location={location} />} />
      <Route path='sobre-mi' element={<AboutContainer variants={variants} transition={transition} location={location} />} />
    </Routes>
  )
} 

const HomeContainer = ({ variants, transition, location }:any) => (
  <motion.div
    initial="enter"
    animate="center"
    exit={"exit"}
    variants={variants}
    transition={transition}
    key={location.key}
  >
    <Home />
  </motion.div>
);

const AboutContainer = ({ variants, transition, location }:any) => (
  <motion.div
    initial="enter"
    animate="center"
    exit="exit"
    variants={variants}
    transition={transition}
    key={location.key}
  >
    <About />
  </motion.div>
);

export default App;

