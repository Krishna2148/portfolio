import Image from "next/image"
import Link from "next/link"
import { Github, Globe, Linkedin, Mail } from "lucide-react"
import { PROFILE } from "@/lib/portfolio-data"

export function Footer() {
  return (
    <footer className="no-print border-t border-border/60 bg-background py-12">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 md:flex-row md:px-6">
        <Link
          href="/"
          className="group flex items-center gap-4 transition-opacity hover:opacity-95"
        >
          <span className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-md ring-1 ring-border/70 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/krishna-prashad-bhatt-logo.png"
              alt={`${PROFILE.name} Full Logo`}
              width={96}
              height={96}
              className="h-full w-full object-contain"
            />
          </span>
          <div>
            <p className="text-base font-extrabold tracking-tight">{PROFILE.name}</p>
            <p className="font-mono text-xs uppercase tracking-wider text-cyan-500">
              {PROFILE.headlineRole}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{PROFILE.location}</p>
          </div>
        </Link>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <div className="flex items-center gap-2">
            <Link
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-border/70 p-2 text-muted-foreground transition-colors hover:border-cyan-500/40 hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-border/70 p-2 text-muted-foreground transition-colors hover:border-cyan-500/40 hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href={PROFILE.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              className="rounded-full border border-border/70 p-2 text-muted-foreground transition-colors hover:border-cyan-500/40 hover:text-foreground"
            >
              <Globe className="h-4 w-4" />
            </Link>
            <Link
              href={`mailto:${PROFILE.email}`}
              aria-label="Email"
              className="rounded-full border border-border/70 p-2 text-muted-foreground transition-colors hover:border-cyan-500/40 hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
