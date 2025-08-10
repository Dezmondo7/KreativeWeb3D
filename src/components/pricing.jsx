import React, { useState } from "react";

function Button({ children, className, ...props }) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

function Check({ className, strokeWidth = 2 }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  const pricingPlans = [
    {
      name: "Freelance",
      monthlyPrice: "£30-45/hr",
      annualPrice: "£30-45/hr",
      description: "Ideal for custom React and Tailwind components & interactive features.",
      features: [
        "Responsive UI development with React & TailwindCSS",
        "Clean, maintainable, and well-documented code",
        "Interactive UI components and animations",
        "Cross-browser and mobile-friendly designs",
        "Regular progress updates and communication",
        "For milestone pricing or custom quotes, please get in touch",
      ],
      buttonText: "Get Started",
      buttonClass:
        "bg-zinc-300 shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] outline outline-0.5 outline-[#1e29391f] outline-offset-[-0.5px] text-gray-800 text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-zinc-400",
    },
    {
      name: "Start-ups & Soloprenuers ",
      monthlyPrice: "$20",
      annualPrice: "£500-£1500",
      description: "React and Tailwind front-end build designed to get your business moving fast.",
      features: [
        "Responsive landing page or MVP front-end built with React & Tailwind",
        "Up to 3 custom UI components or interactive features",
        "SEO & performance optimizations",
        "1 round of revisions within 2 weeks",
        "Deployment guidence and support",
        "1 Years Hosting & Security included",
        "Tailor your package with optional extras"
      ],
      buttonText: "Get Started",
      buttonClass:
        "bg-zinc-300 shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] outline outline-0.5 outline-[#1e29391f] outline-offset-[-0.5px] text-gray-800 text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-zinc-400",
      popular: true,
    },
    {
      name: "Elevated",
      monthlyPrice: "$200",
      annualPrice: "£1500+",
      description: "Elevate your brand with our Ultra front-end package.",
      features: [
        "Ideal for website builds or front-end refreshes",
        "Full Multi-page website",
        "Custom UI components and complex interactions ",
        "Domain, Hosting & Encrypted Security",
        "Enhanced SEO performance work",
        "Priority deployments & support",
        "Priority email and chat support",

      ],
      buttonText: "Get Started",
      buttonClass:
        "bg-zinc-300 shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] outline outline-0.5 outline-[#1e29391f] outline-offset-[-0.5px] text-gray-800 text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-zinc-400",
    },
  ];

  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start items-center my-0 py-8 md:py-14 mt-40 relative">
      <div className="self-stretch relative flex flex-col justify-center items-center gap-2 py-0">
        <div className="flex flex-col justify-start items-center gap-4">

          {/*Title */}
          <h2 className="text-center text-foreground text-4xl md:text-5xl font-semibold leading-tight md:leading-[40px]">
            Pricing built for every Project
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-tight">
            Choose a plan that fits, hourly rates for projects, {" "}
            <br />start-up packages & website refreshes.
          </p>
        </div>
        <div className="pt-4">
          <div className="p-0.5 bg-muted rounded-lg outline outline-1 outline-[#0307120a] outline-offset-[-1px] flex justify-start items-center gap-1 md:mt-0">
            <button
              onClick={() => setIsAnnual(true)}
              className={`pl-2 pr-1 py-1 flex justify-start items-start gap-2 rounded-md ${isAnnual ? "bg-accent shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.08)]" : ""
                }`}
            >
              {/*} This is a great feature button which switches between monthly and annual prices to be included on other builds
             
             <span
                className={`text-center text-sm font-medium leading-tight ${isAnnual ? "text-accent-foreground" : "text-zinc-400"
                  }`}
              >
                Annually
              </span>
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-2 py-1 flex justify-start items-start rounded-md ${!isAnnual ? "bg-accent shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.08)]" : ""
                }`}
            >
              <span
                className={`text-center text-sm font-medium leading-tight ${!isAnnual ? "text-accent-foreground" : "text-zinc-400"
                  }`}
              >
                Monthly
              </span> */}
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch px-5 flex flex-col md:flex-row justify-start items-start gap-4 md:gap-6 mt-6 max-w-[1100px] mx-auto relative">
        {pricingPlans.map((plan, idx) => {
          const isMiddle = idx === 1;
          const isSide = idx !== 1;
          return (
            <div key={plan.name} className="relative flex-1">
              {/* Glow or edge backdrop */}
              {isMiddle && (
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none z-0"
                  style={{
                    background:
                      "rgba(24, 10, 43)", // very transparent purple
                    backdropFilter: "blur(8px)",
                    boxShadow:
                      "0 0 20px 10px rgba(128,0,128,0.15)",
                  }}
                />
              )}
              {isSide && (
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none z-0"
                  style={{
                    background: "rgba(20,14,24,0.75)"
                  }}
                />
              )}


              <div
                className={`p-4 overflow-hidden rounded-xl flex flex-col justify-start items-start gap-6 relative z-10 ${plan.popular
                  ? "bg-primary shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.10)]"
                  : "bg-gradient-to-b from-gray-50/5 to-gray-50/0"
                  }`}
                style={
                  plan.popular
                    ? {}
                    : { outline: "1px solid hsl(var(--border))", outlineOffset: "-1px" }
                }
              >
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch flex flex-col justify-start items-start gap-8">
                    <div
                      className={`w-full h-5 text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground" : "text-zinc-200"
                        }`}
                    >
                      {plan.name}
                      {plan.popular && (
                        <div className="ml-2 px-2 overflow-hidden rounded-full justify-center items-center gap-2.5 inline-flex mt-0 py-0.5 bg-gradient-to-b from-primary-light/50 to-primary-light bg-white">
                          <div className="text-center text-primary-foreground text-black text-xs font-normal leading-tight break-words">
                            Popular
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-1">
                      <div className="flex justify-start items-center gap-1.5">
                        <div
                          className={`relative h-10 flex items-center text-3xl font-medium leading-10 ${plan.popular ? "text-primary-foreground" : "text-zinc-50"
                            }`}
                        >
                          <span className="invisible">{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                          <span
                            className="absolute inset-0 flex items-center transition-all duration-500"
                            style={{
                              opacity: isAnnual ? 1 : 0,
                              transform: `scale(${isAnnual ? 1 : 0.8})`,
                              filter: `blur(${isAnnual ? 0 : 4}px)`,
                            }}
                            aria-hidden={!isAnnual}
                          >
                            {plan.annualPrice}
                          </span>
                          <span
                            className="absolute inset-0 flex items-center transition-all duration-500"
                            style={{
                              opacity: !isAnnual ? 1 : 0,
                              transform: `scale(${!isAnnual ? 1 : 0.8})`,
                              filter: `blur(${!isAnnual ? 0 : 4}px)`,
                            }}
                            aria-hidden={isAnnual}
                          >
                            {plan.monthlyPrice}
                          </span>
                        </div>
                        <div
                          className={`text-center text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground/70" : "text-zinc-400"
                            }`}
                        >

                        </div>
                      </div>
                      <div
                        className={`self-stretch text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground/70" : "text-zinc-400"
                          }`}
                      >
                        {plan.description}
                      </div>
                    </div>
                  </div>
                  <Button
                    className={`self-stretch px-5 py-2 rounded-[40px] flex justify-center items-center cursor-pointer ${plan.buttonClass}`}
                    onClick={() => {
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <div className="px-1.5 flex justify-center items-center gap-2">
                      <span
                        className={`text-center text-sm font-medium leading-tight ${plan.name === "Free"
                            ? "text-gray-800"
                            : plan.name === "Pro"
                              ? "text-primary"
                              : "text-zinc-950"
                          }`}
                      >
                        {plan.buttonText}
                      </span>
                    </div>
                  </Button>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                  <div
                    className={`self-stretch text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                  >
                    {plan.name === "Free" ? "Get Started today:" : "Features +"}
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="self-stretch flex justify-start items-center gap-2">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <Check
                            className={`w-full h-full ${plan.popular ? "text-primary-foreground" : "text-muted-foreground"
                              }`}
                            strokeWidth={2}
                          />
                        </div>
                        <div
                          className={`leading-tight font-normal text-sm text-left ${plan.popular ? "text-primary-foreground" : "text-muted-foreground"
                            }`}
                        >
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default PricingSection;