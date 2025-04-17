import React from 'react'
import Hero from './sections/Hero.jsx'
import AnimatedCounter from './components/AnimatedCounter.jsx'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Showcase from './sections/Showcase.jsx';

const App = () => {
  return (
    <>
    <Hero />
    <AnimatedCounter />
    <Showcase />
    </>
  )
}

export default App
