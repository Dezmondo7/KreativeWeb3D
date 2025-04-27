import React from 'react';
import { techStackIcons } from '../constants/index.js';
import TitleHeader from '../components/TitleHeader.jsx';
import TechIcon from '../components/TechLogos/TechIcon.jsx';

const Techstack = () => {
   return(
    <div>
        <div id="skills" className="flex-centre section-padding">
            <div className="w-full h-full md:px-10">
                <TitleHeader 
                title="My preferred Tech stack"
                sub="What Skills I have" />

                <div className="tech-grid">
                    {techStackIcons.map((icon) => (
                        <div key={icon.name} className="card-border tech card overflow-hidden group xl:rounded-full rounded-lg">
                            <div className="tech-card-animated-bg" />
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