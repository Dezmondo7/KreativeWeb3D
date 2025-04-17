import React from 'react';
import images1 from '../public/images/bg.png';
import Concepts from '../public/images/concepts.svg';
import { words } from '../constants/index.js';
import Button from '../components/Button.jsx';
import HeroExperience from '../components/Heromodels/HeroExperience.jsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter.jsx';

const Hero = () => {
    
    {/*Animation for the hero text*/}
    useGSAP(() => {
        gsap.fromTo(
          ".hero-text h1",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.5, ease: "sine" }
        );
      });

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src={images1} alt="background" />
            </div>

            <div className="hero-layout">
                {/*LEFT HERO CONTENT}*/}
                <header className="flex flex-col justify center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                Developing
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word) => (
                                            <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                                <img
                                                    src={Concepts}
                                                    alt=""
                                                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white"
                                                />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>into Cool Websites</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                        <div>
                            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                                Hi I'm Luke a freelance Web Developer who is < br />
                                Passionate about Creating Immersive Websites <br />
                                across Desktop, Tablet & Mobile using the latest <br />
                                Technology including Interactive 3D Models
                            </p>
                            <p>
                                <Button
                                    className="md:w-80 md:h-16 w-60 h-12"
                                    id="button"
                                    text="See my work"
                                />
                            </p>
                        </div>
                    </div>
                </header>

                {/* right side 3d model */}
                <figure>
                    <div className=" hero-3d-layout flex items-center justify-center">
                        <HeroExperience />

                    </div>
                </figure>             
                
               
            </div>
        </section>
        
    )
}

export default Hero