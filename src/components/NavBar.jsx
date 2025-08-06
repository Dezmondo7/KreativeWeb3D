import React from 'react'
import { navLinks } from '../constants/index.js'
import { useEffect, useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import LogoR from '../assets/letter-r.png';
import '../index.css'

const NavBar = () => {
    //Track user scrolling
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('');
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };
    //Event listerner to close window on click
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [isOpen]);

    //useEffect to close the window if the screen size is changed when dropdown menu is open
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);
    
    //this tracks which section is in view
    useEffect(() => {
    const sectionIds = navLinks.map(({ link }) => link.slice(1)); // remove '#' to get IDs

    const handleScroll = () => {
        const scrollPos = window.scrollY + window.innerHeight / 2;

        let current = '';
        for (const id of sectionIds) {
            const section = document.getElementById(id);
            if (section) {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                if (scrollPos >= top && scrollPos < top + height) {
                    current = id;
                    break;
                }
            }
        }

        setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
}, []);

    useEffect(() => {
        const handleScroll = () => {
            //create an event listener when the user scrolls
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)

    }, []);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>

            <nav className="">

                <div className="mx-auto flex items-center justify-between">

                    <span className="logo cursor-pointer font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent flex items-center gap-1">
                        {/* Logo image – visible on small devices only */}
                        <img
                            src={LogoR}
                            alt="Logo"
                            className="w-5 h-5 object-contain block md:hidden"
                        />

                        {/* Text – shows 'Reakt' on small devices, full name on medium+ */}
                        <span className="block md:hidden">Reakt</span>
                        <span className="hidden md:inline">Reakt Web Design</span>
                    </span>


                    <div className="">
                        <ul className="hidden lg:flex items-center gap-4 flex justify-content space-between items-center">
                            {navLinks.map(({ link, name }) => (
                                <li key={name}
                                    className={`relative inline-block px-1 ${activeSection === link.slice(1) ? 'text-purple-400 font-semibold' : ''
                                     }`}
                                >
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
                                <span>Start Project</span>
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
                            <div className="bg-black/90 flex overflow-y-hidden fixed z-10 top-0 left-0 w-screen min-h-screen justify-center items-center flex-col gap-10 duration-300 ease-in">
                                <a href="#" onClick={handleLinkClick}>Home</a>
                                <a href="#about" onClick={handleLinkClick}>About</a>
                                <a href="#services" onClick={handleLinkClick}>Services</a>
                                <a href="#testimonials" onClick={handleLinkClick}> Testimonials</a>
                                <a href="#contact" onClick={handleLinkClick}>Contact</a>
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