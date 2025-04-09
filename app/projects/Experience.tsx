"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

export const Experience = () => {
  const experienceRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const experiences = [
    {
      title: "Software Engineer",
      company: "Qpixel pvt. ltd",
      companyLink: "https://theqpixel.com/",
      period: "Sep 2024 - Present",
      points: [
        "Lead engineer for company's core SaaS platform with 50k+ MAUs, driving frontend architecture decisions",
        "Implemented Next.js App Router migration, improving SEO and reducing initial load time by 40%",
        "Established design system with Storybook that standardized UI components across 5+ products",
        "Mentored 4 junior developers through code reviews and technical pairing sessions",
        "Introduced performance monitoring with Lighthouse CI, maintaining scores above 90 for all metrics",
        "Collaborated with product team to implement feature flags for gradual feature rollouts"
      ]
    },
    {
      title: "Software Engineer",
      company: "Tech Nirvana",
      companyLink: "https://technirvana.com.np/",
      period: "Mar 2024 - Sep 2024",
      points: [
        "Full-stack developer for client projects using Next.js, Node.js, and MongoDB",
        "Built real-time dashboard that processed 1M+ data points daily using WebSockets",
        "Optimized critical API endpoints reducing response times from 800ms to under 200ms",
        "Implemented automated testing pipeline that caught 30% more bugs pre-deployment",
        "Led migration from JavaScript to TypeScript across 3 major codebases",
        "Conducted weekly knowledge sharing sessions on modern web technologies"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Evolve IT Hub",
      // companyLink: "https://evolveithub.com.np",
      period: "Oct 2023 - Mar 2024",
      points: [
        "Developed 15+ responsive websites and web applications using React.js",
        "Converted legacy jQuery codebases to modern React components",
        "Implemented CI/CD workflows that reduced deployment frequency from weekly to daily",
        "Created comprehensive documentation for onboarding new team members",
        "Participated in client requirement gathering and technical specification drafting",
        "Contributed to open source projects used by the company's tech stack"
      ]
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

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <section id='experience' className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900" ref={experienceRef}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className={`space-y-2 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Experience</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Work Experience</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              My professional journey
            </p>
          </div>
          
          <div className="space-y-8 mt-8 w-full max-w-3xl">
            {experiences.map((exp, index) => (
              <div 
                key={`${exp.company}-${index}`}
                className={`border rounded-lg p-6 transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-primary">
                      <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {exp.company}
                      </a>
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-left">
                  {exp.points.map((point, pointIndex) => (
                    <li 
                      key={pointIndex}
                      className={`transition-all duration-500 ${
                        isVisible 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ 
                        transitionDelay: `${(index * 200) + (pointIndex * 100)}ms`
                      }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            asChild 
            className={`mt-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: `${experiences.length * 200}ms` }}
          >
            <Link href="/resume">
              View Full Resume <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}