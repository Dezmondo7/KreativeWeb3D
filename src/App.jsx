import React from 'react'
import Hero from './sections/Hero.jsx'
import AnimatedCounter from './components/AnimatedCounter.jsx'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Showcase from './sections/Showcase.jsx';
import NavBar from './components/NavBar.jsx';
import FeatureCards from './sections/FeatureCards.jsx';
import Experience from './components/Experience.jsx';
import Techstack from './sections/Techstack.jsx';
import Testimonials from './sections/Testimonials.jsx'

const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <AnimatedCounter />
    <Showcase />
    <FeatureCards />
    <Experience />
    <Techstack />
    <Testimonials />
    </>
  )
}

export default App
