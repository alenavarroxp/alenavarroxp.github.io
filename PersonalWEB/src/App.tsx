import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion } from "framer-motion"
import NavBar from './components/SideBar/NavBar'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-[#3A3F46] h-screen w-screen">
      <NavBar/>
      <Home/>
    </div>
  )
}

export default App
