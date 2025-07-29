import React from 'react'
import { abilities } from '../constants/index.js'

const FeatureCards = () => {
    return(                    
        <div className="w-full padding-x-lg" id="services" style={{marginTop: '60px', paddingTop: '200px'}}>
            <div className="text-center p-8">
                <h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bbg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-6xl font-bold mb-4 tracking-tigh cursor-pointer transition-all duration-300 hover:scale-105"
                    style={{
                        animation: "float 3s ease-in-out infinite",
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.animationPlayState = 'paused';
                        e.target.style.transform = 'translateY(-10px) scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.animationPlayState = 'running';
                        e.target.style.transform = 'translateY(0) scale(1)';
                    }}
                    onClick={(e) => {
                        e.target.style.transform = 'translateY(-15px) scale(1.1)';
                        setTimeout(() => {
                            e.target.style.transform = 'translateY(0) scale(1)';
                        }, 200);
                    }}
                >
                    Services
                </h1>
            </div>
            
            <div className="mx-auto grid-3-cols ">
                {abilities.map(({ imgPath, title, desc }) => (
                    <div
                        key={title}
                        className=" rounded-xl p-8 flex flex-col gap-4 bg-transparent rounded-2xl transition duration-500"
                    >
                        <div className="size-14 flex items-center justify-center rounded-full">
                            <img src={imgPath || "/placeholder.svg"} alt={title} />
                        </div>
                        <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
                        <p className="text-white-50 text-lg">{desc}</p>
                    </div>
                ))}
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
        </div>
    );
}

export default FeatureCards