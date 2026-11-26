import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { ProjectItem } from "@/lib/portfolio-data"

interface ProjectCardProps {
  project: ProjectItem
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5">
      <Link href={`/projects/${project.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
        <span className="absolute left-3.5 top-3.5 rounded-full border border-white/15 bg-slate-950/75 px-3 py-1 font-mono text-[11px] font-medium text-cyan-300 backdrop-blur-md">
          {project.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="space-y-1.5">
          <p className="font-mono text-xs text-cyan-500">{project.role}</p>
          <h3 className="text-lg font-bold tracking-tight transition-colors group-hover:text-cyan-500">
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </h3>
          <p className="text-xs text-muted-foreground">{project.subtitle}</p>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="rounded-md border border-border/60 bg-background/70 px-2 py-0.5 font-mono text-[11px] font-normal"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
          <Button asChild variant="ghost" size="sm" className="h-8 px-2 text-xs font-semibold hover:text-cyan-500">
            <Link href={`/projects/${project.slug}`}>
              Case Study <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </Button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Live Site <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
