"use client"

import { useEffect, useState, useRef } from "react"
import reactLogo from '../assets/react.png';

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
      subtitle: "User-friendly",
    },
    {
      value: 150,
      suffix: "%",
      subtitle: "Creativeness",
    },
    {
      value: 100,
      suffix: "%",
      subtitle: "Scalable",
    },
  ]

  return (
    <div id="counter" className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 xl:mt-0 mt-20 bg-black relative overflow-hidden mb-80">
      {/* Futuristic background effects */}
      {/*<div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>*/}

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

        {/* Powered by React - Added below the grid with same spacing as title */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center gap-3">
            <span
              className="text-white italic text-3xl font-medium tracking-wide"
              style={{ fontFamily: "Mona Sans, system-ui, sans-serif," }}
            >
              Powered by React
            </span>
            <img className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" src={reactLogo} alt=""></img>
           {/*} <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c-.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26S20.07 10.37 17.97 9.74c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26z" />
            </svg> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CounterSection