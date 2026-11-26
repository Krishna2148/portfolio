import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Banner from "./projects/Banner"
import About from "./projects/About"
import Skill from "./projects/Skill"
import { FeaturedProjects } from "./projects/FeaturedProjects"
import { Experience } from "./projects/Experience"
import Contact from "./projects/Contact"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Banner />
        <About />
        <Skill />
        <FeaturedProjects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
