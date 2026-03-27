import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/portfolioData";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");
    
    const navItems = [
        { href: "#Home", label: "Home" },
        { href: "#About", label: "About" },
        { href: "#Skills", label: "Skills" },
        { href: "#Education", label: "Education" },
        { href: "#Portfolio", label: "Projects" },
        { href: "#Certificates", label: "Certification" },
        { href: profile.resumeLink, label: "Download CV", external: true },
        { href: "#Contact", label: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = navItems.filter(item => !item.external).map(item => {
                const section = document.querySelector(item.href);
                if (section) {
                    return {
                        id: item.href.replace("#", ""),
                        offset: section.offsetTop - 550,
                        height: section.offsetHeight
                    };
                }
                return null;
            }).filter(Boolean);

            const currentPosition = window.scrollY;
            const active = sections.find(section => 
                currentPosition >= section.offset && 
                currentPosition < section.offset + section.height
            );

            if (active) {
                setActiveSection(active.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const scrollToSection = (e, item) => {
        e.preventDefault();
        if (item.external) {
            const link = document.createElement("a");
            link.href = item.href;
            link.setAttribute("download", "");
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setIsOpen(false);
            return;
        }

        const targetId = item.href.replace("#", "");
        const section =
            document.getElementById(targetId) || document.querySelector(item.href);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        setIsOpen(false);
    };

    return (
        <nav
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
            isOpen
                ? "bg-[#030014]"
                : scrolled
                ? "bg-transparent"
                : "bg-transparent"
        }`}
    >
        <div className="mx-auto px-4 pt-2 sm:px-6 lg:px-[8%]">
            <div className={`flex h-16 items-center justify-between rounded-full border px-4 sm:px-5 transition-all duration-300 ${
                scrolled || isOpen
                    ? "border-white/10 bg-[#060818]/88 shadow-[0_14px_40px_rgba(5,8,24,0.35)] backdrop-blur-2xl"
                    : "border-transparent bg-transparent shadow-none"
            }`}>
                {/* Logo */}
                <div className="flex-shrink-0">
                    <a
                        href="#Home"
                        onClick={(e) => scrollToSection(e, { href: "#Home" })}
                        className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-white/20"
                        aria-label={`${profile.name} home`}
                    >
                        <span className="relative flex items-center justify-center w-5 h-5">
                            <span className="absolute w-5 h-5 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] opacity-25 blur-md group-hover:opacity-45 transition-opacity duration-300"></span>
                            <span className="relative w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7]"></span>
                        </span>
                    </a>
                </div>
    
                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <div className="ml-8 flex items-center space-x-5 lg:space-x-7">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item)}
                                className="group relative whitespace-nowrap px-1 py-2 text-[0.95rem] font-medium"
                            >
                                <span
                                    className={`relative z-10 transition-colors duration-300 ${
                                        !item.external && activeSection === item.href.substring(1)
                                            ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                                            : "text-[#e2d3fd] group-hover:text-white"
                                    }`}
                                >
                                    {item.label}
                                </span>
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 ${
                                        !item.external && activeSection === item.href.substring(1)
                                            ? "scale-x-100"
                                            : "scale-x-0 group-hover:scale-x-100"
                                    }`}
                                />
                            </a>
                        ))}
                    </div>
                </div>
    
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`relative p-2 text-[#e2d3fd] hover:text-white transition-transform duration-300 ease-in-out transform ${
                            isOpen ? "rotate-90 scale-125" : "rotate-0 scale-100"
                        }`}
                    >
                        {isOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    
        {/* Mobile Menu Overlay */}
        <div
            className={`md:hidden fixed inset-x-4 top-[76px] rounded-[28px] border border-white/10 bg-[#060818]/95 backdrop-blur-2xl transition-all duration-300 ease-in-out ${
                isOpen
                    ? "opacity-100 translate-y-0"
                    : "pointer-events-none -translate-y-8 opacity-0"
            }`}
        >
            <div className="flex flex-col">
                <div className="flex-1 space-y-2 px-4 py-5">
                    {navItems.map((item, index) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item)}
                            className={`block rounded-2xl px-4 py-3 text-lg font-medium transition-all duration-300 ease ${
                                !item.external && activeSection === item.href.substring(1)
                                    ? "bg-white/5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                                    : "text-[#e2d3fd] hover:bg-white/5 hover:text-white"
                            }`}
                            style={{
                                transitionDelay: `${index * 100}ms`,
                                transform: isOpen ? "translateX(0)" : "translateX(50px)",
                                opacity: isOpen ? 1 : 0,
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </nav>
    
    );
};

export default Navbar;
