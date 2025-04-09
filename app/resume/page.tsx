import Link from "next/link"
import { ArrowLeft, Download, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function ResumePage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-5">
      <div className="flex flex-col items-start space-y-4">
        <div className="flex w-full justify-between items-center">
          <Button variant="ghost" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button>
        </div>

        <div className="w-full max-w-3xl mx-auto mt-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Krishna Prashad Bhatt</h1>
            <p className="text-xl text-muted-foreground mt-2">Software Engineer</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                <span className="text-sm">Kathmandu, Basundhara • 9806484341 • krishnapdbhatt@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  href="https://github.com/Krishna2148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-muted-foreground hover:text-foreground"
                >
                  <Github className="h-4 w-4 mr-1" /> github.com/Krishna2148
                </Link>
                <Link
                  href="https://www.linkedin.com/in/krishnaprashadbhatt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4 mr-1" /> linkedin.com/in/krishnaprashadbhatt
                </Link>
              </div>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Summary</h2>
            <p>
              Software engineer skilled in ReactJS, NextJS, ReduxJS, Tailwind CSS, and SCSS, with a solid MERN stack foundation. 
              I build dynamic, responsive web applications with clean, intuitive user interfaces. Passionate about creating 
              seamless user experiences and efficient code.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Experience</h2>

            <div className="mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold">Software Engineer</h3>
                  <p className="text-primary">Qpixel</p>
                </div>
                <p className="text-sm text-muted-foreground">Oct 2024 - Present</p>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Developing an Insurance Management System from scratch</li>
                <li>Working on KYC, user and role management, and underwriting claim management</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold">Software Engineer</h3>
                  <p className="text-primary">Tech Nirvana</p>
                </div>
                <p className="text-sm text-muted-foreground">Mar 2024 - Sep 2024</p>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Developed and maintained web applications using Next.js, React.js, and Tailwind CSS</li>
                <li>Created responsive, user-friendly interfaces</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold">Frontend Developer</h3>
                  <p className="text-primary">Evolve IT Hub</p>
                </div>
                <p className="text-sm text-muted-foreground">Oct 2023 - Mar 2024</p>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Utilized React, Next.js, and Tailwind CSS to build dynamic, responsive web applications</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Projects</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold">QIMS (Insurance Management System)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Streamlines processes with modules for User and Role Management, Proposal Handling, KYC, and Underwriting</li>
                <li>Supports Agency Management and accelerates Claim Processing</li>
                <li>Offers flexible Policy and Plan Management</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold">Cali Nepal</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Developed web applications focusing on workout sessions, progress tracking, and motivational content</li>
                <li>Created user-friendly interfaces</li>
                <li><Link href="https://calinepal.org/" target="_blank" className="text-primary hover:underline">https://calinepal.org/</Link></li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold">Nepalirika Hotels</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Developed and maintained web applications with CRUD operations for booking and management systems</li>
                <li>Created interfaces for searching, booking, and managing hotel reservations</li>
                <li><Link href="https://www.nepalirika.com/" target="_blank" className="text-primary hover:underline">https://www.nepalirika.com/</Link></li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold">Tech Nirvana Website</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Developed and maintained web applications using Next.js, React.js, and Tailwind CSS</li>
                <li><Link href="https://technirvana.com.np/" target="_blank" className="text-primary hover:underline">https://technirvana.com.np/</Link></li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold">GoFood (MERN Stack)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Food ordering application with login, signup, item browsing, search, and cart functionality</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Education</h2>
            <div className="mb-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold">Bachelor of Information Technology</h3>
                  <p className="text-primary">Kantipur City College (Purbanchal University)</p>
                </div>
                <p className="text-sm text-muted-foreground">Oct 2018 - Aug 2023</p>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Certifications</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <div className="font-semibold">JavaScript For Beginners</div>
                <p className="text-sm text-muted-foreground">Simplilearn, 2022</p>
              </li>
              <li>
                <div className="font-semibold">MERN Stack Development</div>
                <p className="text-sm text-muted-foreground">Dursikshya Education, 2023</p>
              </li>
              <li>
                <div className="font-semibold">AWS Foundation (Basic cloud computing)</div>
                <p className="text-sm text-muted-foreground">Brodeway, Nepal, 2024</p>
              </li>
              <li>
                <div className="font-semibold">Full Stack Web Development Internship Program</div>
                <p className="text-sm text-muted-foreground">edurekal, 2024</p>
              </li>
              <li>
                <div className="font-semibold">MERN Bootcamp</div>
                <p className="text-sm text-muted-foreground">Evolve IT Hub, 2024</p>
              </li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Frontend</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>React.js / Next.js</li>
                  <li>Redux</li>
                  <li>JavaScript / TypeScript</li>
                  <li>HTML5 / CSS3</li>
                  <li>Tailwind CSS / SASS/SCSS</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Backend & Tools</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Node.js / Express</li>
                  <li>MongoDB</li>
                  <li>RESTful APIs</li>
                  <li>Git / GitHub</li>
                  <li>Agile Methodologies</li>
                  <li>Software Development Life Cycle (SDLC)</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Languages</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Nepali</li>
              <li>English</li>
              <li>Hindi</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section>
            <h2 className="text-xl font-bold mb-4">References</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Saroj Pandey</h3>
                <p className="text-sm text-muted-foreground">HOD, IT - Kantipur City College</p>
                <p className="text-sm">sarojpandey@kcc.edu.np</p>
              </div>
              <div>
                <h3 className="font-semibold">Ram Raut</h3>
                <p className="text-sm text-muted-foreground">Lead Software Engineer</p>
                <p className="text-sm">9843882142 • ramraut10@gmail.com</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}