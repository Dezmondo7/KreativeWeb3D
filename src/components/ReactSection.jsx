import React from 'react';

const cards = [
    {
    title: "What is React?",
    description: "React is a powerful JavaScript library developed by Meta that helps build fast, interactive user interfaces. Think of it as the engine that makes websites feel smooth, dynamic, and responsive — without constant page reloads.",
  },
  {
    title: "Why we use React?",
    description: "React updates only the parts of the page that change, making your site lightning fast. Whether your site has 10 pages or 10,000, React handles it seamlessly making it the perfect foundation to grow with your business.",
  },
  {
    title: "How we work with React",
    description: "At Reakt Web Design, we leverage React’s component-based architecture to build reusable, maintainable code. This means faster development times and easier updates, keeping your site cutting-edge without breaking the bank.",
  },
  {
   title: "SEO-Friendly – Higher Google Rankings",
description: "We optimize every React site we build with smart SEO techniques and keyword targeting, helping your website rank higher in Google search results and attract more visitors."
  },
  {
    title: "Great for Dynamic & Interactive experiences",
    description: "React shines in creating dynamic content. More engaging, modern experience = better rentention, higher conversions and professional impression.",
  },
  {
    title: "Secure & Stable by Design",
    description: "React has no known vulnerabilities, and when paired with our secure, encrypted hosting, your site stays protected and stable — giving you peace of mind.",
  },
];

function BentoCard({ title, description }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 flex flex-col justify-start items-start relative group">
      {/* Blurred background */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent rounded-2xl" />

      {/* Content */}
      <div className="p-6 flex flex-col justify-start items-start gap-2 relative z-10 min-h-[180px]">
        <div className="flex flex-col gap-1.5">
          <p className="text-white text-lg font-semibold">
            {title}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
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