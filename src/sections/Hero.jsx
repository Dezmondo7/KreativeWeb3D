import React from 'react';
import images1 from '../public/images/bg.png';
import Concepts from '../public/images/concepts.svg';
import { words } from '../constants/index.js';
import Button from '../components/Button.jsx';


const Hero = () => {
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
                                Creating
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
                            <h1>into Beautiful Websites</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            My name is Luke, a developer with a passion for using the latest tech to code!
                        </p>
                        <p>
                            <Button
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="See my work"
                            />
                        </p>
                    </div>
                </header>
            </div>
        </section>
    )
}

export default Hero