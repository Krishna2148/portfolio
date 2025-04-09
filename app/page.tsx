"use client"
import Link from "next/link"
import { ArrowRight, Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SkillBadge } from "@/components/skill-badge"
import { ContactForm } from "@/components/contact-form"
import Image from "next/image"
import { useEffect, useState } from "react"
import Banner from "./projects/Banner"
import About from "./projects/About"
import Skill from "./projects/Skill"
import { Experience } from "./projects/Experience"
import Contact from "./projects/Contact"

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <About />
      <Skill />
      <Experience />
      <Contact />

      {/* Footer */}
      <footer className="w-full py-6 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex space-x-4">
              <Link href="https://github.com/Krishna2148" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/krishnaprashadbhatt/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:krishnapdbhatt@gmail.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Krishna Prashad Bhatt. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}