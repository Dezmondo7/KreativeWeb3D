import React from 'react'
import Hero from './sections/Hero.jsx'
import AnimatedCounter from './components/AnimatedCounter.jsx'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Showcase from './sections/Showcase.jsx';
import NavBar from './components/NavBar.jsx'
<<<<<<< HEAD
import FeatureCards from './sections/FeatureCards.jsx'
=======
import FeatureCards from './components/Featurecards.jsx'
>>>>>>> 819831068dd3faac2f6cefaf8e8d224977a18838

const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <AnimatedCounter />
    <Showcase />
    <FeatureCards />
    </>
  )
}

export default App
