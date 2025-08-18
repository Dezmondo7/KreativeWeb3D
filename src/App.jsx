import React from 'react'
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
import PricingSection from './components/pricing.jsx'
import Work from './components/Work.jsx'
import AiCreative from './components/AiCreative.jsx'

const App = () => {
  return (
    <>
    <NavBar />
    <LandingPage />
    {/*<Hero />*/}
    <AnimatedCounter />
    <Experience />
    <AboutMe />

    <AiCreative />

    <ReactSection />
    <Work />
    {/*<Showcase />*/}
    <FeatureCards />
    {/*<Techstack /> */}
    <FAQSection />
    <Testimonials />
    <PricingSection />
    <ContactForm />
    <Footer />
   
    </>
  )
}

export default App
