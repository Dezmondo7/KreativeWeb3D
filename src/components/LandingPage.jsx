import React from 'react'
"use client"
import { useState, useEffect } from "react"



{/* SVG */ }
const ZapIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
        />
    </svg>
)


// Falling Particles Component
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
                }),
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


    {/* Typewrite effect */ }
    const [displayedText, setDisplayedText] = useState("")
    const [showCursor, setShowCursor] = useState(true)
    const fullText = "Web Design Studio"

    useEffect(() => {
        let currentIndex = 0
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex))
                currentIndex++
            } else {
                clearInterval(typingInterval)
                // Hide cursor after typing is complete
                setTimeout(() => setShowCursor(false), 500)
            }
        }, 200) // Adjust speed here (lower = faster)

        return () => clearInterval(typingInterval)
    }, [])

    return (
        <>

            {/* Falling Particles Background */}
            <FallingParticles />

            <div id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black px-4 sm:px-6 lg:px-8">


                <div className="max-w-4xl mx-auto text-center">
                    <div className="space-y-8">

                        {/* Main Heading */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
                            <ZapIcon />
                            <span className="text-sm text-purple-300 ml-2">Next-Gen Web Design Agency</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
                            <span>Welcome to Our</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                                {displayedText}
                                {showCursor && <span className="animate-pulse text-purple-600">|</span>}
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            <span className="">Discover the power of modern web development with our cutting-edge tools and services. We build faster, better, and create amazing website experiences.</span>
                        </p>

                        {/* Call to Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold cursor-pointer rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg">
                                Get Quote
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-lg">
                                Learn More
                            </button>
                        </div>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center gap-3 pt-8">
                            <span className="px-4 py-2 bg-white/70 backdrop-blur-sm hover rounded-full cursor-default text-sm font-medium text-gray-700 shadow-sm">
                                ⚡ Lightning Fast
                            </span>
                            <span className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full cursor-default text-sm font-medium text-gray-700 shadow-sm">
                                🔒 Secure
                            </span>
                            <span className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full cursor-default text-sm font-medium text-gray-700 shadow-sm">
                                📱 Responsive
                            </span>
                            <span className=" px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full cursor-default text-sm font-medium text-gray-700 shadow-sm">
                                🚀 Modern
                            </span>
                        </div>



                    </div>
                </div>
            </div>



        </>
    )
}

export default LandingPage