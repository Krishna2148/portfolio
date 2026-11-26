import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Award,
  Briefcase,
  Code2,
  ExternalLink,
  FolderGit2,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BrandLogo } from "@/components/brand-logo"
import { PrintButton } from "@/components/print-button"
import { RoleDurationBadge } from "@/components/live-experience"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCES,
  PROFILE,
  PROJECTS,
  REFERENCES,
  SKILL_GROUPS,
} from "@/lib/portfolio-data"

export const metadata: Metadata = {
  title: "CV / Resume",
  description: `Curriculum Vitae of ${PROFILE.name} — ${PROFILE.headlineRole} experienced in React.js, Next.js, Redux, and Tailwind CSS.`,
  alternates: {
    canonical: "/resume",
  },
}

export default function ResumePage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/30">
      <Navbar />

      <main className="container mx-auto flex-1 max-w-5xl px-4 py-8 md:px-6 md:py-12">
        {/* Action Bar (hidden when printing) */}
        <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-4">
          <Button variant="ghost" asChild className="-ml-3 rounded-full">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </Link>
          </Button>
          <PrintButton />
        </div>

        {/* Printable CV Sheet */}
        <div className="print-sheet overflow-hidden rounded-3xl border border-border/80 bg-card shadow-xl">
          {/* CV Header */}
          <div className="border-b border-border/80 bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950 p-6 text-white sm:p-10 print:bg-white print:text-slate-900 print:p-0 print:pb-5">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <div className="mb-2 flex items-center gap-3">
                  <BrandLogo variant="compact" lightText className="print:hidden" />
                  <span className="hidden font-mono text-xs uppercase tracking-widest text-cyan-700 print:inline">
                    Curriculum Vitae
                  </span>
                </div>
                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {PROFILE.name}
                </h1>
                <p className="text-lg font-medium text-cyan-300 print:text-slate-700">
                  {PROFILE.headlineRole}
                </p>

                <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2 text-xs text-slate-300 print:text-slate-600 sm:text-sm">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-cyan-400 print:text-slate-700" />
                    {PROFILE.location}
                  </span>
                  <a href={`tel:${PROFILE.phone}`} className="inline-flex items-center gap-1.5 hover:text-white">
                    <Phone className="h-3.5 w-3.5 text-cyan-400 print:text-slate-700" />
                    {PROFILE.phone}
                  </a>
                  <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-1.5 hover:text-white">
                    <Mail className="h-3.5 w-3.5 text-cyan-400 print:text-slate-700" />
                    {PROFILE.email}
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-1.5 pt-1 text-xs text-slate-300 print:text-slate-600">
                  <a
                    href={PROFILE.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-cyan-300"
                  >
                    <Globe className="h-3.5 w-3.5 text-cyan-400 print:text-slate-700" />
                    {PROFILE.websiteLabel}
                  </a>
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-cyan-300"
                  >
                    <Github className="h-3.5 w-3.5 text-cyan-400 print:text-slate-700" />
                    {PROFILE.githubHandle}
                  </a>
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-cyan-300"
                  >
                    <Linkedin className="h-3.5 w-3.5 text-cyan-400 print:text-slate-700" />
                    {PROFILE.linkedinHandle}
                  </a>
                </div>
              </div>

              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border-2 border-cyan-400/50 shadow-lg sm:h-28 sm:w-28 print:border-slate-300">
                <Image
                  src={PROFILE.heroImage}
                  alt={PROFILE.name}
                  fill
                  className="object-cover object-top"
                  sizes="112px"
                />
              </div>
            </div>
          </div>

          {/* CV Body */}
          <div className="space-y-8 p-6 sm:p-10 print:space-y-5 print:p-0 print:pt-5">
            {/* Summary */}
            <section>
              <h2 className="border-b border-border/80 pb-2 font-mono text-xs font-bold uppercase tracking-wider text-cyan-500 print:text-slate-900">
                Professional Summary
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground print:text-slate-700 sm:text-base">
                {PROFILE.summary}
              </p>
            </section>

            {/* Skills */}
            <section>
              <h2 className="flex items-center gap-2 border-b border-border/80 pb-2 font-mono text-xs font-bold uppercase tracking-wider text-cyan-500 print:text-slate-900">
                <Code2 className="h-4 w-4" /> Technical &amp; Core Skills
              </h2>
              <div className="mt-4 grid gap-4 md:grid-cols-3 print:grid-cols-3">
                {SKILL_GROUPS.map((group) => (
                  <div
                    key={group.id}
                    className="rounded-2xl border border-border/60 bg-muted/20 p-4 print:border-slate-200 print:bg-transparent print:p-3"
                  >
                    <h3 className="text-xs font-bold uppercase tracking-wide text-foreground">
                      {group.title}
                    </h3>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <Badge
                          key={item.name}
                          variant="secondary"
                          className="rounded-md px-2 py-0.5 text-[11px] font-medium print:border print:border-slate-300 print:bg-slate-100 print:text-slate-800"
                        >
                          {item.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="flex items-center gap-2 border-b border-border/80 pb-2 font-mono text-xs font-bold uppercase tracking-wider text-cyan-500 print:text-slate-900">
                <Briefcase className="h-4 w-4" /> Work Experience
              </h2>
              <div className="mt-4 space-y-5 print:space-y-4">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={`${exp.company}-${idx}`} className="space-y-1.5">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                      <div>
                        <h3 className="text-base font-bold">
                          {exp.role} —{" "}
                          <span className="text-cyan-500 print:text-slate-800">{exp.company}</span>
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 font-mono text-xs font-medium text-muted-foreground print:text-slate-600">
                        <span>{exp.period}</span>
                        <RoleDurationBadge
                          startDate={exp.startDate}
                          endDate={exp.endDate}
                          isCurrent={exp.isCurrent}
                        />
                      </div>
                    </div>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground print:text-slate-700">
                      {exp.highlights.map((bullet, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="flex items-center gap-2 border-b border-border/80 pb-2 font-mono text-xs font-bold uppercase tracking-wider text-cyan-500 print:text-slate-900">
                <FolderGit2 className="h-4 w-4" /> Key Projects
              </h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2 print:grid-cols-2">
                {PROJECTS.map((project) => (
                  <div
                    key={project.slug}
                    className="rounded-2xl border border-border/60 bg-muted/15 p-4 print:border-slate-200 print:bg-transparent print:p-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-bold">{project.title}</h3>
                        <p className="text-xs text-cyan-500 print:text-slate-600">{project.role}</p>
                      </div>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground hover:text-cyan-500 print:text-slate-700"
                        >
                          Live <ExternalLink className="h-3 w-3 no-print" />
                        </a>
                      )}
                    </div>
                    <ul className="mt-2.5 list-disc space-y-1 pl-4 text-xs leading-relaxed text-muted-foreground print:text-slate-700">
                      {project.features.slice(0, 3).map((feature, fIdx) => (
                        <li key={fIdx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education & Certifications */}
            <div className="grid gap-8 md:grid-cols-2 print:grid-cols-2">
              <section>
                <h2 className="flex items-center gap-2 border-b border-border/80 pb-2 font-mono text-xs font-bold uppercase tracking-wider text-cyan-500 print:text-slate-900">
                  <GraduationCap className="h-4 w-4" /> Education
                </h2>
                <div className="mt-4 space-y-1.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-sm font-bold">{EDUCATION.degree}</h3>
                    <span className="font-mono text-xs text-muted-foreground print:text-slate-600">
                      {EDUCATION.period}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-cyan-500 print:text-slate-700">
                    {EDUCATION.institution} ({EDUCATION.university})
                  </p>
                  <p className="pt-1 text-xs leading-relaxed text-muted-foreground print:text-slate-700">
                    {EDUCATION.description}
                  </p>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-2 border-b border-border/80 pb-2 font-mono text-xs font-bold uppercase tracking-wider text-cyan-500 print:text-slate-900">
                  <Award className="h-4 w-4" /> Certifications
                </h2>
                <ul className="mt-4 space-y-2 text-xs">
                  {CERTIFICATIONS.map((cert) => (
                    <li key={cert.title} className="flex items-baseline justify-between gap-2">
                      <span className="font-medium text-foreground print:text-slate-900">
                        {cert.title}{" "}
                        <span className="font-normal text-muted-foreground print:text-slate-600">
                          — {cert.issuer}
                        </span>
                      </span>
                      <span className="font-mono text-muted-foreground print:text-slate-600">
                        {cert.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* References */}
            <section>
              <h2 className="flex items-center gap-2 border-b border-border/80 pb-2 font-mono text-xs font-bold uppercase tracking-wider text-cyan-500 print:text-slate-900">
                <Users className="h-4 w-4" /> References
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 print:grid-cols-2">
                {REFERENCES.map((ref) => (
                  <div
                    key={ref.email}
                    className="rounded-2xl border border-border/60 bg-muted/15 p-4 print:border-slate-200 print:bg-transparent print:p-3"
                  >
                    <h3 className="text-sm font-bold">{ref.name}</h3>
                    <p className="text-xs text-muted-foreground print:text-slate-700">{ref.role}</p>
                    <p className="mt-1 text-xs text-cyan-500 print:text-slate-700">
                      {ref.contact ? `${ref.contact} · ` : ""}
                      {ref.email}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
