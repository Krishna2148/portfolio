export interface ExperienceItem {
  role: string
  company: string
  companyUrl?: string
  location: string
  period: string
  startDate: string
  endDate?: string
  isCurrent?: boolean
  type: string
  impactBadge: string
  summary: string
  highlights: string[]
  stack: string[]
}

export interface ProjectItem {
  slug: string
  title: string
  subtitle: string
  category: "Enterprise Product" | "Web Platform" | "Client & Agency"
  status?: "In Development" | "Shipped"
  role: string
  description: string
  longDescription: string
  imageUrl: string
  liveUrl?: string
  githubUrl?: string
  tags: string[]
  features: string[]
  architecture: string[]
  featured?: boolean
}

export interface SkillGroup {
  id: string
  title: string
  description: string
  items: { name: string; level: string }[]
}

export interface ReferenceItem {
  name: string
  role: string
  contact: string
  email: string
}

export const PROFILE = {
  name: "Krishna Prashad Bhatt",
  shortName: "Krishna Bhatt",
  monogram: "KB",
  headlineRole: "Software Engineer",
  roles: [
    "Software Engineer",
    "React.js & Next.js Specialist",
    "UI Architecture & Design Systems",
    "Performance-Focused Builder",
  ],
  location: "Basundhara, Kathmandu, Nepal",
  phone: "9840910541",
  email: "krishnapdbhatt@gmail.com",
  website: "https://www.krishnabhatt.com.np",
  websiteLabel: "www.krishnabhatt.com.np",
  github: "https://github.com/Krishna2148/",
  githubHandle: "github.com/Krishna2148",
  linkedin: "https://www.linkedin.com/in/krishnaprashadbhatt/",
  linkedinHandle: "linkedin.com/in/krishnaprashadbhatt",
  facebook: "https://www.facebook.com/anamol.bhatt.5/",
  instagram: "https://www.instagram.com/anamolbhatt/",
  heroImage: "/images/krishna-hero.jpg",
  aboutImage: "/images/krishna-about.jpg",
  availability: "Open to Software Engineering Roles",
  summary:
    "Experienced Software Engineer with expertise in frontend development using React.js, Next.js, and Redux. Proficient in designing and delivering scalable, responsive, and user-centric web applications, with a strong focus on modern development practices, clean architecture, and performance optimization.",
  aboutParagraphs: [
    "I'm Krishna Prashad Bhatt, a Software Engineer focused on crafting fast, accessible, and maintainable frontend architectures with React.js, Next.js, Redux, and Tailwind CSS.",
    "Currently leading frontend development at Qpixel Pvt Ltd—driving an end-to-end Insurance Management System from project initiation while mentoring interns—I've built production platforms spanning fintech, healthcare, hospitality, fitness, and library operations.",
  ],
  stats: [
    { value: "2+", label: "Years Engineering" },
    { value: "7+", label: "Shipped & Active Apps" },
    { value: "99%", label: "UI Craft & Reliability" },
  ],
} as const

