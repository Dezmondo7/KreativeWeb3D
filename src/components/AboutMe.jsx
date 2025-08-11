import React from 'react';
import avatarLogo from '../assets/av2.png';
import javascriptIcon from '../assets/javascript.png';

const AboutMe = () => {
  const skills = [
    { name: "React", level: "Advanced", icon: "⚛️" },
    { name: "JavaScript", level: "Advanced", icon: "🟨" },
    { name: "HTML/CSS", level: "Expert", icon: "🎨" },
    { name: "Tailwind CSS", level: "Advanced", icon: "💨" },
    { name: "Node.js", level: "Advanced", icon: "🟢" },
    { name: "Git", level: "Intermediate", icon: "📝" },
    { name: "Responsive Design", level: "Expert", icon: "📱" },
    { name: "UI/UX Design", level: "Advanced", icon: "✨" },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert":
        return "transparent";
      case "Advanced":
        return "transparent";
      case "Intermediate":
        return "from-navy-400 via-navy-400 to-purple-600";
      default:
        return "from-gray-400 to-gray-600";
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-12">
          {/* Profile Image */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-transparent overflow-hidden">
                  <img
                    src={avatarLogo}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Updated Heading to match ReactSection */}
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About Me
          </h2>

          {/* Updated paragraph font size & color */}
          <div className="max-w-3xl mx-auto space-y-6">
            
            <p className="text-sm text-gray-200 leading-relaxed">
              Hi, I’m Dale — a front-end web developer specializing in React with 8+ years of IT experience. I’ve supported enterprise clients like Müller and Evri (Hermes) on technology projects, bringing valuable business insight to every collaboration. 
            </p>

             
            <p className="text-sm text-gray-200 leading-relaxed">
             Certified with a 98% score in front-end development via edX, I build responsive, engaging digital experiences that help businesses grow. When I’m not working on client projects, I’m exploring the latest web technologies, contributing to open-source projects, or enjoying a good cup of coffee while experimenting with new front-end tools. I believe in the power of clean code, intuitive user interfaces, and the magic that happens when creativity meets functionality.
            </p>
          </div>

          {/* Personal Stats */}
       {/*}   <div className="flex flex-wrap justify-center gap-4 pt-6">
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-cyan-400 font-bold text-lg">50+</span>
              <span className="text-gray-300 ml-2">Projects Completed</span>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-purple-400 font-bold text-lg">8+</span>
              <span className="text-gray-300 ml-2">Years IT Experience</span>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-cyan-400 font-bold text-lg">24/7</span>
              <span className="text-gray-300 ml-2">Learning Mode</span>
            </div>
          </div> */}

          {/* Skills Section */}
          <div className="space-y-8 pt-12">
            <h3 className="text-lg text-white font-semibold">
              My Coding Skills
            </h3>
             
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative p-4 bg-white/5 absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent rounded-2xl rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <h4 className="font-semibold text-white">{skill.name}</h4>
                  </div>
             
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;