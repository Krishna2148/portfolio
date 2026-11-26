"use client"

import Image from "next/image"
import { Layers, Rocket, ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { LiveExperienceCounter } from "@/components/live-experience"
import { PROFILE } from "@/lib/portfolio-data"

const PILLARS = [
  {
    icon: Layers,
    title: "Clean Architecture",
    detail: "Modular React & Next.js components with predictable Redux state and reusable UI primitives.",
  },
  {
    icon: Rocket,
    title: "Performance First",
    detail: "Fast rendering, responsive layouts, and thoughtful optimization across desktop and mobile.",
  },
  {
    icon: ShieldCheck,
    title: "Team & Delivery",
    detail: "Mentoring interns, Agile sprint execution, and smooth REST API integration with backend teams.",
  },
]

export default function About() {
  return (
    <section id="about" className="border-b border-border/50 bg-muted/20 py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Portrait Column */}
          <Reveal direction="left" className="order-2 lg:order-1 lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/80 bg-card shadow-xl">
                <Image
                  src={PROFILE.aboutImage}
                  alt={`${PROFILE.name} portrait`}
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 90vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              <div className="animate-float absolute -left-3 top-6 rounded-2xl border border-border/80 bg-card/95 px-4 py-3 shadow-lg backdrop-blur">
                <p className="font-mono text-xs text-muted-foreground">Degree</p>
                <p className="text-sm font-bold">BIT · Purbanchal Univ.</p>
              </div>

              <div className="animate-float-delayed absolute -bottom-3 left-4 rounded-2xl border border-emerald-500/30 bg-card/95 px-3.5 py-2 shadow-lg backdrop-blur">
                <LiveExperienceCounter compact />
              </div>
            </div>
          </Reveal>

          {/* Copy Column */}
          <Reveal direction="right" delay={120} className="order-1 space-y-6 lg:order-2 lg:col-span-7">
            <div className="inline-flex items-center rounded-full border border-border bg-card px-3.5 py-1 font-mono text-xs font-medium text-cyan-500">
              01 // ABOUT ME
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Turning complex workflows into intuitive, responsive interfaces.
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {PROFILE.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {PROFILE.stats.map((stat, idx) => (
                <Reveal key={stat.label} delay={idx * 90} direction="scale">
                  <div className="rounded-2xl border border-border/70 bg-card/80 p-4 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-500/40">
                    <div className="text-2xl font-extrabold text-cyan-500 sm:text-3xl">{stat.value}</div>
                    <div className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">{stat.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Engineering Pillars */}
            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon
                return (
                  <Reveal key={pillar.title} delay={150 + idx * 90}>
                    <div className="h-full rounded-2xl border border-border/60 bg-card/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40">
                      <Icon className="mb-2.5 h-5 w-5 text-cyan-500" />
                      <h3 className="text-sm font-semibold">{pillar.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{pillar.detail}</p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
