import type { MetadataRoute } from "next"
import { PROFILE } from "@/lib/portfolio-data"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${PROFILE.name} — ${PROFILE.headlineRole}`,
    short_name: PROFILE.shortName,
    description: PROFILE.summary,
    start_url: "/",
    display: "standalone",
    background_color: "#070B14",
    theme_color: "#06B6D4",
    icons: [
      {
        src: "/kpb-favicon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/kpb-favicon-64.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
