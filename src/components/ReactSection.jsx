import React from 'react';

const cards = [
  {
    title: "React: The Engine Behind Modern Websites",
    description: "React is a powerful JavaScript library developed by Meta that helps build fast, interactive user interfaces. Think of it as the engine that makes websites feel smooth, dynamic, and responsive — without constant page reloads.",
  },
  {
    title: "Why Your Website Deserves React",
    description: "React keeps your site lightning-fast by updating only what’s necessary — meaning lower bounce rates and happier visitors. Whether your site has 10 pages or 10,000, React handles it seamlessly, making it the perfect foundation to grow with your business.",
  },
  {
    title: "How We Work with React",
    description: "At Reakt Web Design, we leverage React’s component-based architecture to build reusable, maintainable code. This means faster development times and easier updates, keeping your site cutting-edge without breaking the bank.",
  },
  {
    title: "SEO-Friendly – Higher Google Rankings",
    description: "React’s flexibility allows us to apply smart SEO strategies and keyword targeting so your site ranks higher in Google search results and attracts more visitors.",
  },
  {
    title: "Great for Dynamic & Interactive Experiences",
    description: "React shines when creating dynamic content. A more engaging, modern experience means better retention, higher conversions, and a professional first impression.",
  },
  {
    title: "Secure & Stable by Design",
    description: "React’s architecture helps minimize security risks, and when paired with our secure, encrypted hosting, your site stays protected and stable — giving you peace of mind.",
  },

];

function BentoCard({ title, description }) {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-white/10 flex flex-col justify-start items-start relative group
                 transition-transform duration-200 ease-out hover:scale-[1.01] cursor-pointer"
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
    </div>
  );
}

// ✅ This is the actual exported section component
function ReactSection() {
  return (
    <section className="relative w-full py-20 px-5 bg-gradient-to-br from-black to-black-900/20 mt-40">
      {/* Glow blob background */}
      <div className="absolute top-[50%] left-[30%] w-[400px] h-[600px] bg-purple-600/20 blur-[100px] rounded-full z-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center gap-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Empower Your Website with React
          </h2>
          <p className="text-gray-400 text-lg">
            Why React Is the Framework Behind Modern, Lightning-Fast Websites.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {cards.map((card) => (
            <BentoCard key={card.title} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReactSection;