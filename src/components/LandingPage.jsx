"use client"
import React, { useState, useEffect, useRef } from "react"
import Cookie from '../components/Cookie'
import { Helmet } from "react-helmet";
import { trackEvent } from '../analytics';
import useHeatmapTracker  from "../hooks/useHeatmapTracker";


//Strafield effect function
const Starfield = ({ theme }) => {
  const [stars, setStars] = useState([])
  const [warp, setWarp] = useState(false)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const baseNumStars = isMobile ? 60 : 150

    const createStar = (large = false) => {
      const depth = Math.random() * 1.5 + 0.5
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
      return {
        id: Math.random(),
        x,
        y,
        size: large ? (Math.random() * 4 + 2) / depth : (Math.random() * 2 + 0.5) / depth,
        opacity: large ? Math.min(1, (Math.random() * 0.4 + 0.6) / depth) : Math.min(1, (Math.random() * 0.5 + 0.3) / depth),
        speedX: ((Math.random() - 0.5) * 0.15) / depth,
        speedY: ((Math.random() - 0.5) * 0.15) / depth,
        depth,
      }
    }
     
    // Create stars
    const initialStars = Array.from({ length: Math.floor(baseNumStars * 0.9) }, () => createStar(false))
      .concat(Array.from({ length: Math.floor(baseNumStars * 0.1) }, () => createStar(true)))
    setStars(initialStars)

    let animationFrameId
    const animate = () => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2

      setStars((prevStars) =>
        prevStars.map((star) => {
          let dx = star.x - centerX
          let dy = star.y - centerY

          if (warp) {
            dx *= 1.08
            dy *= 1.08
            star.x = centerX + dx
            star.y = centerY + dy
          } else {
            let newX = star.x + star.speedX
            let newY = star.y + star.speedY
            if (newX < 0) newX = window.innerWidth
            if (newX > window.innerWidth) newX = 0
            if (newY < 0) newY = window.innerHeight
            if (newY > window.innerHeight) newY = 0
            star.x = newX
            star.y = newY
          }

          //adds new star based on above
          if (star.x < -50 || star.x > window.innerWidth + 50 || star.y < -50 || star.y > window.innerHeight + 50) {
            const newStar = createStar(Math.random() < 0.1)
            return { ...newStar, x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }
          }

          return star
        })
      )
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)
 
    // window resize allows stars to continue to appear on window resize
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      setStars((prevStars) => {
        const desiredCount = baseNumStars
        const adjustedStars = prevStars.map((star) => ({
          ...star,
          x: star.x > width ? Math.random() * width : star.x,
          y: star.y > height ? Math.random() * height : star.y,
        }))
        const starsToAdd = desiredCount - adjustedStars.length
        if (starsToAdd > 0) {
          const newStars = Array.from({ length: starsToAdd }, () =>
            Math.random() < 0.9 ? createStar(false) : createStar(true)
          )
          return [...adjustedStars, ...newStars]
        }
        return adjustedStars
      })
    }

    window.addEventListener("resize", handleResize)
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [warp])


  // Future Motion button trigger
  const triggerWarp = () => {
    setWarp(true)
    setTimeout(() => setWarp(false), 3000)
  }

  const buttonRef = useRef(null);

  //Event listener to make Future Motion button dissapear
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <div className="fixed bottom-8 w-full z-50 px-4 hidden lg:block hide-on-short">
        <div className="w-full max-w-screen-xl mx-auto flex justify-end">
          <button
            ref={buttonRef}
            onClick={triggerWarp}
            className={`mr-10 cursor-pointer px-4 py-2 bg-gray-400 text-black font-bold rounded-lg shadow 
             transition-all duration-300 relative overflow-hidden
             hover:bg-purple-700
             hover:shadow-[0_0_15px_4px_rgba(128,0,255,0.7)]
             hover:scale-105
             after:absolute after:inset-0 after:bg-gradient-to-r after:from-white/10 after:via-purple-300/20 after:to-white/10 after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 
             ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Future Motion
          </button>
        </div>
      </div>
      <div className="fixed inset-0 z-10 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}px`,
              top: `${star.y}px`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              backgroundColor: theme === "dark" ? "white" : "#facc15", // yellow for light mode
              filter:
                warp
                  ? "blur(2px) drop-shadow(0 0 6px white)"
                  : star.size > 3
                    ? "blur(1px) drop-shadow(0 0 4px white)"
                    : "blur(0.5px)"
            }}
          />
        ))}
      </div>
    </>
  )
}

