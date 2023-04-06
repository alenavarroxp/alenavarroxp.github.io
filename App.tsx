import { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { motion } from 'framer-motion';
import NavBar from './components/SideBar/NavBar';
import Home from './components/Home/Home';
import { Routes, Route, useLocation, Router, BrowserRouter } from 'react-router-dom';
import About from './components/About/About';
import { Transition, TransitionGroup } from 'react-transition-group';
import { AnimatedSwitch } from './components/AnimatedSwitch/AnimatedSwitch';

function App() {
  const [isOpen, setIsOpen] = useState(false)
 
  return (
    <BrowserRouter>
      <div className="App relative overflow-hidden bg-[#3A3F46] min-h-screen">
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <AnimatedSwitch/>
      </div>
    </BrowserRouter>
  )
}


export default App;

