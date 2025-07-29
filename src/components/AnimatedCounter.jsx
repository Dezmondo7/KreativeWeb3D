"use client"

import { useEffect, useState, useRef } from "react"

// Simple CountUp component (you can replace this with react-countup if preferred)
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
      className="counter-number text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-6xl font-bold mb-4 tracking-tight"
    >
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

const CounterSection = () => {
  const counterItems = [
    {
      value: 100,
      suffix: "+",
      subtitle: "Performance",
    },
    {
      value: 100,
      suffix: "+",
      subtitle: "SEO",
    },
    {
      value: 100,
      suffix: "+",
      subtitle: "Responsive",
    },
    {
      value: 150,
      suffix: "%",
      subtitle: "Creativeness",
    },
  ]

  return (
    <div id="counter" className="px-4 sm:px-6 lg:px-8 py-16 xl:mt-0 mt-20 bg-black relative overflow-hidden">
      {/* Futuristic background effects */}
      {/*<div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>*/}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2
            className="text-white text-3xl font-medium tracking-wide"
            style={{ fontFamily: "Mona Sans, system-ui, sans-serif" }}
          >
            Reakt Websites are built to last!
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {counterItems.map((item, index) => (
            <div key={`${item.subtitle}-${index}`} className="group relative">
              {/* Glowing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

              {/* Main card */}
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 flex flex-col justify-center items-center text-center hover:bg-gray-800/80 transition-all duration-500 hover:scale-105">
                {/* Subtitle */}
                <div
                  className="text-gray-300 text-xl font-medium mb-6 tracking-wide"
                  style={{ fontFamily: "Mona Sans, system-ui, sans-serif" }}
                >
                  {item.subtitle}
                </div>

                {/* Counter */}
                <CountUp suffix={item.suffix} end={item.value} />

                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CounterSection