export const CAREER_START_ISO = "2023-10-01T00:00:00"

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Qpixel Pvt Ltd",
    companyUrl: "https://theqpixel.com/",
    location: "Kathmandu, Nepal",
    period: "Oct 2024 – Present",
    startDate: "2024-10-01T00:00:00",
    isCurrent: true,
    type: "Full-time · Lead Frontend",
    impactBadge: "Current Role · Mentoring 2 Interns",
    summary:
      "Leading frontend architecture from project initiation for an enterprise insurance platform while mentoring a team of two interns.",
    highlights: [
      "Led frontend development from project initiation for QIMS (Insurance Management System), overseeing codebase structure and engineering standards.",
      "Mentored two frontend interns through code reviews, component design, and Agile sprint delivery.",
      "Architected critical insurance workflows including KYC verification, underwriting, claims processing, account management, product setup, and commission tracking.",
      "Delivered scalable, responsive, and user-centric interfaces focused on performance optimization and maintainability.",
    ],
    stack: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Shadcn UI", "REST APIs"],
  },
  {
    role: "Software Engineer",
    company: "Tech Nirvana Pvt Ltd",
    companyUrl: "https://technirvana.com.np/",
    location: "Kathmandu, Nepal",
    period: "Mar 2024 – Sep 2024",
    startDate: "2024-03-01T00:00:00",
    endDate: "2024-09-30T23:59:59",
    type: "Full-time",
    impactBadge: "Websites & Admin Panels",
    summary:
      "Designed, developed, and maintained responsive client web applications and admin dashboards from the ground up.",
    highlights: [
      "Built and shipped responsive web applications and full-featured admin panels using Next.js, React.js, and Tailwind CSS.",
      "Collaborated closely with backend engineers to integrate RESTful APIs and ensure smooth end-to-end data flows.",
      "Standardized reusable UI components for consistent branding, accessibility, and clean code maintainability.",
    ],
    stack: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "REST APIs"],
  },
  {
    role: "Frontend Developer",
    company: "Evolve IT Hub Pvt Ltd",
    location: "Kathmandu, Nepal",
    period: "Oct 2023 – Feb 2024",
    startDate: "2023-10-01T00:00:00",
    endDate: "2024-02-29T23:59:59",
    type: "Part-time Internship",
    impactBadge: "MERN & Next.js Integration",
    summary:
      "Built responsive full-stack web interfaces with React, Next.js, Tailwind CSS, and MongoDB.",
    highlights: [
      "Developed dynamic, mobile-first web pages and interactive components using React, Next.js, and Tailwind CSS.",
      "Supported smooth frontend–backend integration with MongoDB-backed APIs and authentication flows.",
      "Practiced Agile teamwork, Git workflows, and debugging across cross-browser layouts.",
    ],
    stack: ["React.js", "Next.js", "Tailwind CSS", "MongoDB", "JavaScript"],
  },
]

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend & UI Systems",
    description: "Building component libraries, state-heavy apps, and crisp micro-interactions.",
    items: [
      { name: "React.js", level: "Core" },
      { name: "Next.js", level: "Core" },
      { name: "JavaScript (ES6+)", level: "Core" },
      { name: "TypeScript", level: "Core" },
      { name: "Redux", level: "State" },
      { name: "Tailwind CSS", level: "Styling" },
      { name: "Shadcn UI", level: "UI Kit" },
      { name: "CSS Animations", level: "Motion" },
    ],
  },
  {
    id: "engineering",
    title: "APIs, Data & Core CS",
    description: "Connecting clean frontends to reliable data models and solid software fundamentals.",
    items: [
      { name: "RESTful API Integration", level: "Integration" },
      { name: "MongoDB", level: "Database" },
      { name: "Node.js & Express", level: "Backend" },
      { name: "Object-Oriented Programming", level: "CS Core" },
      { name: "Python Programming", level: "Language" },
      { name: "Debugging & Profiling", level: "Quality" },
    ],
  },
  {
    id: "workflow",
    title: "Architecture & Delivery",
    description: "Shipping maintainable products with Agile teams and clear stakeholder alignment.",
    items: [
      { name: "Software Architecture", level: "Design" },
      { name: "Agile & Scrum", level: "Process" },
      { name: "Git & GitHub", level: "VCS" },
      { name: "Client Communication", level: "Team" },
      { name: "Mentoring & Leadership", level: "Lead" },
      { name: "Problem-Solving", level: "Mindset" },
    ],
  },
]

