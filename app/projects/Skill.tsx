"use client"

import React, { useEffect, useRef, useState } from 'react'
import { SkillBadge } from '@/components/skill-badge'
import { Code2, BrainCircuit, Layers } from 'lucide-react'

const Skill = () => {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="h-5 w-5 text-blue-500" />,
      skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"]
    },
    {
      title: "Backend",
      icon: <BrainCircuit className="h-5 w-5 text-green-500" />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "Firebase"]
    },
    {
      title: "Tools & Others",
      icon: <Layers className="h-5 w-5 text-purple-500" />,
      skills: ["Git", "GitHub", "VS Code", "Figma", "Responsive Design", "Webpack"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id='skills' className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300">
              Technical Expertise
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
              My Technical Skills
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg dark:text-gray-400">
              Here are the technologies and tools I've mastered throughout my development journey
            </p>
          </div>

          <div ref={skillsRef} className="w-full max-w-4xl">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className={`mb-12 transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div className="flex items-center justify-center gap-2 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className={`transition-all duration-500 ${
                        isVisible 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-8'
                      }`}
                      style={{ 
                        transitionDelay: `${(index * 200) + (skillIndex * 100)}ms`
                      }}
                    >
                      <SkillBadge name={skill} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className={`mt-8 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              Continuously learning and expanding my skill set with modern technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill