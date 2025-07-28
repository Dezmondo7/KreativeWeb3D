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
    <div ref={elementRef} className="counter-number text-white text-5xl font-bold mb-2">
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

const CounterSection = () => {
  const counterItems = [
    {
      value: 500,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      value: 150,
      suffix: "+",
      label: "Happy Clients",
    },
    {
      value: 50,
      suffix: "+",
      label: "Team Members",
    },
    {
      value: 99,
      suffix: "%",
      label: "Success Rate",
    },
  ]

  return (
    <div id="counter" className="px-4 sm:px-6 lg:px-8 py-10 xl:mt-0 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {counterItems.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="bg-zinc-900 rounded-lg p-8 flex flex-col justify-center items-center text-center hover:bg-zinc-800 transition-colors duration-300"
            >
              <CountUp suffix={item.suffix} end={item.value} />
              <div className="text-white/70 text-lg font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CounterSection