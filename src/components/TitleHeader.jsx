import React from 'react'

const TitleHeader = ({title, sub }) => {
    return(
        <div className="flex flex-col items-center gap-5">
            
           <div className="inline-flex  items-center px-4 py-2 mb-8">
                <p className="">{sub}</p>
                <div className="md:text-5xl text-center">
                </div> 
            </div> 
            

              <div className="text-center p-8">
                <h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-transparent text-6xl font-bold mb-4 tracking-tigh cursor-pointer transition-all duration-300 hover:scale-105"
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
                    {title}
                </h1>
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
    )
}

export default TitleHeader