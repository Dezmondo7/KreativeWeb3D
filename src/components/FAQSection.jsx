import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet';

const faqData = [
  {
    question: "What’s the real difference between React and WordPress?",
    answer:
      "React is perfect if you want a lightning-fast, modern, and fully custom website that’s designed specifically for your business. It’s ideal for interactive features, animations, and a smooth, app-like user experience. WordPress is a great tool for simple, template-driven sites — but React gives you the creative freedom to stand out and scale without limitations.",
  },
  {
    question: "Why invest in a custom React site instead of using a free template?",
    answer:
      "Free templates can be a quick fix, but they often look generic, load slowly, and limit what you can do as your business grows. A custom React site is built specifically for your brand — it’s faster, more secure, fully responsive, and tailored to your goals. Plus, you own the design and code, so you’re not stuck with cookie-cutter layouts or platform restrictions.",
  },
  {
    question: "Can you help with website refreshes or updates?",
    answer:
      "Absolutely! Whether you need a full rebuild or just want to refresh your current front-end with modern React and Tailwind designs, I can tailor a solution that fits your needs.",
  },
  {
    question: "Do you provide hosting and security?",
    answer:
      "Yes — every new website build includes one year of hosting and security. We can also help you choose a domain, transfer an existing one, and even design a completely new site from scratch.",
  },
  {
    question: "How do you handle project pricing?",
    answer:
      "I offer hourly rates starting at £35+, start-up packages from £500 to £1500, and full website builds starting at £1500+. For milestone pricing or custom quotes, feel free to contact me directly.",
  },
  {
    question: "Can you customize packages if I have specific needs?",
    answer:
      "Definitely! I’m flexible and can tailor packages or pricing to fit your project requirements. Just get in touch to discuss your needs.",
  },
  {
    question: "What is the typical turnaround time for projects?",
    answer:
      "Turnaround times depend on the project scope. Quick builds can take a few weeks, while full websites may take a month or more. I’ll provide an estimated timeline during project discussions.",
  },
  {
    question: "How do you respond to customers asking for quotes?",
    answer:
      "When a customer asks for a quote via the contact form or email, I usually start by arranging a discovery call to understand their project requirements. This helps me provide an accurate, tailored estimate. After clarifying the details, I follow up with a proposal outlining the work, pricing, and next steps. Once we’re aligned, we get started and maintain open communication throughout the project.",
  },
  {
    question: "How do you communicate during projects?",
    answer:
      "You’ll always know where your project stands. I use Slack for quick updates, email for detailed communication, and scheduled calls to review progress. My goal is to keep the process smooth and stress-free for you.",
  },
  {
    question: "Will you collaborate with my backend team?",
    answer:
      "Yes, I focus exclusively on front-end development and am happy to work closely with your backend developers, especially on any exciting projects.",
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
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'
            }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 py-2 px-5' : 'max-h-0 opacity-0 py-0 px-5'
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
    <section className="relative w-full sm:py-20 px-5 bg-gradient-to-br from-black to-black-900/20">
      {/* Glow / Blur background blob */}
      <div className="absolute top-[150px] left-1/2 -translate-x-1/2 w-[300px] h-[700px] bg-purple-600/20 blur-[100px] z-0 rotate-[-30deg] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-white text-4xl font-bold mb-4 sm:mt-20 mt-40">
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