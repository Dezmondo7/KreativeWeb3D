import React from 'react' 
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'
import GlowCard from '../components/GlowCard'

const Testimonials = () => {
    return(
        <section id="testimonials" className="flex-center">
            <div className="w-full mx-auto max-w-screen-xl h-full section-padding mt-12 sm:mt-0">
                <TitleHeader title="Testimonials"
                sub=""
                />
                <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                    {testimonials.map(( {imgPath, name, mentions, review }) => (
                        <GlowCard card={{ review }}>
                            <div className="flex items-center gap-3">
                               {/*} <div>
                                    <img src={imgPath} alt={name} />
                                </div> */}
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