import React from 'react'
import { navLinks } from '../constants/index.js'
import { useEffect, useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
    //Track user scrolling
    const [scrolled, setScrolled] = useState(false)

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

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

            <nav className="">

                <div className=" mx-auto p-4 flex items-center justify-between">
                    <span className="logo cursor-pointer font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                        Reakt Web Design
                    </span>

                  {/*}  {!isOpen && (
                        <div onClick={toggleMenu} className="cursor-pointer md:hidden">
                            <HiMenu size={30} />
                        </div>)} */}

                    <div className="">
                        <ul className=" hidden lg:flex items-center gap-4 flex justify-content space-between items-center">
                            {navLinks.map(({ link, name }) => (
                                <li key={name} className="group relative">
                                    <a href={link} className="relative inline-block px-1">
                                        <span>{name}</span>
                                        <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right - contact Button & Burger Menu */}
                    <div className="flex items-center gap-4">
                        <a href="#contact" className="contact-btn group hidden md:flex">
                            <div className="inner">
                                <span>Contact</span>
                            </div>
                        </a>

                        {/* Burger Menu - appears on small screens only */}
                        {!isOpen && (
                            <div onClick={toggleMenu} className="cursor-pointer md:hidden">
                                <HiMenu size={30} />
                            </div>
                        )}
                        {isOpen && (
                            <div onClick={toggleMenu} className="cursor-pointer md:hidden z-20">
                                <IoClose size={30} />
                            </div>
                        )}

                        {/* Dropdown menu */}
                        {isOpen ? ( 
                            <div className=" bg-gray-800 flex overflow-y-hidden fixed z-10 top-0 left-0 w-screen min-h-screen justify-center items-center flex-col gap-10 duration-300 ease-in">
                            <a href="#">Home</a>
                             <a href="#">About</a>
                              <a href="#">Services</a>
                               <a href="#">Contact</a>
                        </div>

                        ) : (
                            <div className="overflow-y-hidden fixed z-10 top-0 left-[-150%] w-screen min-h-screen justify-center items-center flex-col gap-10 duration-300 ease-in"></div>
                        )}




                    </div>
                </div>
            </nav>




        </header >
    )
}

export default NavBar