export const PROJECTS: ProjectItem[] = [
  {
    slug: "security-service-erp",
    title: "Security Service ERP System",
    subtitle: "Workforce, Contract & Billing Operations ERP",
    category: "Enterprise Product",
    role: "Software Engineer",
    description:
      "Comprehensive Security Service ERP integrating client management, map-based workstation tracking, contracts, dynamic salary rules, attendance, and billing.",
    longDescription:
      "Developing a comprehensive Security Service ERP system integrating core ERP modules to automate and streamline security workforce and business operations. Designed interconnected workflows spanning client profiles, map-based workstation tracking, contract management, dynamic client salary rules, attendance integration, and automated client billing with strict cross-module data consistency.",
    imageUrl: "/images/projects/security-service-erp.jpg",
    tags: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Map Tracking",
    ],
    features: [
      "Client Management with client profiles, workstation management, and map-based workstation location tracking",
      "Contract Management Module for client contracts, workstation-specific agreements, employee designations, manpower requirements, and contractual terms",
      "Dynamic Client Salary Rules retrieving contract billing rates, salary structures, and financial details",
      "Attendance Management integrated directly with Contract Management by client, workstation, contract, and designation assignments",
      "Interconnected business workflows connecting workforce allocation, contract-based salary calculations, attendance tracking, and client billing",
    ],
    architecture: [
      "Unified multi-module ERP frontend enforcing data consistency across client, contract, attendance, and finance modules",
      "Dynamic rule-driven salary and billing computation linked directly to active workstation agreements",
      "Interactive map-based workstation geolocation and assignment views for operational visibility",
    ],
    featured: true,
  },
  {
    slug: "qims",
    title: "QIMS – Insurance Management System",
    subtitle: "Enterprise InsurTech Product · Qpixel Pvt Ltd",
    category: "Enterprise Product",
    role: "Software Engineer",
    description:
      "End-to-end insurance operations platform covering KYC, underwriting, claims processing, policy setup, and commission management.",
    longDescription:
      "Led frontend development from project initiation for QIMS, overseeing codebase architecture and mentoring two interns. Engineered complex multi-step workflows for insurance operations with clean component abstractions, role-based views, and responsive data-dense interfaces.",
    imageUrl: "/images/projects/qims.jpg",
    liveUrl: "https://theqpixel.com/",
    tags: ["Next.js", "React.js", "Redux", "Tailwind CSS", "Shadcn UI"],
    features: [
      "KYC verification and customer onboarding workflows",
      "Underwriting assessment and proposal approval pipelines",
      "Claims processing, tracking, and settlement modules",
      "Account management, product setup, and commission management",
      "Role-based access control and modular dashboard architecture",
    ],
    architecture: [
      "Component-driven architecture built with React.js, Next.js, and Shadcn UI",
      "Centralized Redux state management for complex multi-step insurance forms",
      "RESTful API integration with validation, error boundaries, and Agile sprint releases",
    ],
    featured: true,
  },
  {
    slug: "caresync",
    title: "CareSync – Patient Management System",
    subtitle: "Healthcare Operations & Patient Portal",
    category: "Web Platform",
    role: "Software Engineer",
    description:
      "Full patient management lifecycle and secure patient portal covering registration, appointments, medical records, prescriptions, and billing.",
    longDescription:
      "Designed and built both the clinical operations interface and the patient-facing portal for CareSync. Streamlined daily clinic workflows—from patient intake and appointment scheduling to medical record tracking and invoice generation—alongside a clear, accessible portal for patients.",
    imageUrl: "/images/projects/caresync.jpg",
    tags: ["React.js", "Next.js", "Tailwind CSS", "REST APIs", "State Management"],
    features: [
      "End-to-end patient registration and appointment scheduling",
      "Medical record tracking, prescriptions, and lab report views",
      "Automated billing invoice generation and status tracking",
      "Secure patient portal with profile management and personal history",
    ],
    architecture: [
      "Responsive role-aware UI separating clinical staff and patient portal views",
      "Reusable form and table primitives for dense healthcare records",
      "Clean API integration layer for appointments, records, and billing states",
    ],
    featured: true,
  },
  {
    slug: "libra-nova",
    title: "Libra Nova – Library Management System",
    subtitle: "Admin Inventory & Member Loan Portal",
    category: "Web Platform",
    role: "Lead Frontend Developer",
    description:
      "Comprehensive library operations platform featuring an admin inventory dashboard, member portal, and full book loan lifecycle.",
    longDescription:
      "Served as Lead Frontend Developer architecting Libra Nova with React.js and structured state management. Built both the administrative inventory workspace and a self-service member portal supporting catalog discovery, availability checks, borrowing, and returns.",
    imageUrl: "/images/projects/libra-nova.jpg",
    tags: ["React.js", "Redux", "Tailwind CSS", "REST APIs"],
    features: [
      "Admin dashboard for adding books, editing catalog metadata, and tracking stock levels",
      "Secure member portal for registration, profile updates, and borrowing history",
      "Complete book loan lifecycle: catalog search, real-time availability, borrow, and return",
    ],
    architecture: [
      "Modular React.js architecture with predictable state management",
      "Search and filter pipelines for fast catalog discovery",
      "Consistent status indicators for stock levels and loan due states",
    ],
    featured: true,
  },
  {
    slug: "calinepal",
    title: "Cali Nepal",
    subtitle: "Fitness Tracking & Calisthenics Platform",
    category: "Client & Agency",
    role: "Frontend Developer",
    description:
      "Responsive fitness and calisthenics web platform focused on workout sessions, progress tracking, and motivational content delivery.",
    longDescription:
      "Designed and developed intuitive, responsive web interfaces for Cali Nepal to simplify workout tracking and boost member engagement. Structured workout session flows, progress views, and content delivery for seamless desktop and mobile usage.",
    imageUrl: "/images/projects/calinepal.jpg",
    liveUrl: "https://calinepal.org/",
    tags: ["Next.js", "React.js", "Tailwind CSS", "Animations"],
    features: [
      "Workout session discovery and structured training views",
      "Progress tracking interfaces tailored for clarity and motivation",
      "Mobile-first responsive layout optimized for daily gym/outdoor use",
    ],
    architecture: [
      "Next.js and React.js frontend with Tailwind CSS utility styling",
      "Smooth UI transitions and responsive media layouts",
      "SEO-friendly routing and fast page loads",
    ],
    featured: true,
  },
  {
    slug: "nepalirika",
    title: "Nepalirika Hotels",
    subtitle: "Hospitality Booking & Reservation System",
    category: "Client & Agency",
    role: "Frontend Developer",
    description:
      "Hotel booking and management web platform with full CRUD reservation workflows, room search, and hospitality management tools.",
    longDescription:
      "Developed and maintained Nepalirika Hotels' booking and management web interfaces. Focused on intuitive room search, reservation flows, and reliable CRUD management tools that elevated guest satisfaction and operational reliability.",
    imageUrl: "/images/projects/nepalirika.jpg",
    liveUrl: "https://www.nepalirika.com/",
    tags: ["Next.js", "React.js", "Tailwind CSS", "CRUD Systems"],
    features: [
      "Room search, availability browsing, and reservation booking flows",
      "Admin CRUD workflows for managing rooms, bookings, and guest records",
      "Responsive hospitality showcase tailored for desktop and mobile travelers",
    ],
    architecture: [
      "React.js and Next.js frontend with clean form validation",
      "Predictable CRUD state synchronization with backend reservation endpoints",
      "Optimized image and layout presentation for hospitality conversion",
    ],
    featured: true,
  },
  {
    slug: "tech-nirvana",
    title: "Tech Nirvana Website",
    subtitle: "Software Solutions Company Platform",
    category: "Client & Agency",
    role: "Software Engineer",
    description:
      "Modern corporate web presence for Tech Nirvana built with Next.js, React.js, Tailwind CSS, and scalable UI components.",
    longDescription:
      "Developed and maintained the official web application for Tech Nirvana Pvt Ltd. Delivered clean, reusable UI components ensuring consistent brand identity, optimal Core Web Vitals performance, and tight integration with backend services.",
    imageUrl: "/images/projects/tech-nirvana.jpg",
    liveUrl: "https://technirvana.com.np/",
    tags: ["Next.js", "React.js", "Tailwind CSS", "REST APIs"],
    features: [
      "Brand-consistent service showcase and responsive landing architecture",
      "Reusable UI component library for rapid feature iteration",
      "Backend API integration for inquiries and dynamic content",
    ],
    architecture: [
      "Next.js App Router with Tailwind CSS design tokens",
      "Performance-tuned responsive assets and semantic HTML structure",
      "Clean separation between presentation components and API handlers",
    ],
    featured: true,
  },
]

export const EDUCATION = {
  degree: "Bachelor of Information Technology (BIT)",
  institution: "Kantipur City College",
  university: "Purbanchal University",
  period: "2018 – 2023",
  description:
    "Academic program offered by Purbanchal University, providing a solid foundation in computing, software development, and core IT principles.",
} as const

export const CERTIFICATIONS = [
  { title: "MERN Bootcamp", issuer: "Evolve IT Hub", year: "2024" },
  { title: "Full Stack Web Development Internship Program", issuer: "Edureka", year: "2024" },
  { title: "AWS Foundation (Cloud Computing)", issuer: "Broadway Infosys, Nepal", year: "2024" },
  { title: "MERN Stack Development", issuer: "Dursikshya Education", year: "2023" },
  { title: "JavaScript For Beginners", issuer: "Simplilearn", year: "2022" },
] as const

export const REFERENCES: ReferenceItem[] = [
  {
    name: "Saroj Pandey",
    role: "HOD, IT — Kantipur City College",
    contact: "",
    email: "sarojpandey@kcc.edu.np",
  },
  {
    name: "Ram Raut",
    role: "Lead Software Engineer",
    contact: "9843882142",
    email: "ramraut10@gmail.com",
  },
]

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS.find((project) => project.slug === slug)
}
