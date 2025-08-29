import React, { useEffect, useRef, useState } from 'react';
import avatarLogo from '../assets/av.png';
import ReactIcon from '../assets/atom.png';
import JavaScriptLogo from '../assets/js.png';
import HtmlLogo from '../assets/html.png';
import NodeJS from '../assets/nodejs.png';
import GitLogo from '../assets/social.png';
import { Helmet } from 'react-helmet';

const AboutMe = () => {
  const [firstInView, setFirstInView] = useState(false);
  const firstCardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFirstInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (firstCardRef.current) observer.observe(firstCardRef.current);
  }, []);

  const skills = [
    { name: "React", level: "Advanced", icon: <img src={ReactIcon} alt="react logo" className="w-6 h-6" />, ref: firstCardRef },
    { name: "JavaScript", level: "Advanced", icon: <img src={JavaScriptLogo} alt="Javascript logo" className="w-6 h-6" /> },
    { name: "HTML/CSS", level: "Expert", icon: <img src={HtmlLogo} alt="Html logo" className="w-6 h-6" /> },
    { name: "Tailwind CSS", level: "Advanced", icon: "💨" },
    { name: "Node.js", level: "Advanced", icon: <img src={NodeJS} alt="Node JS logo" className="w-6 h-6" /> },
    { name: "Git", level: "Intermediate", icon: <img src={GitLogo} alt="Git logo" className="w-6 h-6" /> },
    { name: "Responsive Design", level: "Expert", icon: "📱" },
    { name: "UI/UX Design", level: "Advanced", icon: "✨" },
  ];

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Dale",
            "jobTitle": "React Front-End Developer",
            "url": "https://reaktwebdesign.co.uk",
            "sameAs": [
              "https://www.linkedin.com/in/dale-yourprofile",
              "https://github.com/dale-yourprofile"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Reakt Web Design"
            },
            "hasOccupation": {
              "@type": "Occupation",
              "name": "React Developer",
              "description": "Builds interactive, responsive, and scalable web experiences using React."
            }
          }
          `}
        </script>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-12">
            {/* Profile Image */}
            <div className="flex justify-center mb-12 mt-20 md:mt-30 lg:mt-40">
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-transparent overflow-hidden">
                    <img src={avatarLogo} alt="Image of Dale React Web Developer " className="w-full h-full object-cover " />
                  </div>
                </div>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>

            {/* Paragraphs */}
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-sm text-gray-200 leading-relaxed">
                Hi, I’m Dale - I’m a freelance React developer passionate about building modern, responsive web applications with clean UI/UX and smart, AI-powered features. I specialize in helping early-stage start-ups bring ideas to life quickly, from MVP to scalable products.

                </p>
                <p className="text-sm text-gray-200 leading-relaxed"> I graduated from an MITx course via EdX, graduating with 98% in 2024, reflecting my dedication to staying at the forefront of web technologies. I enjoy taking ownership of projects, integrating the latest tech, and collaborating closely with founders to create products that truly stand out.

                I’m open to freelance, contract, and start-up opportunities, and I thrive in environments where employees wear multiple hats and take initiative to solve problems. </p>

              
            </div>

            {/* Skills Section */}
            <div className="space-y-8 pt-12">
              <h3 className="text-lg text-white font-semibold">My Coding Skills</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    ref={skill.ref ? skill.ref : null}
                    className=" relative group p-4 bg-white/5 rounded-2xl border border-white/10 overflow-hidden cursor-pointer"
                    style={index === 0 && firstInView ? {
                      animation: 'wiggle 0.5s ease-in-out 2'
                    } : {}}
                  >
                    {/* Inline keyframes */}
                    {index === 0 && firstInView && (
                      <style>
                        {`
                        @keyframes wiggle {
                          0%, 100% { transform: rotate(-5deg); }
                          50% { transform: rotate(5deg); }
                        }
                      `}
                      </style>
                    )}

                    {/* Front: icon + name */}
                    <div className="flex flex-col items-center justify-center space-y-2 transition-opacity duration-500 group-hover:opacity-0">
                      <span className="text-2xl">{skill.icon}</span>
                      <h4 className="font-semibold text-white">{skill.name}</h4>
                    </div>

                    {/* Back: skill level */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-purple-900/80 to-transparent">
                      <span>Skill Level:</span>
                      <span>{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;