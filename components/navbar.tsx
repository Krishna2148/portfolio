"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { FileText, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BrandLogo } from "@/components/brand-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { PROFILE } from "@/lib/portfolio-data"

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="no-print sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="group inline-flex items-center transition-transform duration-200 hover:scale-[1.02]"
          aria-label={`${PROFILE.name} Home`}
        >
          <BrandLogo variant="compact" showSubtext />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/projects"
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent hover:text-foreground ${
              pathname.startsWith("/projects") ? "text-cyan-500" : "text-muted-foreground"
            }`}
          >
            All Work
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            className="hidden rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 hover:from-cyan-400 hover:to-indigo-500 sm:inline-flex"
          >
            <Link href="/resume">
              <FileText className="mr-1.5 h-3.5 w-3.5" />
              CV / Resume
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/60 bg-background/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/projects"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              All Projects
            </Link>
            <Link
              href="/resume"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 px-3 py-2 text-sm font-semibold text-white"
            >
              <FileText className="h-4 w-4" />
              View Interactive CV ({PROFILE.shortName})
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
