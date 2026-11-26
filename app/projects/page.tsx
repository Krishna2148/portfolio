import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { PROFILE, PROJECTS } from "@/lib/portfolio-data"

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description: `Explore production web applications and frontend systems built by ${PROFILE.name} using React.js, Next.js, Redux, and Tailwind CSS.`,
  alternates: {
    canonical: "/projects",
  },
}

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-background py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <Button variant="ghost" asChild className="mb-6 -ml-3 rounded-full">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>

          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center rounded-full border border-border bg-card px-3.5 py-1 font-mono text-xs font-medium text-cyan-500">
              PORTFOLIO ARCHIVE
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Shipped Products &amp; Case Studies
            </h1>
            <p className="text-base text-muted-foreground sm:text-lg">
              Production web platforms and frontend systems engineered across enterprise SaaS, healthcare, library operations, fitness, and hospitality.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
