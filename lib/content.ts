export const profile = {
  name: "Joab G. Castronuevo",
  title: "Full-Stack Developer",
  intro:
    "I'm a Computer Science student and Full-Stack Developer focused on building modern web applications, backend systems, and AI-powered solutions.",
  email: "joab.castronuevo.7@gmail.com",
  github: "https://github.com/joabcastronuevo7-lgtm",
  linkedin: "https://www.linkedin.com/in/joabcastronuevoggd-531a53413",
  resume: "/Joab-Castronuevo-Resume.pdf",
  siteDescription:
    "Portfolio of Joab G. Castronuevo, a graduating Computer Science student and Full-Stack Developer building web applications, backend systems, and AI-powered solutions.",
} as const;

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export const about = {
  paragraphs: [
    "I'm a graduating Computer Science student at Central Philippine University with a strong interest in full-stack development, backend engineering, and AI integration.",
    "I enjoy building applications that combine practical functionality with thoughtful design. Through academic projects and independent development, I've gained experience working with modern frontend technologies, backend services, databases, and AI-powered systems.",
    "I'm continuously improving my skills and looking for opportunities to apply what I learn to real-world development.",
  ],
  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "Central Philippine University",
    period: "August 2022 – May 2027",
  },
};

/**
 * Media slots. Add real assets to /public/projects and fill `src` / `videoSrc`
 * (or set `embedUrl` for a hosted video). Empty entries render a labelled placeholder.
 */
export type MediaItem = {
  label: string;
  kind: "video" | "image";
  src?: string;
  videoSrc?: string;
  embedUrl?: string;
  alt?: string;
};

export const upquizie = {
  index: "01",
  kind: "Academic project",
  title: "UpQuizie",
  fullTitle:
    "AI-Powered PDF-Based Examination Generator and Administration Using Retrieval-Augmented Generation (RAG) Algorithm",
  role: "Full-Stack Developer",
  description:
    "An AI-powered examination platform that uses uploaded learning materials and Retrieval-Augmented Generation to generate context-aware examination questions.",
  stack: [
    "React.js",
    "TypeScript",
    "Go",
    "Gin",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Milvus",
    "Ollama",
    "Docker",
    "Nginx",
    "RAG",
  ],
  contributions: [
    "Developed the full-stack examination application.",
    "Implemented document processing and vector-based retrieval.",
    "Integrated locally hosted language models for automated question generation.",
    "Developed examination administration and automated scoring.",
    "Implemented student performance analytics.",
    "Built frontend interfaces, backend APIs, and database integrations.",
  ],
  github: "https://github.com/joabcastronuevo7-lgtm/UpQuizie",
  liveUrl: undefined as string | undefined, // set when a public demo exists
  media: [
    { label: "Demo video", kind: "video" },
    { label: "Exam generation", kind: "image" },
    { label: "Analytics", kind: "image" },
  ] as MediaItem[],
};

export const clashbound = {
  index: "02",
  kind: "Personal project",
  status: "In Development",
  title: "ClashBound",
  platform: "Roblox",
  description:
    "A cinematic autonomous PvP stickman fighting game focused on intelligent combat behavior, team coordination, and anime-inspired fight choreography.",
  features: [
    { title: "Autonomous combat AI", note: "Fighters that read the fight and decide for themselves." },
    { title: "1v1 and 2v2 combat", note: "Duels and coordinated team fights." },
    { title: "Fighter roster & abilities", note: "Distinct characters, each with their own moves." },
    { title: "Team coordination", note: "Partners that work together, not just side by side." },
    { title: "Cinematic choreography", note: "Anime-inspired fight sequences." },
    { title: "Training & progression", note: "Systems for growing a fighter over time." },
  ],
  media: [
    { label: "Gameplay footage", kind: "video" },
    { label: "Screenshot", kind: "image" },
    { label: "Screenshot", kind: "image" },
  ] as MediaItem[],
};

export const skillGroups = [
  { title: "Programming Languages", items: ["TypeScript", "Go", "SQL"] },
  { title: "Frontend", items: ["Next.js", "React.js"] },
  { title: "Backend", items: ["Go", "Gin", "Node.js", "Express.js", "API Development"] },
  { title: "Databases", items: ["PostgreSQL", "Milvus"] },
  { title: "Tools & Technologies", items: ["Git", "GitHub", "Docker", "Nginx", "Ollama"] },
  {
    title: "Specialized Experience",
    items: [
      "Retrieval-Augmented Generation",
      "Vector-based Retrieval",
      "AI Integration",
      "Backend Architecture",
      "Data Management",
    ],
  },
];
