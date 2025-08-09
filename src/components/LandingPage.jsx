"use client"
import React, { useState, useEffect } from "react"

// Falling Particles Component
const Starfield = () => {
  const [stars, setStars] = useState([])

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const numStars = isMobile ? 60 : 150

    const createStar = () => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.3,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
    })

    const initialStars = Array.from({ length: numStars }, createStar)
    setStars(initialStars)

    let animationFrameId

    const animate = () => {
      setStars((prevStars) =>
        prevStars.map((star) => {
          let newX = star.x + star.speedX
          let newY = star.y + star.speedY

          if (newX < 0 || newX > window.innerWidth)
            newX = Math.random() * window.innerWidth
          if (newY < 0 || newY > window.innerHeight)
            newY = Math.random() * window.innerHeight

          return { ...star, x: newX, y: newY }
        })
      )

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <div className="fixed inset-0 z-10 pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            backgroundColor: `hsl(${Math.random() * 360}, 100%, 80%)`,
            filter: "blur(0.5px)",
            transition: "transform 0.1s ease-out",
          }}
        />
      ))}
    </div>
  )
}

const LandingPage = () => {
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Powered by React"

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
      <Starfield />

      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(0,255,255,0.07)_0%,transparent_70%)] pointer-events-none " />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(128,0,255,0.15)_0%,transparent_70%)] pointer-events-none" />
     <section
  id="home"
  className="relative h-screen bg-gradient-to-br from-purple-800/40 via-black to-black pt-24 sm:pt-32 lg:pt-40 flex items-center justify-center px-4 sm:px-6 lg:px-8 min-h-screen"
>
        <div className="z-20 text-center max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
          {/* Smaller Heading */}
          <h2
            className="font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight"
            style={{
              fontSize: "clamp(1rem, 2vw + 0.5rem, 2.5rem)"
            }}
          >
            Built for the Future
          </h2>

          {/* Larger Heading (Animated) */}
          <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            {displayedText}
            {showCursor && <span className="animate-pulse text-purple-600">|</span>}
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-gray-400 mt-6 max-w-xl md:max-w-2xl mx-auto leading-relaxed px-2">
            Launching or leveling up? Discover the power of modern web design & development. Freelance-crafted, interactive React websites that look sharp, run fast, and leave a lasting impression.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:shadow-xl hover:scale-105 transition-transform text-sm sm:text-base text-center"
            >
              Get Quote
            </a>
            <a
              href="#about"
              className="px-6 py-3 border border-gray-300 text-gray-300 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-800 transition duration-200 text-sm sm:text-base text-center"
            >
              Learn More
            </a>
          </div>

          {/* Feature Pills */}
          <div className="hidden sm:flex flex-wrap justify-center gap-3 mt-8">
            {["⚡ Lightning Fast", "🔒 Secure", "📱 Responsive", "🚀 Modern"].map((feature, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/70 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium shadow-sm"
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
