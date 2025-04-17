import React from 'react';
import Curated from '../public/images/Curated.png';
import '../index.css'

const Showcase = () => {
    return (
        <div id="work" className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/*left side */}
                    <div className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src={Curated} alt="Curated" />
                        </div>
                        <div className="text-content">
                            <h2>Museum App created to navigate through time and ancient artifacts. user friendly app called Curated</h2>
                        <p className="text-white-50 md:text-xl"> An app built wit HTML, CSS, Tailwind & Javascript
                        </p>
                        <div className="project-list-wrapper overflow hidden">
                    <div className="project">
                        <div className="image-wrapper bg-[#FFEFDB]">
                            <img src={Curated} />
                        </div>
                        <p>HELLLOOO</p>
                    </div>
                </div>
                        
                        </div>
                    </div>  
                    {/* Right */}
                    <div className="project-list-wrapper overflow hidden">
                    <div className="project">
                        <div className="image-wrapper bg-[#FFEFDB]">
                            <img src={Curated} />
                        </div>
                        <p>HELLLOOO</p>
                    </div>
                </div>

                

                    
                  
                    

                   
                    
                 </div>
            </div>
        </div>
    )
}

export default Showcase