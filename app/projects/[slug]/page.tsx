import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// This is a mock function to simulate fetching project data
// In a real application, you would fetch this data from an API or database
function getProjectData(slug: string) {
  const projects = {
    ecommerce: {
      title: "E-commerce Website",
      description:
        "A full-featured online store built with Next.js, featuring product listings, cart functionality, and secure checkout.",
      longDescription:
        "This e-commerce platform was built to provide a seamless shopping experience for users. It includes features such as product search and filtering, user authentication, shopping cart, wishlist, and secure checkout with Stripe integration. The admin panel allows for easy management of products, orders, and customer data.",
      tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
      imageUrl: "/placeholder.svg?height=400&width=800",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/ecommerce",
      features: [
        "Responsive design for all devices",
        "Product search and filtering",
        "User authentication and profiles",
        "Shopping cart and wishlist functionality",
        "Secure checkout with Stripe",
        "Admin panel for product and order management",
      ],
      technologies: [
        "Next.js for server-side rendering and static generation",
        "React for the user interface",
        "Tailwind CSS for styling",
        "Stripe for payment processing",
        "MongoDB for database",
        "NextAuth.js for authentication",
      ],
    },
    "task-manager": {
      title: "Task Management App",
      description: "A productivity application that helps users organize tasks, set priorities, and track progress.",
      longDescription:
        "This task management application was designed to help users stay organized and productive. It allows users to create tasks, set due dates and priorities, organize tasks into projects, and track their progress. The app includes features such as drag-and-drop task organization, task filtering, and data visualization for productivity insights.",
      tags: ["React", "Redux", "Node.js", "MongoDB"],
      imageUrl: "/placeholder.svg?height=400&width=800",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/task-manager",
      features: [
        "User authentication and profiles",
        "Create, edit, and delete tasks",
        "Organize tasks into projects",
        "Set due dates and priorities",
        "Drag-and-drop task organization",
        "Task filtering and search",
        "Data visualization for productivity insights",
      ],
      technologies: [
        "React for the user interface",
        "Redux for state management",
        "Node.js and Express for the backend",
        "MongoDB for database",
        "JWT for authentication",
        "Chart.js for data visualization",
      ],
    },
    // Add more projects as needed
  }

  return projects[slug as keyof typeof projects] || null
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectData(params.slug)

  if (!project) {
    return (
      <div className="container px-4 py-12 md:px-6 md:py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <img
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p>{project.longDescription}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <ul className="list-disc pl-5 space-y-2">
                {project.features.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <ul className="list-disc pl-5 space-y-2">
                {project.technologies.map((tech: string, index: number) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6 sticky top-8">
            <h2 className="text-xl font-bold mb-6">Project Links</h2>

            <div className="space-y-4">
              <Button asChild className="w-full">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> View Live Site
                </a>
              </Button>

              <Button asChild variant="outline" className="w-full">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View Source Code
                </a>
              </Button>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-2">Want to build something similar?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                I'm available for freelance projects and full-time opportunities.
              </p>
              <Button asChild variant="secondary" className="w-full">
                <Link href="/#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
