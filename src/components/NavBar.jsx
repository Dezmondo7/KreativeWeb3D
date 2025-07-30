import React from 'react'
import { navLinks } from '../constants/index.js'
import { useEffect, useState } from 'react'

const NavBar = () => {
    //Track user scrolling
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            //create an event listener when the user scrolls
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)

    }), [];

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                {/* } <a className="logo " href="#hero">
                Reakt Web | RKT
                </a> */}
                
                <span className="logo cursor-pointer font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                    Reakt Web Design
                </span>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link} >

                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>

                </nav>

                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>contact me</span>
                    </div>
                </a>
            </div>

        </header>
    )
}

export default NavBar