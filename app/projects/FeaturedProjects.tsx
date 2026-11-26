"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import { PROJECTS, type ProjectItem } from "@/lib/portfolio-data"

const CATEGORIES: ("All" | ProjectItem["category"])[] = [
  "All",
  "Enterprise Product",
  "Web Platform",
  "Client & Agency",
]

export function FeaturedProjects() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | ProjectItem["category"]>("All")

  const filtered =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" className="border-b border-border/50 bg-muted/20 py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-border bg-card px-3.5 py-1 font-mono text-xs font-medium text-cyan-500">
              03 // SELECTED WORK
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Production Platforms &amp; Projects
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Real-world applications shipped across insurance tech, healthcare, library operations, fitness, and hospitality.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                    active
                      ? "scale-105 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm"
                      : "border border-border bg-card text-muted-foreground hover:border-cyan-500/40 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, idx) => (
            <Reveal key={project.slug} delay={idx * 80} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 flex justify-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group rounded-full px-7 transition-transform duration-300 hover:scale-[1.02]"
          >
            <Link href="/projects">
              View All Project Case Studies
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
