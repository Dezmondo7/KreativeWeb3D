import React from 'react'
import Hero from './sections/Hero.jsx'
import AnimatedCounter from './components/AnimatedCounter.jsx'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const App = () => {
  return (
    <>
    <Hero />
    <AnimatedCounter />
    </>
  )
}

export default App
