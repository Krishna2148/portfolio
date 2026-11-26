"use client"

import Image from "next/image"
import { useState } from "react"
import { Check, Copy, Github, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { Reveal } from "@/components/reveal"
import { PROFILE } from "@/lib/portfolio-data"

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable
    }
  }

  return (
    <section id="contact" className="bg-muted/20 py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <Reveal direction="left" className="space-y-6 lg:col-span-5">
            <div className="inline-flex items-center rounded-full border border-border bg-card px-3.5 py-1 font-mono text-xs font-medium text-cyan-500">
              05 // GET IN TOUCH
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s build something fast, clean, and user-centric.
            </h2>

            <p className="text-base leading-relaxed text-muted-foreground">
              Available for software engineering roles, Next.js product builds, and design system architecture.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-card/80 p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <a href={`mailto:${PROFILE.email}`} className="text-sm font-semibold hover:text-cyan-500">
                      {PROFILE.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-cyan-500/40 hover:text-foreground"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <a href={`tel:${PROFILE.phone}`} className="text-sm font-semibold hover:text-cyan-500">
                    +977 {PROFILE.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-semibold">{PROFILE.location}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-2">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold transition-colors hover:border-cyan-500/40 hover:text-cyan-500"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold transition-colors hover:border-cyan-500/40 hover:text-cyan-500"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={PROFILE.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold transition-colors hover:border-cyan-500/40 hover:text-cyan-500"
              >
                <Globe className="h-4 w-4" /> {PROFILE.websiteLabel}
              </a>
            </div>
          </Reveal>

          <Reveal direction="right" delay={120} className="space-y-6 lg:col-span-7">
            <ContactForm />

            {/* Full Brand Identity Card */}
            <div className="flex flex-col items-center gap-5 rounded-3xl border border-border/70 bg-card/80 p-6 shadow-sm sm:flex-row">
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl bg-white p-2.5 shadow-sm ring-1 ring-border/60">
                <Image
                  src="/krishna-prashad-bhatt-logo.png"
                  alt={`${PROFILE.name} Full Logo`}
                  width={128}
                  height={128}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-500">
                  Official Brand Mark
                </p>
                <h3 className="mt-1 text-lg font-bold">{PROFILE.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {PROFILE.headlineRole} crafting reliable, scalable web applications with React.js, Next.js, and modern frontend architecture.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
