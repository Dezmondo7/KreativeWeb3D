"use client"
import React, { useState, useEffect } from "react"
import Cookie from '../components/Cookie'

const Starfield = () => {
  const [stars, setStars] = useState([])
  const [warp, setWarp] = useState(false)
  const [showButton, setShowButton] = useState(true)

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
        initialX: x,
        initialY: y
      }
    }

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

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY < 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const triggerWarp = () => {
    setWarp(true)
    setTimeout(() => setWarp(false), 3000)
  }

  return (
    <>
      {showButton && (
        <div className="hidden md:flex fixed bottom-8 w-full justify-center z-50 px-4">
          <div className="w-full max-w-[1200px] flex justify-end">
            <button
              onClick={triggerWarp}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition-opacity duration-500"
            >
              Hyper Motion!
            </button>
          </div>
        </div>
      )}
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
      <div className="hidden sm:block">
        <Starfield />
      </div>
      <Cookie />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(0,255,255,0.07)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(128,0,255,0.15)_0%,transparent_70%)] pointer-events-none" />
      <section
        id="home"
        className="relative bg-gradient-to-br from-purple-800/40 via-black to-black pt-24 sm:pt-32 lg:pt-40 flex items-center justify-center px-4 sm:px-6 lg:px-8 min-h-screen"
      >
        <div className="z-20 text-center max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto bg-clip-text">
          <h2
            className="font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight"
            style={{ fontSize: "clamp(1rem, 2vw + 0.5rem, 2.5rem)" }}
          >
            Built for the Future
          </h2>
          <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            {displayedText}
            {showCursor && <span className="animate-pulse text-purple-600">|</span>}
          </h1>
          <p className="text-base sm:text-lg text-gray-100 mt-6 max-w-xl md:max-w-2xl mx-auto leading-relaxed px-2">
            Launching or leveling up? Discover the power of modern web design & development. Freelance-crafted, interactive React coded websites that look sharp, run fast, and leave a lasting impression.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:shadow-xl hover:scale-105 transition-transform text-sm sm:text-base text-center"
            >
              Launch Now
            </a>
            <a
              href="#about"
              className="px-6 py-3 border border-gray-300 text-gray-300 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-800 transition duration-200 text-sm sm:text-base text-center"
            >
              Unlock More
            </a>
          </div>
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