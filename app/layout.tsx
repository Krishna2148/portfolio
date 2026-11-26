import type React from "react"
import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { EDUCATION, PROFILE } from "@/lib/portfolio-data"

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#070B14" },
  ],
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(PROFILE.website),
  title: {
    default: `${PROFILE.name} — ${PROFILE.headlineRole}`,
    template: `%s | ${PROFILE.name}`,
  },
  description: PROFILE.summary,
  keywords: [
    "Krishna Prashad Bhatt",
    "Krishna Bhatt",
    "Software Engineer",
    "Software Engineer Nepal",
    "React.js Developer",
    "Next.js Developer",
    "Redux",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "Software Engineer Kathmandu",
    "Qpixel",
  ],
  authors: [{ name: PROFILE.name, url: PROFILE.website }],
  creator: PROFILE.name,
  publisher: PROFILE.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/kpb-favicon-32.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/kpb-favicon-64.png?v=3", sizes: "64x64", type: "image/png" },
      { url: "/favicon.ico?v=3", sizes: "any" },
    ],
    shortcut: "/kpb-favicon-32.png?v=3",
    apple: [{ url: "/apple-icon.png?v=3", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PROFILE.website,
    siteName: `${PROFILE.name} Portfolio`,
    title: `${PROFILE.name} — ${PROFILE.headlineRole}`,
    description: PROFILE.summary,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} — ${PROFILE.headlineRole}`,
    description: PROFILE.summary,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  jobTitle: PROFILE.headlineRole,
  description: PROFILE.summary,
  url: PROFILE.website,
  email: `mailto:${PROFILE.email}`,
  telephone: `+977-${PROFILE.phone}`,
  image: `${PROFILE.website}${PROFILE.heroImage}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressRegion: "Bagmati",
    addressCountry: "NP",
  },
  worksFor: {
    "@type": "Organization",
    name: "Qpixel Pvt Ltd",
    url: "https://theqpixel.com/",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: `${EDUCATION.institution} (${EDUCATION.university})`,
  },
  knowsAbout: [
    "React.js",
    "Next.js",
    "Redux",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Shadcn UI",
    "RESTful APIs",
    "Frontend Architecture",
  ],
  sameAs: [PROFILE.website, PROFILE.github, PROFILE.linkedin],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-cyan-500/25 selection:text-cyan-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
