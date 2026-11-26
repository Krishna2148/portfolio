import type { MetadataRoute } from "next"
import { PROFILE } from "@/lib/portfolio-data"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${PROFILE.website}/sitemap.xml`,
    host: PROFILE.website,
  }
}
