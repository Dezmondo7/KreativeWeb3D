"use client"

import { useEffect, useState, useRef } from "react"
import reactLogo from '../assets/atom.png';

const CountUp = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime
    const startCount = 0

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * (end - startCount) + startCount)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <div
      ref={elementRef}
      className="counter-number text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 text-6xl font-bold mb-4 tracking-tight"
    >
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

const CounterSection = () => {
  const counterItems = [
    { value: 100, suffix: "+", subtitle: "Performance" },
    { value: 100, suffix: "+", subtitle: "User-friendly" },
    { value: 150, suffix: "%", subtitle: "Creativeness" },
    { value: 100, suffix: "%", subtitle: "Scalable" },
  ]

  return (
    <div
      id="counter"
      className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 xl:mt-0 mt-20 bg-black relative overflow-hidden"
    >
      <div className="scale-90 sm:scale-100 origin-top-center">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h2
              className="text-white text-3xl font-medium tracking-wide"
              style={{ fontFamily: "Mona Sans, system-ui, sans-serif" }}
            >
              Future-Proof Websites
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {counterItems.map((item, index) => (
              <div key={`${item.subtitle}-${index}`} className="group relative">
                {/* Glowing border effect always visible */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-700/25 via-purple-800/20 to-purple-900/25 rounded-2xl blur opacity-25 transition duration-500"></div>

                {/* Main card */}
                <div className="relative bg-black/50 backdrop-blur-sm border border-purple-800/30 rounded-2xl p-8 flex flex-col justify-center items-center text-center hover:bg-black/70 transition-all duration-500 hover:scale-105">
                  {/* Subtitle */}
                  <div
                    className="text-gray-400 text-xl font-medium mb-6 tracking-wide"
                    style={{ fontFamily: "Mona Sans, system-ui, sans-serif" }}
                  >
                    {item.subtitle}
                  </div>

                  {/* Counter */}
                  <CountUp suffix={item.suffix} end={item.value} />

                  {/* Subtle glow effect always visible */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-700/10 via-purple-800/10 to-purple-900/10 opacity-50 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Powered by React */}
          <div className="text-center mt-16">
            <div className="flex items-center justify-center gap-3">
              <span
                className="text-white italic text-3xl font-medium tracking-wide"
                style={{ fontFamily: "Mona Sans, system-ui, sans-serif," }}
              >
                Powered by React
              </span>
              <img
                className="w-8 h-8"
                src={reactLogo}
                alt="React Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CounterSection