import React from 'react';
import { useRef } from 'react';
import Curated from '../public/images/Curated.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger); {/* lets the page know a scrolling function is happening */}

const Showcase = () => {

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    
   
    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]; 

        projects.forEach(( card, index ) => {
            gsap.fromTo(
                card, 
                {
                    y: 50, opacity: 0
                },
                {
                    y: 0 ,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card, 
                        start: 'top bottom-=100'
                    }
                }
            )
        })
        gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })

    }, []);


    return (

        


        
        <section id="work" ref={sectionRef} about className="app-showcase">


            <div className="w-full">
                <div className="showcaselayout">
                {/*left */}
                <div className="first-project-wrapper" ref={project1Ref}>
                    <div className="image-wrapper">
                        <img src={Curated} alt="Curated Museum App" />
                    </div>
                    <div className="text-content space-y-5 mt-5 text-lg md:text-xl lg:text-2xl font-[1000] mt-5 ">
                        <h1>Museum App. user friendly app called Curated making it easy to explore ancient artifcats</h1>
                        <p className="text-white-50 md:text-xl font-light " >
                            Raect App built with HTML, CSS & Tailwind.
                        </p>
                    </div>
                </div>

            {/* Right */}
            <div className="project-list-wrapper overflow-hidden" >
                <div className="project" ref={project2Ref}>
                    <div className="image-wrapper bg-[#ffefdb]">
                        <img src={Curated} alt="Curated" />
                    </div>
                    <h2>ANother app here</h2>
                </div>

                <div className="project" ref={project3Ref}>
                    <div className="image-wrapper bg-[#ffe7eb]">
                        <img src={Curated} alt="Curated" />
                    </div>
                    <h2>ANother app here</h2>
                </div>
            </div>


            </div>

            
        </div>
         <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
            `}</style>
        </section>

        

        
        

                

                    
                  
                    

                   
                    
            
    )
}

export default Showcase