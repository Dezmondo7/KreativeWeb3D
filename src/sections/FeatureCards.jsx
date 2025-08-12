import React, { useState, useRef, useEffect } from 'react';
import { abilities } from '../constants/index.js';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ServiceCard = ({ imgPath, title, desc, index, isMobile, autoStart }) => {
  const [displayText, setDisplayText] = useState('');
  const [done, setDone] = useState(false);
  const isTypingRef = useRef(false);
  const intervalRef = useRef(null);
  const charIndexRef = useRef(0);
  const isMounted = useRef(true);
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const TYPING_SPEED = 20;

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const startTyping = () => {
    if (done || isTypingRef.current) return;

    isTypingRef.current = true;
    intervalRef.current = setInterval(() => {
      const i = charIndexRef.current;
      if (i < desc.length) {
        if (isMounted.current) {
          setDisplayText((prev) => prev + desc.charAt(i));
        }
        charIndexRef.current += 1;
      }
      if (charIndexRef.current >= desc.length) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        isTypingRef.current = false;
        if (isMounted.current) {
          setDone(true);
        }
      }
    }, TYPING_SPEED);
  };

  // Trigger typing only if on mobile, autoStart is true, and card is in view
  useEffect(() => {
    if (isMobile && autoStart && inView) {
      startTyping();
    }
  }, [isMobile, autoStart, inView]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      startTyping();
    }
  };

  return (
    <motion.div
      ref={containerRef}
      key={title}
      className="relative overflow-hidden rounded-2xl border border-white/10 flex flex-col justify-start items-start bg-[rgba(255,255,255,0.05,)] backdrop-blur-md hover:border-white/20 transition duration-500 p-8 gap-4"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, delay: index * 0.2 }}
      onMouseEnter={handleMouseEnter}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent rounded-2xl pointer-events-none" />

      <div className="relative z-10 flex items-center justify-center rounded-full size-14 mb-4">
        <img src={imgPath || '/placeholder.svg'} alt={title} />
      </div>
      <h3 className="relative z-10 text-white text-lg font-semibold">{title}</h3>
      <p className="relative z-10 text-gray-400 text-sm leading-relaxed">{displayText}</p>
    </motion.div>
  );
};

const FeatureCards = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [autoStartIndex, setAutoStartIndex] = useState(0);

  // Detect mobile/tablet screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1366);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-type cards sequentially on mobile/tablet
  useEffect(() => {
    if (!isMobile) return;

    if (autoStartIndex < abilities.length) {
      // Trigger next card's autoStart after previous finishes + 500ms pause
      const timeout = setTimeout(() => {
        setAutoStartIndex((prev) => prev + 1);
      }, (abilities[autoStartIndex]?.desc.length ?? 0) * 20 + 500);

      return () => clearTimeout(timeout);
    }
  }, [autoStartIndex, isMobile]);

  return (
    <div className="relative w-full max-w-screen-xl mx-auto px-6 mt-40" id="services">
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 mt-20 md:mt-30 lg:mt-40">
          Services
        </h2>
        <p className="text-gray-400 text-lg">
          Complete Web Services, Design, Develop & Secure.
        </p>
      </div>

      {/* Card Grid with Glow Background */}
      <div className="relative z-10 mt-10">
        {/* Glow Blobs */}
        <div className="absolute top-[50%] left-[20%] w-[200px] h-[200px] bg-purple-600/20 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute bottom-[65%] right-[10%] w-[400px] h-[200px] bg-purple-400/20 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute bottom-[15%] right-[10%] w-[400px] h-[300px] bg-purple-400/20 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute bottom-[65%] right-[70%] w-[400px] h-[450px] bg-purple-400/20 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute bottom-[60%] right-[40%] w-[200px] h-[300px] bg-purple-400/20 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute bottom-[10%] right-[80%] w-[200px] h-[200px] bg-purple-600/20 blur-[120px] rounded-full z-0 pointer-events-none" />

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {abilities.map(({ imgPath, title, desc }, index) => (
            <ServiceCard
              key={title}
              imgPath={imgPath}
              title={title}
              desc={desc}
              index={index}
              isMobile={isMobile}
              autoStart={index === autoStartIndex}
            />
          ))}
        </div>
      </div>

      {/* Floating animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
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