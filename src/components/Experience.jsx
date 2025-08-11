import React from 'react';
import TitleHeader from './TitleHeader';
import { expCards } from '../constants/index';
import GlowCard from '../components/GlowCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray('.timeline-card').forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: 'left left',
        duration: 1,
        ease: 'Power2.inOut',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      });
    });

    gsap.to('.timeline', {
      transformOrigin: 'bottom bottom',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top center',
        end: '70% center',
        onUpdate: (self) => {
          gsap.to('.timeline', {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray('.expText').forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: 'Power2.inOut',
        scrollTrigger: {
          trigger: text,
          start: 'top 60%',
        },
      });
    });
  }, []);

  return (
    <section id="about" className="w-full section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        {/*}  <TitleHeader title="Reakt Web Design" sub="" /> */}
        <div className="text-center max-w-2xl mx-auto">
          <h2
            className="mt-20 md:mt-30 lg:mt-40 text-4xl md:text-5xl font-extrabold mb-20 bg-gradient-to-r from-cyan-400 to-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] tracking-wide"
          >
            Reakt Web Design
          </h2>
          <p className="text-gray-400 text-lg mt-5">
            {/* Optional tagline */}
          </p>
        </div>


        <div className="relative">

          <div className="relative z-50 xl:space-y-32 space-y-10">

            {expCards.map((card, index) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <div>
                      <img src={card.imgPath} alt={card.imgPath} />
                    </div>
                  </GlowCard>
                </div>

                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>

                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" />
                      </div>

                      <div>
                        <h1 className="text-white text-3xl font-bold">{card.title}</h1>
                        <p className="my-2 text-gray-400 text-base italic">
                          {card.date}
                        </p>

                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-4 text-gray-4200 text-base leading-relaxed">
                          {card.responsibilities.map((responsibility) => (
                            <li key={responsibility}>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;