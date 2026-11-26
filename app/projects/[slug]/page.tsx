import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, ExternalLink, Layers } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getProjectBySlug, PROFILE, PROJECTS } from "@/lib/portfolio-data"

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: "Project Not Found",
      robots: { index: false, follow: false },
    }
  }

  return {
    title: project.title,
    description: project.description,
    keywords: [...project.tags, project.category, PROFILE.name],
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${PROFILE.name}`,
      description: project.description,
      url: `${PROFILE.website}/projects/${project.slug}`,
      images: [
        {
          url: project.imageUrl,
          width: 1200,
          height: 675,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${PROFILE.name}`,
      description: project.description,
      images: [project.imageUrl],
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="container mx-auto flex flex-1 max-w-4xl flex-col items-center justify-center px-4 py-24 text-center">
          <h1 className="text-3xl font-bold">Project Not Found</h1>
          <p className="mt-3 text-muted-foreground">
            The project you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Button asChild className="mt-6 rounded-full">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-background py-12 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <Button variant="ghost" asChild className="mb-8 -ml-3 rounded-full">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
          </Button>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-8">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-medium text-cyan-500">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{project.role}</span>
                </div>

                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {project.title}
                </h1>
                <p className="text-lg text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-md font-mono text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border/80 bg-muted shadow-xl">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 760px"
                />
              </div>

              <div className="space-y-8">
                <section className="rounded-3xl border border-border/70 bg-card/70 p-6 sm:p-8">
                  <h2 className="text-xl font-bold">Project Overview</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{project.longDescription}</p>
                </section>

                <section className="rounded-3xl border border-border/70 bg-card/70 p-6 sm:p-8">
                  <h2 className="text-xl font-bold">Key Features Delivered</h2>
                  <ul className="mt-4 space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm leading-relaxed sm:text-base">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-3xl border border-border/70 bg-card/70 p-6 sm:p-8">
                  <h2 className="flex items-center gap-2 text-xl font-bold">
                    <Layers className="h-5 w-5 text-cyan-500" />
                    Frontend Architecture &amp; Stack
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {project.architecture.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6 rounded-3xl border border-border/70 bg-card/80 p-6 shadow-sm">
                <div>
                  <p className="font-mono text-xs text-cyan-500">PROJECT DETAILS</p>
                  <h2 className="mt-1 text-lg font-bold">{project.subtitle}</h2>
                </div>

                <div className="space-y-3">
                  {project.liveUrl && (
                    <Button
                      asChild
                      className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:from-cyan-400 hover:to-indigo-500"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Visit Live Website
                      </a>
                    </Button>
                  )}

                  <Button asChild variant="outline" className="w-full rounded-full">
                    <Link href="/resume">View Full CV</Link>
                  </Button>
                </div>

                <div className="border-t border-border/60 pt-5">
                  <h3 className="text-sm font-semibold">Interested in working together?</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {PROFILE.availability}. Let&apos;s discuss how I can help ship your next frontend product.
                  </p>
                  <Button asChild variant="secondary" className="mt-4 w-full rounded-full">
                    <Link href="/#contact">Contact Me</Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
