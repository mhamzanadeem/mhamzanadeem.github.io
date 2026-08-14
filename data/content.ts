export const site = {
  name: "Muhammad Hamza Nadeem",
  role: "AI-First Full Stack Engineer",
  tagline:
    "Building AI-first, production-grade full-stack applications with modern web technologies, LLM-powered pipelines, and scalable deployment workflows.",
  location: "Islamabad, Pakistan",
  email: "hamzaatwork2000@gmail.com",
  github: "https://github.com/mhamzanadeem",
  linkedin: "https://www.linkedin.com/in/hamza-nadeem2000/",
  profileImage: "/images/profile/DP.png",
  resume: "/resume.pdf",
};

export const social = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Email", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}` },
];

export const about = {
  title: "AI-First Full Stack Engineer",
  bio: [
    "I'm an AI Full Stack Engineer with a strong focus on building AI-first, production-grade full-stack applications.",
    "I specialize in designing and developing intelligent systems that combine modern web technologies with LLM-powered pipelines.",
    "My experience includes building RAG systems, agentic workflows, and multimodal AI applications using frameworks like LangChain and LangGraph, along with integrating APIs from OpenAI, Vertex AI, and other LLM providers. I enjoy working across the full stack - from UI development to backend architecture, vector databases, and cloud deployment.",
    "I am particularly interested in building scalable AI systems, optimizing retrieval pipelines, and deploying real-world applications that use LLMs beyond simple chat interfaces.",
  ],
  highlights: [
    "Python",
    "FastAPI",
    "Node.js",
    "Next.js",
    "React.js",
    "LangChain",
    "LangGraph",
    "RAG Systems",
    "Vector Databases",
    "OpenAI / Vertex AI",
    "Docker",
    "AWS EC2",
    "PostgreSQL",
    "Supabase",
  ],
};

export const services = [
  { name: "Full-Stack Development" },
  { name: "AI & LLM Systems" },
  { name: "Cloud & DevOps" },
];

export const skills = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Vite", "Responsive Design"],
  },
  {
    title: "Backend",
    items: ["Node.js", "FastAPI", "Flask", "Python", "REST API"],
  },
  {
    title: "AI & Data",
    items: ["LangChain", "LangGraph", "RAG Systems", "LlamaIndex", "FAISS", "Vector Databases", "OpenAI / Vertex AI", "CLIP", "BLIP"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "Supabase", "SQL"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Docker", "AWS EC2", "GitHub Actions"],
  },
  {
    title: "Tools",
    items: ["Git", "Streamlit", "FFmpeg", "MoviePy", "CLIP", "BLIP"],
  },
];

export const proficiency = [
  { label: "Frontend", value: 92 },
  { label: "Backend", value: 88 },
  { label: "AI & Data Engineering", value: 85 },
  { label: "Programming", value: 90 },
  { label: "DevOps", value: 78 },
  { label: "Mobile Development", value: 72 },
];

export const education = [
  {
    institution: "FAST-NUCES",
    degree: "Bachelor of Science in Computer Science",
    dates: "2022 - 2026",
    location: "Islamabad, Pakistan",
    link: "https://www.linkedin.com/company/fastnuislamabadofficial/",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREqTdLuGa1SzYw6uZlfCwa7NTbOOnvYsKDQR68UWPBdHe23h8XfuBxAr4m&s=10",
    chips: ["AI", "NLP", "Generative AI", "Agentic AI", "Deep Learning"],
  },
];

