"use client"

import { BrainCircuit, Code2, Compass } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SKILL_GROUPS } from "@/lib/portfolio-data"

const ICONS = {
  frontend: Code2,
  engineering: BrainCircuit,
  workflow: Compass,
} as const

export default function Skill() {
  return (
    <section id="skills" className="border-b border-border/50 bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full border border-border bg-card px-3.5 py-1 font-mono text-xs font-medium text-cyan-500">
            02 // TECHNICAL STACK
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Skills &amp; Engineering Toolkit
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Modern frontend frameworks paired with API integration, clean state architecture, and Agile delivery.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, idx) => {
            const Icon = ICONS[group.id as keyof typeof ICONS] ?? Code2
            return (
              <Reveal key={group.id} delay={idx * 120} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-border/70 bg-card/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-500/25 bg-cyan-500/10 text-cyan-500">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold">{group.title}</h3>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{group.description}</p>

                  <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="group/item flex items-center justify-between rounded-xl border border-border/60 bg-background/70 px-3.5 py-2.5 transition-all duration-200 hover:translate-x-1 hover:border-cyan-500/40"
                      >
                        <span className="text-sm font-medium">{item.name}</span>
                        <span className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground group-hover/item:text-cyan-500">
                          {item.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
