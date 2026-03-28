// Portfolio data — single source of truth

export const personalInfo = {
  name: "Lahcen Grissi",
  title: "Full Stack Developer",
  tagline: "Crafting digital experiences that push boundaries",
  bio: "I'm a 21-year-old Full Stack Developer from Algeria, graduating with a Licence ISIL from USTHB in 2025. I specialise in building high-performance web and mobile applications with a passion for distributed systems and clean, scalable architecture. When I'm not coding I'm exploring the latest in cloud infrastructure and open-source tooling.",
  location: "Algeria 🇩🇿",
  university: "USTHB — Université des Sciences et de la Technologie Houari Boumediene",
  degree: "Licence ISIL (Informatique) — 2025",
  specialization: "Networks & Distributed Systems",
  email: "lehcengrissi@gmail.com",
  phone: "+213 774 525 109",
  github: "https://github.com/VRMX2",
  linkedin: "https://www.linkedin.com/in/lahcen-grissi-24740a2a1/",
  instagram: "https://www.instagram.com/grissi_lahcen/",
}

export const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "from-blue-500 to-cyan-500",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "from-green-500 to-emerald-500",
    items: ["Node.js", "Express", "REST APIs", "GraphQL", "Go"],
  },
  {
    category: "Mobile",
    icon: "📱",
    color: "from-purple-500 to-pink-500",
    items: ["React Native", "Flutter", "Expo"],
  },
  {
    category: "Database",
    icon: "🗄️",
    color: "from-orange-500 to-amber-500",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
  },
  {
    category: "DevOps & Tools",
    icon: "🛠️",
    color: "from-red-500 to-rose-500",
    items: ["Git", "Docker", "Linux", "CI/CD", "Firebase"],
  },
  {
    category: "Networks & Systems",
    icon: "🌐",
    color: "from-indigo-500 to-violet-500",
    items: ["TCP/IP", "Distributed Systems", "WebSockets", "Nginx", "VPN"],
  },
]

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tech: string[]
  category: string
  liveUrl: string
  githubUrl?: string
  featured: boolean
  gradient: string
}

export const projects: Project[] = [
  {
    id: "moyenne-calculator",
    title: "Moyenne Calculator",
    description: "Smart academic grade calculator for Algerian university students with semester GPA tracking.",
    longDescription:
      "A beautifully designed web app helping USTHB and Algerian university students calculate their semester averages (moyennes) quickly and accurately. Supports multiple UE modules, coefficients, and live GPA tracking.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    category: "Web App",
    liveUrl: "https://calc-moy-vrmx-s1-user.web.app/",
    featured: true,
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
  },
  {
    id: "taskflow",
    title: "TaskFlow App",
    description: "Elegant Kanban-style task management app with real-time collaboration and drag-and-drop boards.",
    longDescription:
      "A full-featured productivity platform with drag-and-drop Kanban boards, real-time updates, priority labels, deadlines, and team collaboration support — designed to feel fast and frictionless.",
    tech: ["React", "Node.js", "Firebase", "Framer Motion"],
    category: "Productivity",
    liveUrl: "https://taskflow-vrmx-khadmoney.web.app/",
    featured: true,
    gradient: "from-purple-500 via-violet-500 to-indigo-500",
  },
  {
    id: "ecommerce-watches",
    title: "E-Commerce Watches Store",
    description: "Premium men's watch store with modern UI, Algerian wilaya delivery, and Google Sheets order sync.",
    longDescription:
      "A production-ready e-commerce platform for selling men's watches in Algeria (COD). Features a conversion-optimized UI, Arabic-friendly layout, real-time order capture API, and n8n-powered Google Sheets automation for seamless order management.",
    tech: ["Next.js", "Go", "PostgreSQL", "n8n", "Google Sheets API"],
    category: "E-Commerce",
    liveUrl: "https://ashrqat.store/products/manwatches",
    featured: true,
    gradient: "from-amber-500 via-orange-500 to-red-500",
  },
]

export const experience = [
  {
    period: "2022 – 2025",
    role: "Licence ISIL — Informatique",
    organization: "USTHB, Algiers",
    description:
      "Studied core computer science: algorithms, data structures, operating systems, networks, databases, and distributed systems. Graduated 2025.",
    icon: "🎓",
    type: "education",
  },
  {
    period: "2024 – Present",
    role: "Full Stack Developer",
    organization: "Freelance",
    description:
      "Building modern web and e-commerce applications for clients in Algeria and internationally. Specialising in Next.js, React, Node.js, and cloud deployments.",
    icon: "💼",
    type: "work",
  },
]
