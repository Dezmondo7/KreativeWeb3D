import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LetterR from "../assets/letter-r.png";
import FlickFinderVideo from "../assets/FlickFinderVideo.mp4";
import CrtImage from '../assets/CuratedImg.png'
import { Helmet } from "react-helmet";

const projects = [
  {
    id: 1,
    title: "Minimalist Brand Identity",
    description: "Clean and modern visual communication for a tech startup",
    imageUrl: LetterR,
    category: "Branding",
  },
  {
    id: 2,
    title: "Sleek Web Experience",
    description: "Creative landing page for a Movie Finder App",
    videoUrl: FlickFinderVideo,
    category: "Web & Brand Design",
  },
  {
    id: 3,
    title: "Intuitive Mobile App",
    description: "User-friendly app design for a health and wellness company",
    imageUrl: CrtImage,
    category: "Mobile & Web App",
  },
];

const categories = ["All", ...new Set(projects.map((project) => project.category))];

// Lazy Image Card
const LazyImageCard = ({ item }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
    >
      <div
        ref={ref}
        className="relative h-64 overflow-hidden group bg-black rounded-3xl"
      >
        {inView && (
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 relative z-10"
          />
        )}
        <motion.div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-center px-4">{item.description}</p>
        </motion.div>
      </div>
      <div className="p-6">
        <div className="text-sm font-medium text-primary mb-1">{item.category}</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
        {/*} <a
          href="https://www.flowersandsaints.com.au"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline inline-flex items-center"
        >
          
         <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a> */}
      </div>
    </motion.div>
  );
};

// Lazy Video Card
const LazyVideoCard = ({ item }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
    >
      <div
        ref={ref}
        className="relative h-64 overflow-hidden group rounded-3xl shadow-lg bg-black"
      >
        <video
          controls
          className="w-full h-full object-cover block transition-transform duration-300 ease-in-out group-hover:scale-105 relative z-10"
        >
          {inView && <source src={item.videoUrl} type="video/mp4" />}
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="p-6">
        <div className="text-sm font-medium text-primary mb-1">{item.category}</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
        {/*<a
          href="#"
          className="text-primary hover:underline inline-flex items-center"
        >
          Watch Video
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a> */}
      </div>
    </motion.div>
  );
};

const PortfolioGrid = () => {
  const [filter, setFilter] = useState("All");
  const filteredProjects =
    filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 mt-20 md:mt-30 lg:mt-40">Our Work</h2>
            <p className="text-gray-400 text-lg">
              A showcase of our minimalist designs and creative solutions.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex justify-center space-x-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((item) =>
                item.videoUrl ? (
                  <LazyVideoCard key={item.id} item={item} />
                ) : (
                  <LazyImageCard key={item.id} item={item} />
                )
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PortfolioGrid;