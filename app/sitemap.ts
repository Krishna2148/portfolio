import type { MetadataRoute } from "next"
import { PROFILE, PROJECTS } from "@/lib/portfolio-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = PROFILE.website
  const now = new Date()

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projectRoutes,
  ]
}
