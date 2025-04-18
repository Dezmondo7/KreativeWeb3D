import React from 'react';
import Curated from '../public/images/Curated.png';

const Showcase = () => {
    return (
        <div id="work" className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                {/*left */}
                <div className="first-project-wrapper">
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
                <div className="project">
                    <div className="image-wrapper bg-[#ffefdb]">
                        <img src={Curated} alt="Curated" />
                    </div>
                    <h2>ANother app here</h2>
                </div>

                <div className="project">
                    <div className="image-wrapper bg-[#ffe7eb]">
                        <img src={Curated} alt="Curated" />
                    </div>
                    <h2>ANother app here</h2>
                </div>
            </div>


            </div>
        </div>
        </div>

        
        

                

                    
                  
                    

                   
                    
            
    )
}

export default Showcase