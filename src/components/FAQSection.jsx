import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "What is React and what does it do?",
    answer:
      "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more seamless. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.",
  },
  {
    question: "Do you provide hosting, security, and maintenance?",
    answer:
      "Absolutely. We provide secure hosting with encryption-level protection. As part of building your website, we also offer ongoing maintenance, updates, and upgrades to ensure your platform stays modern, safe, and fully functional.",
  },
  {
    question: "Can I integrate Pointer with my existing tools?",
    answer:
      "Yes! Pointer offers one-click integrations with popular development tools including GitHub, GitLab, VS Code, Slack, and many more. Our MCP connectivity allows you to easily manage and configure server access across your entire development stack.",
  },
  {
    question: "What's included in the free plan?",
    answer:
      "The free plan includes real-time code suggestions, basic integrations, single MCP server connection, up to 2 AI coding agents, and Vercel deployments with Pointer branding. It's perfect for individual developers getting started.",
  },
  {
    question: "How do parallel coding agents work?",
    answer:
      "Our parallel coding agents can work on different parts of your codebase simultaneously, solving complex problems faster than traditional single-threaded approaches. You can launch multiple agents to handle different tasks like bug fixes, feature development, and code optimization concurrently.",
  },
  {
    question: "Is my code secure with Pointer?",
    answer:
      "Absolutely. We use enterprise-grade security measures including end-to-end encryption, secure data transmission, and compliance with industry standards. Your code never leaves your secure environment without your explicit permission, and we offer on-premises deployment options for enterprise customers.",
  },
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className="w-full border border-purple-500/20 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:border-cyan-400/50 cursor-pointer"
      onClick={onToggle}
    >
      <div className="flex justify-between items-center px-5 py-4 text-white">
        <div className="text-base font-medium">{question}</div>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 py-2 px-5' : 'max-h-0 opacity-0 py-0 px-5'
        }`}
      >
        <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

function FAQSection() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="relative w-full py-20 px-5 bg-gradient-to-br from-black to-black-900/20 mt-40">
      {/* Glow / Blur background blob */}
      <div className="absolute top-[150px] left-1/2 -translate-x-1/2 w-[300px] h-[500px] bg-purple-600/20 blur-[100px] z-0 rotate-[-30deg] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-white text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-sm">
          Everything you need to know about Reakt Web Design and how we can transform your requirements.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="relative z-10 max-w-2xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default FAQSection;