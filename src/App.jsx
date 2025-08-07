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
import Testimonials from './sections/Testimonials.jsx';
import LandingPage from './components/LandingPage.jsx';
import Footer from './components/Footer.jsx';
import ContactForm from './components/ContactForm.jsx';
import AboutMe from './components/AboutMe.jsx';
import FAQSection from './components/FAQSection.jsx';
import ReactSection from './components/ReactSection.jsx';

const App = () => {
  return (
    <>
    <NavBar />
    <LandingPage />
    {/*<Hero />*/}
    <AnimatedCounter />
    <Experience />
    <ReactSection />
    <AboutMe />
    {/*<Showcase />*/}
    <FeatureCards />
    {/*<Techstack /> */}
    <Testimonials />
    <FAQSection />
    <ContactForm />
    <Footer />
   
    </>
  )
}

export default App
