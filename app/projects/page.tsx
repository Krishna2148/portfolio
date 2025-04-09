import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-start space-y-4">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h1>
        <p className="text-gray-500 md:text-xl dark:text-gray-400">
          A collection of my work, side projects, and experiments
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <ProjectCard
          title="E-commerce Website"
          description="A full-featured online store built with Next.js, featuring product listings, cart functionality, and secure checkout."
          tags={["Next.js", "React", "Tailwind CSS", "Stripe"]}
          imageUrl="/placeholder.svg?height=200&width=300"
          projectUrl="/projects/ecommerce"
        />
        <ProjectCard
          title="Task Management App"
          description="A productivity application that helps users organize tasks, set priorities, and track progress."
          tags={["React", "Redux", "Node.js", "MongoDB"]}
          imageUrl="/placeholder.svg?height=200&width=300"
          projectUrl="/projects/task-manager"
        />
        <ProjectCard
          title="Portfolio Website"
          description="A responsive portfolio website showcasing my work and skills, built with Next.js and Tailwind CSS."
          tags={["Next.js", "Tailwind CSS", "Framer Motion"]}
          imageUrl="/placeholder.svg?height=200&width=300"
          projectUrl="/projects/portfolio"
        />
        <ProjectCard
          title="Weather Dashboard"
          description="A weather application that provides real-time weather data and forecasts for locations worldwide."
          tags={["React", "API Integration", "Chart.js"]}
          imageUrl="/placeholder.svg?height=200&width=300"
          projectUrl="/projects/weather-dashboard"
        />
        <ProjectCard
          title="Blog Platform"
          description="A content management system for creating and managing blog posts with user authentication."
          tags={["Next.js", "Node.js", "MongoDB", "Auth"]}
          imageUrl="/placeholder.svg?height=200&width=300"
          projectUrl="/projects/blog-platform"
        />
        <ProjectCard
          title="Social Media Dashboard"
          description="An analytics dashboard for tracking social media performance across multiple platforms."
          tags={["React", "D3.js", "API Integration"]}
          imageUrl="/placeholder.svg?height=200&width=300"
          projectUrl="/projects/social-dashboard"
        />
      </div>
    </div>
  )
}
