import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  Briefcase,
  Calendar,
  ExternalLink,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LiveExperienceCounter, RoleDurationBadge } from "@/components/live-experience"
import { Reveal } from "@/components/reveal"
import { CERTIFICATIONS, EDUCATION, EXPERIENCES, PROJECTS } from "@/lib/portfolio-data"

export function Experience() {
  return (
    <section id="experience" className="border-b border-border/50 bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center rounded-full border border-border bg-card px-3.5 py-1 font-mono text-xs font-medium text-cyan-500">
              04 // EXPERIENCE &amp; CAREER TIMELINE
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Career Timeline &amp; Real-Time Tenure
            </h2>
            <p className="mt-2 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Complete engineering journey—from foundational internship to leading frontend product architecture.
            </p>
          </div>

          <Button asChild variant="outline" className="w-fit rounded-full">
            <Link href="/resume">
              Open Full CV <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </Reveal>

        {/* Real-Time Ticking Experience Counter */}
        <Reveal delay={80} className="mt-8">
          <LiveExperienceCounter />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          {/* Vertical Glowing Career Timeline */}
          <div className="relative pl-6 sm:pl-9 lg:col-span-8">
            {/* Spine */}
            <div
              aria-hidden="true"
              className="absolute bottom-4 left-2.5 top-3 w-0.5 bg-gradient-to-b from-emerald-500 via-cyan-500 to-indigo-500/40 sm:left-3.5"
            />

            <div className="space-y-8">
              {EXPERIENCES.map((exp, idx) => (
                <Reveal key={`${exp.company}-${idx}`} delay={idx * 120}>
                  <div className="relative">
                    {/* Timeline Node */}
                    <span
                      aria-hidden="true"
                      className={`absolute -left-[22px] top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 sm:-left-[30px] sm:h-5 sm:w-5 ${
                        exp.isCurrent
                          ? "border-emerald-400 bg-emerald-500 shadow-[0_0_16px_rgba(16,185,129,0.75)]"
                          : "border-cyan-400 bg-background"
                      }`}
                    >
                      {exp.isCurrent && (
                        <span className="h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      )}
                    </span>

                    <article
                      className={`rounded-3xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 sm:p-7 ${
                        exp.isCurrent
                          ? "border-emerald-500/35 bg-gradient-to-br from-card via-card to-emerald-500/[0.04] hover:border-emerald-500/60"
                          : "border-border/70 bg-card/75 hover:border-cyan-500/40"
                      }`}
                    >
                      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                        <div className="space-y-1.5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`flex h-8 w-8 items-center justify-center rounded-xl ${
                                exp.isCurrent
                                  ? "bg-emerald-500/15 text-emerald-500"
                                  : "bg-cyan-500/10 text-cyan-500"
                              }`}
                            >
                              <Briefcase className="h-4 w-4" />
                            </span>
                            <h3 className="text-xl font-bold">{exp.role}</h3>
                            <span className="rounded-full border border-border bg-muted/60 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                              {exp.type}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pl-10 text-sm">
                            {exp.companyUrl ? (
                              <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-semibold text-cyan-500 hover:underline"
                              >
                                {exp.company} <ExternalLink className="h-3.5 w-3.5" />
                              </a>
                            ) : (
                              <span className="font-semibold text-cyan-500">{exp.company}</span>
                            )}
                            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col items-start gap-1.5 pl-10 sm:items-end sm:pl-0">
                          <span className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-muted-foreground">
                            <Calendar className="h-3.5 w-3.5 text-cyan-500" />
                            {exp.period}
                          </span>
                          <RoleDurationBadge
                            startDate={exp.startDate}
                            endDate={exp.endDate}
                            isCurrent={exp.isCurrent}
                          />
                        </div>
                      </div>

                      <div className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-muted/40 px-2.5 py-1 font-mono text-[11px] text-foreground/80">
                        <Sparkles className="h-3 w-3 text-cyan-500" />
                        {exp.impactBadge}
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{exp.summary}</p>

                      <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                        {exp.highlights.map((point, pointIdx) => (
                          <li key={pointIdx} className="flex items-start gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {exp.stack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="rounded-md border border-border/60 bg-background/70 font-mono text-[11px] font-normal"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </article>
                  </div>
                </Reveal>
              ))}

              {/* Education Milestone at base of timeline */}
              <Reveal delay={320}>
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[22px] top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 border-indigo-400 bg-background sm:-left-[30px] sm:h-5 sm:w-5"
                  />
                  <div className="rounded-3xl border border-indigo-500/25 bg-card/75 p-6 shadow-sm">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                          <GraduationCap className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="text-lg font-bold">{EDUCATION.degree}</h3>
                          <p className="text-sm font-medium text-indigo-400">
                            {EDUCATION.institution} · {EDUCATION.university}
                          </p>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">{EDUCATION.period}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {EDUCATION.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Sidebar: Certifications + Shipped Product Gallery + CV CTA */}
          <div className="space-y-6 lg:col-span-4">
            <Reveal delay={140}>
              <div className="rounded-3xl border border-border/70 bg-card/80 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-500">
                    <Award className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-mono text-xs text-cyan-500">CREDENTIALS</p>
                    <h3 className="text-lg font-bold">Certifications</h3>
                  </div>
                </div>

                <ul className="mt-5 space-y-3">
                  {CERTIFICATIONS.map((cert) => (
                    <li
                      key={cert.title}
                      className="rounded-2xl border border-border/60 bg-background/60 p-3 transition-colors hover:border-cyan-500/35"
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="text-xs font-semibold leading-snug">{cert.title}</p>
                        <span className="shrink-0 font-mono text-[11px] text-cyan-500">{cert.year}</span>
                      </div>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">{cert.issuer}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="rounded-3xl border border-border/70 bg-card/80 p-6 shadow-sm">
                <p className="font-mono text-xs text-cyan-500">AI PRODUCT SHOWCASE</p>
                <h3 className="mt-1 text-base font-bold">Shipped UI Highlights</h3>
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  {PROJECTS.slice(0, 4).map((project) => (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-border/70"
                    >
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="160px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                      <span className="absolute bottom-1.5 left-2 right-2 truncate font-mono text-[10px] font-semibold text-white">
                        {project.title.split("–")[0].trim()}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="rounded-3xl border border-cyan-500/25 bg-gradient-to-br from-cyan-500/10 via-card to-indigo-500/10 p-6">
                <p className="font-mono text-xs font-semibold text-cyan-500">UPDATED CV</p>
                <h3 className="mt-2 text-lg font-bold">Need a printable resume?</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  View my formatted CV with all projects, skills, education, and references—ready to print or save as PDF.
                </p>
                <Button
                  asChild
                  className="mt-5 w-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:from-cyan-400 hover:to-indigo-500"
                >
                  <Link href="/resume">
                    View &amp; Download CV <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