const LandingPage = () => {
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [theme, setTheme] = useState("dark") // dark/light toggle
  const fullText = "Powered by Reakt Web"

  // Tracks heatmap events for the hero section
  useHeatmapTracker("hero");


 // Typing interval for feature
  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => setShowCursor(false), 500)
      }
    }, 200)
    return () => clearInterval(typingInterval)
  }, [])

  return (
    <>
      <Helmet>
        <title>Reakt Web Design | Freelance Web Developer | Web Designer & Developer Bolton</title>
        <meta name="description" content="Reakt Web Design builds modern, responsive websites with React. Freelance React web developer crafting interactive, fast, and scalable web experiences." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Reakt Web Design | Freelance web Development" />
        <meta property="og:description" content="Reakt Web Design builds modern, responsive websites with React. Freelance React developer crafting interactive, fast, and scalable web experiences." />
        <meta property="og:type" content="website" />
      
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Reakt Web Design",
        "jobTitle": "Freelance React Web Developer",
        "url": "https://reaktwebdesign.co.uk",
        "sameAs": [
          "https://www.linkedin.com/in/dalewarburton1/",
          "https://github.com/Dezmondo7"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "Reakt Web Design"
        },
        "hasOccupation": {
          "@type": "Occupation",
          "name": "React Web Developer",
          "description": "Builds interactive, responsive, and scalable websites using React."
        }
      }
    `}
        </script>
      </Helmet>
  
      {/* Theme Toggle Button */}
      {/*} <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button> */}

      <div className="hidden sm:block">
        <Starfield theme={theme} />
      </div>
      <Cookie />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(0,255,255,0.07)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(128,0,255,0.15)_0%,transparent_70%)] pointer-events-none" />

      <section
        data-content-id="hero"
        id="home"
        className={`content-hero relative pt-24 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 ${theme === "dark"
          ? "bg-gradient-to-br from-purple-800/40 via-black to-black"
          : "bg-gradient-to-br from-cyan-100/10 via-cyan-100/25 to-cyan-100/50"


          }`}
      >
        <div className="z-20 text-center max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto bg-clip-text">
          <h2
            className={`unlock-wizard-cta-button font-bold bg-clip-text text-transparent leading-tight ${theme === "dark"
              ? "bg-gradient-to-r from-white via-purple-200 to-cyan-200"
              : "bg-gradient-to-r from-purple-400 via-pink-300 to-yellow-300"
              }`}
            style={{ fontSize: "clamp(1rem, 2vw + 0.5rem, 2.5rem)" }}
          >
            Futuristic AI Websites
          </h2>
          <h1 className={`mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent ${theme === "dark" ? "bg-gradient-to-r from-cyan-400 to-purple-600" : "bg-gradient-to-r from-pink-500 to-yellow-400"
            }`}>
            {displayedText}
            {showCursor && <span className="animate-pulse text-purple-600">|</span>}
          </h1>
          <p className={`text-base sm:text-lg mt-6 max-w-xl md:max-w-2xl mx-auto leading-relaxed px-2 ${theme === "dark" ? "text-gray-100" : "text-gray-900"
            }`}>
           Elevate your startup’s digital presence with AI-powered websites built in React. Freelance-crafted and results-driven, I help turn your ideas into interactive, intelligent web experiences that engage users and drive growth.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              data-cta-id="book-call" // dicovery for the function
              ct_id="book-free-call"
              href="#contact"
              className={`cta-track-unlock-wizard px-6 py-3 font-semibold rounded-lg shadow hover:shadow-xl hover:scale-105 transition-transform text-sm sm:text-base text-center ${theme === "dark" ? "bg-white text-black" : "bg-gray-900 text-white"
                }`}
              onClick={(e) => {
                e.preventDefault(); // stop immediate jump
                trackEvent("Home Page", "Click CTA", "Book Free Call");
                setTimeout(() => {
                  window.location.href = "#contact"; // navigate after tracking
                }, 100); // give GA a moment to record
              }}
            >
              Book Free Call
            </a>
            <a
              data-cta-id="unlock-wizard"
              href="#creative"
              className={`cta-track-book-call px-6 py-3 border font-semibold rounded-lg hover:scale-105 transition-transform text-sm sm:text-base text-center ${theme === "dark" ? "border-gray-300 text-gray-300 hover:border-gray-400 hover:bg-gray-800"
                : "border-gray-700 text-gray-900 hover:border-gray-900 hover:bg-gray-200"
                }`}
            >
              Unlock AI Wizard
            </a>
          </div>
          <div className="hidden sm:flex flex-wrap justify-center gap-3 mt-8">
            {["⚡ Lightning Fast", "🔒 Secure", "📱 Responsive", "🚀 Modern"].map((feature, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm font-medium shadow-sm ${theme === "dark" ? "bg-white/70 text-gray-700" : "bg-gray-200 text-gray-900"
                  }`}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage