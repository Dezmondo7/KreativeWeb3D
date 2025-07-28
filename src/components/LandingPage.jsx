import React from 'react'

const LandingPage = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="space-y-8">
                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                            Welcome to Our
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                                Amazing Platform
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Discover the power of modern web development with our cutting-edge tools and services. Build faster, scale
                            better, and create amazing experiences.
                        </p>

                        {/* Call to Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg">
                                Get Started
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-lg">
                                Learn More
                            </button>
                        </div>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center gap-3 pt-8">
                            <span className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm">
                                ⚡ Lightning Fast
                            </span>
                            <span className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm">
                                🔒 Secure
                            </span>
                            <span className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm">
                                📱 Responsive
                            </span>
                            <span className=" px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm">
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