export const experience = [
  {
    role: "AI Full Stack Engineer",
    company: "Blunder Bot Technologies",
    period: "June 2025 - August 2025",
    location: "Remote",
    link: "https://www.linkedin.com/company/blunder-bot-technologies/",
    logo: "https://www.blunderbottech.com/images/logo.svg",
    points: [
      "Developed and maintained full-stack web applications across frontend, backend, and database layers using modern web technologies.",
      "Designed and implemented RESTful APIs for efficient client-server communication and scalable system architecture.",
      "Integrated AI models into production workflows to enhance application intelligence and user experience.",
      "Built responsive and dynamic user interfaces ensuring seamless interaction with backend services.",
      "Contributed to CI/CD pipelines and deployment workflows, improving release efficiency and reliability.",
      "Participated in the end-to-end software development lifecycle, from design and development to deployment and maintenance.",
    ],
    tags: ["REST API", "CI/CD"],
  },
  {
    role: "MERN Engineer",
    company: "Codistan Ventures",
    period: "May 2024 - August 2024",
    location: "Islamabad, Pakistan",
    link: "https://www.linkedin.com/company/codistan/",
    logo: "https://codistan.org/wp-content/uploads/2025/12/Codistan_Logo.webp",
    points: [
      "Developed full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
      "Built secure authentication and form validation systems using React Hooks and Yup validation schemas.",
      "Designed and implemented responsive UI components using the Berry Template for improved user experience.",
      "Developed an interactive sports gaming application focused on performance and user engagement.",
      "Managed MongoDB database integration with backend services, ensuring efficient and reliable data flow.",
      "Collaborated with cross-functional team members to deliver scalable and production-ready web solutions.",
    ],
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Yup"],
  },
];

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  live?: string;
  github?: string;
  image?: string;
  category: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Food Recipe App",
    description:
      "Build a modern recipe search application with detailed recipe information and favorites management.",
    technologies: ["React", "React Router", "Forkify API", "JavaScript", "CSS"],
    live: "https://react-hook-ay6g.vercel.app/",
    category: "React · API · Frontend",
    featured: true,
  },
  {
    name: "Weather App",
    description:
      "Build a responsive weather application that provides real-time weather information for any city.",
    technologies: ["React", "OpenWeather API", "JavaScript", "CSS", "REST API"],
    live: "https://react-hook-roan.vercel.app/",
    category: "React · API · Frontend",
    featured: true,
  },
  {
    name: "Northern Pakistan Travel Website",
    description:
      "Build a fully responsive travel website showcasing tourist destinations across Northern Pakistan.",
    technologies: ["React", "Vite", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    live: "https://tour-travel-app-inky.vercel.app/",
    category: "React · Frontend · Responsive",
    featured: true,
  },
  {
    name: "Multimodal PDF RAG Assistant",
    description:
      "Build an intelligent system capable of answering questions from PDFs containing text, tables, and images with high retrieval accuracy.",
    technologies: ["LangChain", "LlamaIndex", "FAISS", "CLIP", "BLIP", "Python", "Streamlit"],
    github: "https://github.com/mhamzanadeem/Multimodal-PDF-RAG-Assistant.git",
    category: "AI · RAG · Multimodal Systems",
    featured: true,
  },
  {
    name: "AI Video Generation Pipeline",
    description:
      "Automate end-to-end creation of structured animated videos from a simple text prompt.",
    technologies: ["LangGraph", "FastAPI", "OpenAI API", "TTS", "FFmpeg", "Python"],
    github: "https://github.com/mhamzanadeem/Text_to_video_Generation",
    category: "AI Agents · LangGraph · Automation",
    featured: true,
  },
  {
    name: "RAG Benchmarking & Evaluation System",
    description:
      "Compare and evaluate multiple retrieval strategies to identify the most effective RAG architecture.",
    technologies: ["Python", "FAISS", "LangChain", "GraphRAG", "Flask", "React"],
    github: "https://github.com/mhamzanadeem/RAG-Evaluation",
    category: "RAG Research · Evaluation · LLM Systems",
    featured: true,
  },
  {
    name: "AI Full-Stack Deployment System",
    description:
      "Build production-ready AI applications with full-stack architecture and scalable deployment.",
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "Docker", "AWS EC2", "GitHub Actions"],
    github: "https://github.com/mhamzanadeem/DevSecOps",
    category: "Full-Stack · Deployment · Cloud",
    featured: true,
  },
];

export const contact = {
  intro: "I’m currently open to new opportunities and collaborations — feel free to reach out.",
};
