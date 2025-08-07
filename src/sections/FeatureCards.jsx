import React from 'react';
import { abilities } from '../constants/index.js';

const FeatureCards = () => {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto px-6 mt-40" id="services">
      {/* Section Title */}
      <div className="text-center p-8 relative z-10">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight transition-all duration-300 hover:scale-105"
          style={{
            animation: 'float 3s ease-in-out infinite',
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

      {/* Card Grid with Glow Background */}
      <div className="relative z-10 mt-10">
        {/* Glow Blob Positioned Behind Cards */}
        <div className="absolute top-[50%] left-[20%] w-[200px] h-[200px] bg-purple-600/20 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute bottom-[65%] right-[10%] w-[400px] h-[200px] bg-purple-600/20 blur-[120px] rounded-full z-0 pointer-events-none" />
        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {abilities.map(({ imgPath, title, desc }) => (
            <div
              key={title}
              className="relative overflow-hidden rounded-2xl border border-white/10 flex flex-col justify-start items-start bg-[rgba(255,255,255,0.05,)] backdrop-blur-md hover:border-white/20 transition duration-500 p-8 gap-4"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent rounded-2xl pointer-events-none" />

              <div className="relative z-10 flex items-center justify-center rounded-full size-14 mb-4">
                <img src={imgPath || '/placeholder.svg'} alt={title} />
              </div>
              <h3 className="relative z-10 text-white text-lg font-semibold">{title}</h3>
              <p className="relative z-10 text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating animation keyframes */}
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
};

export default FeatureCards;