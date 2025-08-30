import React from 'react';
import { motion } from 'framer-motion';

const cards = [
{
  title: "React: The Engine Behind Modern Websites",
  description: "React is a powerful JavaScript library developed by Meta that powers fast, interactive user interfaces. Think of it as the engine that makes your website smooth, dynamic, and built for the future."
},
{
  title: "Speed That Keeps Visitors Engaged & Conversions High",
  description: "React updates only what’s necessary, keeping your site lightning-fast. Whether you have 10 pages or 10,000, it handles growth seamlessly — meaning lower bounce rates, happier visitors, and more conversions."
},
{
  title: "Built for Dynamic & Interactive Experiences",
  description: "From animations to live content updates, React delivers an engaging, modern experience that keeps users coming back."
},
{
  title: "SEO-Friendly by Design",
  description: "React’s flexibility allows for smart SEO strategies that boost your Google rankings and attract the right audience."
},
{
  title: "Secure & Stable",
  description: "React’s architecture helps minimize security risks. Paired with our encrypted hosting, your site stays protected, reliable, and ready for anything."
},
{
  title: "Smarter Development, Faster Updates",
  description: "At Reakt Web Design, we use React’s component-based approach to create reusable, maintainable code — meaning quicker builds, easier updates, and better value for you."
}
];

function BentoCard({ title, description, custom }) {
  return (
    <motion.div
      className="overflow-hidden rounded-2xl border border-white/10 flex flex-col justify-start items-start relative group
                 transition-transform duration-200 ease-out hover:scale-[1.01] cursor-pointer"
      initial={{ opacity: 0, y: 50, rotate: -3, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: custom * 0.15, type: "spring", stiffness: 70 }}
    >
      {/* Blurred background */}
      <div
        className="absolute inset-0 rounded-2xl transition-all duration-200 ease-out"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent rounded-2xl
                   transition-colors duration-200 ease-out group-hover:from-purple-800/15"
      />

      {/* Content */}
      <div className="p-6 flex flex-col justify-start items-start gap-2 relative z-10 min-h-[180px]">
        <div className="flex flex-col gap-1.5">
          <p className="text-white text-lg font-semibold">{title}</p>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function ReactSection() {
  return (
    <>
    <section className="relative w-full py-20 px-5 bg-gradient-to-br from-black to-black-900/20">
      {/* Glow blob background */}
      <div className="absolute top-[60%] left-[25%] w-[400px] h-[500px] bg-purple-600/20 blur-[100px] rounded-full z-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center gap-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 mt-20 md:mt-30 lg:mt-40">
            Empower Your Website with React
          </h2>
          <p className="text-gray-400 text-lg">
            Why React Is the Framework Behind Modern, Lightning-Fast Websites.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {cards.map((card, i) => (
            <BentoCard key={card.title} title={card.title} description={card.description} custom={i} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default ReactSection;