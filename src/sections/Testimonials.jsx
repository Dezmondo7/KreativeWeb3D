import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'
import GlowCard from '../components/GlowCard'

const Testimonials = () => {
    return (
        <section id="testimonials" className="flex-center">
            <div className="w-full mx-auto max-w-screen-xl h-full section-padding">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 mt-40 md:mt-30 lg:mt-40">
                        Testimonials
                    </h2>
                    <p className="text-gray-400 text-lg">
                        See What our Customers Have to Say.
                    </p>
                </div>

                <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                    {testimonials.map(({ imgPath, name, mentions, review }) => (
                        <GlowCard card={{ review }} key={name}>
                            <div className="flex items-center gap-3">
                                <div>
                                    <p className="font-bold">{name}</p>
                                    <p className="text-white-50">{mentions}</p>
                                </div>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials