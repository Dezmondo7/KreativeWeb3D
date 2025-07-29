import React from 'react';
import { techStackIcons } from '../constants/index.js';
import TitleHeader from '../components/TitleHeader.jsx';
import TechIcon from '../components/TechLogos/TechIcon.jsx';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

const Techstack = () => {
    useGSAP(() => {
        gsap.fromTo('.tech-card', { y: 50, opacity: 0 } , {
            y: 0,
            opcaity: 1,
            duration: 1, 
            ease: 'power2.inOut',
            stagger: 2,
            scrollTriger: {
                trigger: '#skills',
                start: 'top center'

            }

        }
        )

    })

   return(
    <div>
        <div id="skills" className="flex-centre section-padding">
            <div className="w-full h-full md:px-10">
                <TitleHeader 
                title="Technology"
                sub="Web Development" />

                <div className="tech-grid">
                    {techStackIcons.map((icon) => (
                        <div key={icon.name} className="bg-transparent tech overflow-hidden group xl:rounded-full rounded-lg">
                           {/*} <div className="tech-card-animated-bg" />*/}
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">

                                    <TechIcon model={icon} />


                                </div>
                                <div className="">
                            {icon.name}
                            </div>
                            </div>

                            
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>

   )
}

export default Techstack