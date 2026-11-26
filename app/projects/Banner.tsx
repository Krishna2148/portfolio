"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import {
  ArrowRight,
  ChevronDown,
  Code2,
  FileText,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { LiveExperienceCounter } from "@/components/live-experience"
import { PROFILE } from "@/lib/portfolio-data"

export default function Banner() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [roleVisible, setRoleVisible] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleVisible(false)
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % PROFILE.roles.length)
        setRoleVisible(true)
      }, 220)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      el.style.setProperty("--spotlight-x", `${x}%`)
      el.style.setProperty("--spotlight-y", `${y}%`)
    }
    el.addEventListener("mousemove", handleMove)
    return () => el.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-border/50 bg-background bg-[radial-gradient(600px_circle_at_var(--spotlight-x,50%)_var(--spotlight-y,35%),rgba(6,182,212,0.12),transparent_60%)]"
    >
      {/* Ambient engineering grid + animated glows */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-25" />
      <div className="animate-float pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="animate-float-delayed pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column */}
          <div className="space-y-7 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-medium text-cyan-600 dark:text-cyan-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {PROFILE.availability}
            </div>

            <div className="space-y-4">
              <p className="font-mono text-sm text-muted-foreground">
                <span className="text-cyan-500">const</span> engineer ={" "}
                <span className="text-indigo-500 dark:text-indigo-400">&quot;{PROFILE.name}&quot;</span>;
              </p>

              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Building fast, scalable{" "}
                <span className="animate-gradient-x bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
                  frontend systems
                </span>{" "}
                with React &amp; Next.js.
              </h1>

              <div className="flex items-center gap-2.5 pt-1">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-muted text-cyan-500">
                  <Code2 className="h-4 w-4" />
                </span>
                <p
                  className={`font-mono text-sm font-semibold text-foreground/90 transition-all duration-300 sm:text-base ${
                    roleVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                  }`}
                >
                  {PROFILE.roles[roleIndex]}
                </p>
              </div>

              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {PROFILE.summary}
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="group rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 px-6 text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] hover:from-cyan-400 hover:to-indigo-500"
              >
                <Link href="#projects">
                  Explore Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-border/80 px-6 transition-transform duration-300 hover:scale-[1.02]"
              >
                <Link href="/resume">
                  <FileText className="mr-2 h-4 w-4 text-cyan-500" />
                  Interactive CV
                </Link>
              </Button>

              <Button asChild size="lg" variant="ghost" className="rounded-full px-5">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>

            {/* Social + Location row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-cyan-500" />
                {PROFILE.location}
              </span>

              <div className="flex items-center gap-1.5">
                <Link
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-full border border-border/60 bg-card/60 p-2 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-cyan-500/40 hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                </Link>
                <Link
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full border border-border/60 bg-card/60 p-2 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-cyan-500/40 hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link
                  href={PROFILE.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Personal Website"
                  className="rounded-full border border-border/60 bg-card/60 p-2 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-cyan-500/40 hover:text-foreground"
                >
                  <Globe className="h-4 w-4" />
                </Link>
                <Link
                  href={`mailto:${PROFILE.email}`}
                  aria-label="Email"
                  className="rounded-full border border-border/60 bg-card/60 p-2 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-cyan-500/40 hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Framed Editorial Portrait & Real-Time Telemetry */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="animate-float pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-tr from-cyan-500/25 via-indigo-500/20 to-emerald-500/20 blur-2xl" />

              {/* Floating Stack Badge */}
              <div className="animate-float-delayed absolute -right-3 -top-4 z-20 hidden rounded-2xl border border-cyan-500/30 bg-card/95 px-3.5 py-2 shadow-xl backdrop-blur sm:block">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Core Stack
                </p>
                <p className="font-mono text-xs font-bold text-cyan-500">React · Next · Redux</p>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/90 shadow-2xl backdrop-blur">
                {/* IDE Window Top Bar */}
                <div className="flex items-center justify-between border-b border-border/60 bg-muted/50 px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground">profile.tsx</span>
                  <Sparkles className="h-3.5 w-3.5 text-cyan-500" />
                </div>

                {/* Portrait */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={PROFILE.heroImage}
                    alt={`${PROFILE.name} — ${PROFILE.headlineRole}`}
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-700 hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 90vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                  <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-slate-950/80 p-4 text-white backdrop-blur-md">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-sm font-bold">{PROFILE.name}</p>
                        <p className="text-xs text-cyan-300">Software Engineer @ Qpixel Pvt Ltd</p>
                      </div>
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-500/20 px-2.5 py-0.5 font-mono text-[10px] font-medium text-emerald-300">
                        Active
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Live Tenure Telemetry */}
                <div className="flex items-center justify-between border-t border-border/60 bg-muted/30 px-4 py-2.5 font-mono text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Terminal className="h-3.5 w-3.5 text-cyan-500" />
                    Live Tenure
                  </span>
                  <LiveExperienceCounter compact />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-12 flex justify-center lg:mt-16">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card/60 text-muted-foreground transition-colors hover:border-cyan-500/40 hover:text-cyan-500"
          >
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
