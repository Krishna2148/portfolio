"use client"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react'
import { Github, Linkedin, Facebook, Instagram, Mail, ChevronDown, Code, Briefcase } from 'lucide-react';

const Banner = () => {
    const fullName = "Krishna Prashad Bhatt";
    const [displayName, setDisplayName] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [currentTitle, setCurrentTitle] = useState(0);
    const titles = ["Software Engineer", "React JS Developer", "Next JS Developer"];
    const containerRef = useRef(null);

    // Name typing animation
    useEffect(() => {
        let timer:any;
        if (isPaused) {
            timer = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
        if (isDeleting) {
            if (displayName.length === 0) {
                setIsDeleting(false);
                return;
            }

            timer = setTimeout(() => {
                setDisplayName(prev => prev.substring(0, prev.length - 1));
            }, 75);
        } else {
            if (displayName === fullName) {
                setIsPaused(true);
                return;
            }

            timer = setTimeout(() => {
                setDisplayName(fullName.substring(0, displayName.length + 1));
            }, 150);
        }

        return () => clearTimeout(timer);
    }, [displayName, isDeleting, isPaused, fullName]);

    // Blinking cursor animation
    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        return () => clearInterval(cursorTimer);
    }, []);
    
    // Rotate titles
    useEffect(() => {
        const titleTimer = setInterval(() => {
            setCurrentTitle(prev => (prev + 1) % titles.length);
        }, 3000);
        
        return () => clearInterval(titleTimer);
    }, []);

    // Background animation setup
    useEffect(() => {
        if (!containerRef.current) return;
        
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { width, height, left, top } = containerRef.current.getBoundingClientRect();
            
            const x = (clientX - left) / width;
            const y = (clientY - top) / height;
            
            // Update background position based on mouse position
            containerRef.current.style.setProperty('--x', `${x * 100}%`);
            containerRef.current.style.setProperty('--y', `${y * 100}%`);
        };
        
        containerRef.current.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    // Scroll down function
    const scrollToAbout = () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section 
            ref={containerRef}
            className="relative w-full min-h-screen py-12 md:py-24 lg:py-32 xl:py-0 flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(59,130,246,0.15)_0%,rgba(0,0,0,0)_60%)]"
            style={{ '--x': '50%', '--y': '50%' }}
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/4 -right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

                {/* Code symbols decoration */}
                <div className="hidden lg:block absolute top-1/4 left-20 text-slate-200/10 text-6xl font-mono transform -rotate-12">{`{...}`}</div>
                <div className="hidden lg:block absolute bottom-1/4 right-20 text-slate-200/10 text-6xl font-mono transform rotate-12">{`</>`}</div>
            </div>

            <div className="container px-4 md:px-6 z-10">
                <div className="flex flex-col items-center space-y-8 text-center">
                    <div className="space-y-4">
                        <div className="inline-block animate-fadeIn mb-2">
                            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">Welcome to my portfolio</span>
                        </div>
                        
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none animate-slideUpFade">
                            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                                {displayName}
                                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
                            </span>
                        </h1>
                        
                        <div className="h-8 md:h-10 overflow-hidden">
                            <p className="animate-fadeIn mx-auto max-w-[700px] text-gray-700 md:text-xl lg:text-2xl dark:text-gray-300 font-medium flex items-center justify-center gap-2">
                                <Code className="h-5 w-5 text-blue-500" />
                                <span className="inline-block animate-slideUp">
                                    {titles[currentTitle]}
                                </span> 
                            </p>
                        </div>
                        
                        <p className="mx-auto max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400 mt-4 animate-fadeIn opacity-0" style={{ animationDelay: '0.6s' }}>
                            I build responsive, user-friendly web applications with modern technologies and clean code principles.
                        </p>
                    </div>
                    
                    <div className="flex flex-col gap-4 min-[400px]:flex-row animate-fadeIn opacity-0" style={{ animationDelay: '0.8s' }}>
                        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                            <Link href="#experience" className="flex items-center gap-2">
                                <Briefcase className="h-4 w-4" />
                                Experience
                            </Link>
                        </Button>
                        <Button className="bg-gradient-to-r from-green-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                            <Link href="#skills" className="flex items-center gap-2">
                                <Briefcase className="h-4 w-4" />
                                Skills
                            </Link>
                        </Button>
                        
                        <Button variant="outline" asChild className="border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950/50">
                            <Link href="#contact" className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                Contact Me
                            </Link>
                        </Button>
                    </div>
                    
                    <div className="flex space-x-1 sm:space-x-4 animate-fadeIn opacity-0" style={{ animationDelay: '1s' }}>
                        <Link href="https://github.com/Krishna2148" target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Button>
                        </Link>
                        <Link href="https://www.linkedin.com/in/krishnaprashadbhatt/" target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Button>
                        </Link>
                        <Link href="https://www.facebook.com/anamol.bhatt.5/" target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Button>
                        </Link>
                        <Link href="https://www.instagram.com/anamolbhatt/" target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Button>
                        </Link>
                        <Link href="mailto:krishnapdbhatt@gmail.com">
                            <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                                <Mail className="h-5 w-5" />
                                <span className="sr-only">Email</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            
            {/* Scroll down indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToAbout}>
                <ChevronDown className="h-6 w-6 text-gray-400" />
            </div>
            
            {/* Add CSS animations */}
            <style jsx global>{`
                @keyframes fadeIn {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }
                
                @keyframes slideUp {
                    0% { transform: translateY(100%); }
                    100% { transform: translateY(0); }
                }
                
                @keyframes slideUpFade {
                    0% { transform: translateY(20px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 1s forwards;
                }
                
                .animate-slideUp {
                    animation: slideUp 0.5s forwards;
                }
                
                .animate-slideUpFade {
                    animation: slideUpFade 0.8s forwards;
                }
            `}</style>
        </section>
    )
}

export default Banner