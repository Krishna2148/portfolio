import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const About = () => {
  const profileRef = useRef(null);
  const textContentRef = useRef(null);
  
  useEffect(() => {
    // Simple animation on component mount
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === profileRef.current) {
            entry.target.classList.add('scale-100', 'opacity-100');
            entry.target.classList.remove('scale-95', 'opacity-0');
          }
          if (entry.target === textContentRef.current) {
            entry.target.classList.add('translate-y-0', 'opacity-100');
            entry.target.classList.remove('translate-y-8', 'opacity-0');
          }
        }
      });
    }, { threshold: 0.1 });
    
    if (profileRef.current) observer.observe(profileRef.current);
    if (textContentRef.current) observer.observe(textContentRef.current);
    
    return () => {
      if (profileRef.current) observer.unobserve(profileRef.current);
      if (textContentRef.current) observer.unobserve(textContentRef.current);
    };
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="container px-4 md:px-10 max-w-6xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column - Profile image with decorative elements */}
          <div className="flex justify-center order-2 lg:order-1">
            <div 
              ref={profileRef} 
              className="relative transform scale-95 opacity-0 transition-all duration-1000 ease-out"
            >
              {/* Background decorative element */}
              <div className="absolute -left-6 -top-6 w-full h-full bg-blue-500 rounded-xl rotate-3"></div>
              
              {/* Profile image container */}
              <div className="relative w-[280px] h-[320px] sm:w-[320px] sm:h-[400px] md:w-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-xl border-4 border-white dark:border-slate-800 z-10">
                <Image
                  src="/profile.jfif"
                  alt="Your Name"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
              
              {/* Experience badge */}
              <div className="absolute -right-8 top-10 bg-white dark:bg-slate-800 rounded-full py-3 px-6 shadow-lg z-20 flex items-center gap-2">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">2+</div>
                <div>
                  <div className="text-sm font-semibold">Years of</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Experience</div>
                </div>
              </div>
              
              {/* Tech stack pills */}
              <div className="absolute -left-4 -bottom-4 bg-white dark:bg-slate-800 rounded-lg py-2 px-4 shadow-lg z-20">
                <div className="flex gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded-full">React.js</span>
                  <span className="bg-black text-white text-xs px-2 py-1 rounded-full">Next.js</span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs px-2 py-1 rounded-full">Node.js</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Text content */}
          <div 
            ref={textContentRef} 
            className="space-y-6 order-1 lg:order-2 transform translate-y-8 opacity-0 transition-all duration-1000 ease-out delay-300"
          >
            <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300">About Me</div>
            
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Crafting Seamless Digital Experiences with Code & Creativity
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-700 md:text-lg leading-relaxed dark:text-gray-300">
                I'm a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Software Engineer</span> who thrives on transforming ideas into interactive, user-friendly web experiences. With a strong command of React.js, Next.js, and Node.js, I focus on writing clean, scalable, and performant code that brings designs to life.
              </p>
              
              <p className="text-gray-700 md:text-lg leading-relaxed dark:text-gray-300">
                My journey into web development began with a deep curiosity for how websites work—and quickly turned into a lifelong passion. From building sleek interfaces for startups to developing dynamic applications, I've consistently delivered elegant solutions with a focus on usability and performance.
              </p>
            </div>
            
            {/* Stats section */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">20+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">99%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About