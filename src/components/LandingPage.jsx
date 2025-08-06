"use client"
import React, { useState, useEffect } from "react"

{/* SVG Icon */ }
const ZapIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
      clipRule="evenodd"
    />
  </svg>
)

{/* ORIGINAL Falling Particles Component (as you provided) */ }
const FallingParticles = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const createParticle = () => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: -10,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 3 + 1,
      opacity: Math.random() * 0.3 + 0.1,
    })

    const initialParticles = Array.from({ length: 50 }, createParticle)
    setParticles(initialParticles)

    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          const newY = particle.y + particle.speed
          if (newY > window.innerHeight + 10) {
            return createParticle()
          }
          return { ...particle, y: newY }
        })
      )
    }

    const interval = setInterval(animateParticles, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
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
      {/* Falling Particles (your original code) */}
      <FallingParticles />

      <section className="relative h-screen bg-gradient-to-br from-purple-900/20 via-black to-black pt-16 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="z-10 text-center max-w-3xl mx-auto">

          {/* Tagline */}
          <div className="inline-flex items-center sm:px-2 px-3 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <ZapIcon />
            <span className="text-xs text-purple-300 ml-2">
              Next-Gen Website Design
            </span>
          </div>

          {/* Smaller Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
            Built for the Future
          </h2>

          {/* Larger Heading (Animated) */}
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            {displayedText}
            {showCursor && <span className="animate-pulse text-purple-600">|</span>}
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed px-2">
            Launching or leveling up? Discover the power of modern web design & development.
            Freelance-crafted, interactive React websites that look sharp, run fast, and leave a lasting impression.
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
