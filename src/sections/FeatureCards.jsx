import React, { useState, useRef, useEffect } from 'react';
import { abilities } from '../constants/index.js';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const cardVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ServiceCard = ({ imgPath, title, desc, index, displayText }) => {
  return (
    <motion.div
      key={title}
      className="relative overflow-hidden rounded-2xl border border-white/10 flex flex-col justify-start items-start bg-[rgba(255,255,255,0.05)] backdrop-blur-md hover:border-white/20 transition duration-500 p-8 gap-4"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, delay: index * 0.2 }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent rounded-2xl pointer-events-none" />

      <div className="relative z-10 flex items-center justify-center rounded-full w-14 h-14 mb-4">
        <img src={imgPath || '/placeholder.svg'} alt={title} />
      </div>
      <h3 className="relative z-10 text-white text-lg font-semibold">{title}</h3>
      <p className="relative z-10 text-gray-400 text-sm leading-relaxed">{displayText}</p>
    </motion.div>
  );
};

const FeatureCards = () => {
  const [typedTexts, setTypedTexts] = useState(abilities.map(() => ''));
  const charIndexRef = useRef(0);
  const cardIndexRef = useRef(0);
  const typingIntervalRef = useRef(null);
  const containerRef = useRef(null);

  const TYPING_SPEED = 20;

  // Trigger typewriter effect on scroll into view, all devices
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTypingSequence();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const startTypingSequence = () => {
    if (typingIntervalRef.current) return;

    const typeNextChar = () => {
      const currentCardIndex = cardIndexRef.current;
      const currentDesc = abilities[currentCardIndex]?.desc || '';
      const currentTypedText = typedTexts[currentCardIndex];

      if (charIndexRef.current < currentDesc.length) {
        // add next char
        const nextChar = currentDesc.charAt(charIndexRef.current);
        setTypedTexts((prev) => {
          const copy = [...prev];
          copy[currentCardIndex] = copy[currentCardIndex] + nextChar;
          return copy;
        });
        charIndexRef.current += 1;
      } else {
        // finished current card, move to next card
        charIndexRef.current = 0;
        cardIndexRef.current += 1;

        if (cardIndexRef.current >= abilities.length) {
          clearInterval(typingIntervalRef.current);
          typingIntervalRef.current = null;
        }
      }
    };

    typingIntervalRef.current = setInterval(typeNextChar, TYPING_SPEED);
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto px-6 mt-40" id="services" ref={containerRef}>
          <Helmet>
        <title>Web Design & Development Services | Reakt Web Design</title>
        <meta
          name="description"
          content="Explore Reakt Web Design's services: web design, development, branding, and app solutions. Innovative, minimalist, and startup-friendly designs."
        />
        <meta name="robots" content="index, follow" />

        {/* Structured Data for Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "provider": {
              "@type": "Organization",
              "name": "Reakt Web Design",
              "url": "https://yourwebsite.com"
            },
            "serviceType": "Web Design, Development & Branding",
            "areaServed": "Global",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services Offered",
              "itemListElement": abilities.map((ability, i) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": ability.title,
                  "description": ability.desc,
                },
                "position": i + 1,
              })),
            },
          })}
        </script>
      </Helmet>
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 mt-20 md:mt-30 lg:mt-40">
          Services
        </h2>
        <p className="text-gray-400 text-lg">Complete Web Services, Design, Develop & Secure.</p>
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
              displayText={typedTexts[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;