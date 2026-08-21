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
  video?: string;
  category: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Smart Outdoor Activity Planner",
    description:
      "An AI-assisted outdoor activity planner built with FastAPI, LangGraph, LangChain, React, and Vite. It combines weather data, OpenAI-compatible LLM tooling, and a lightweight frontend to help users plan activities more confidently.",
    technologies: [
      "FastAPI 0.115",
      "Uvicorn",
      "LangGraph 0.2",
      "LangChain 0.3",
      "langchain-openai",
      "Groq",
      "OpenWeatherMap",
      "Pydantic v2",
      "pydantic-settings",
      "React 18",
      "Vite 6",
      "TailwindCSS 3",
      "Axios",
      "lucide-react",
      "Docker",
      "Docker Compose",
    ],
    live: "https://smart-outdoor-activity-planner.vercel.app/",
    video: "/video/activity.mp4",
    category: "AI · Planning · Full-Stack",
    featured: true,
  },
  {
    name: "Learning Management System",
    description:
      "A full learning-management system where students can browse and buy courses, watch video lessons, track progress, and earn signed certificates when they finish a course. Educators can publish courses, and admins manage everything from a special dashboard.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "Stripe",
      "JWT",
      "Bcrypt",
    ],
    live: "https://lms-snowy-two-39.vercel.app/",
    video: "/video/LMS.mp4",
    category: "Next.js · Full-Stack · LMS",
    featured: true,
  },
  {
    name: "NextMart",
    description:
      "A modern e-commerce platform built with Next.js 14 and React, featuring server-side rendering, cart and wishlist management, secure payments, real-time chat, product media handling, and cloud-based deployment.",
    technologies: [
      "Next.js 14",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Cloudinary",
      "Socket.IO",
      "Nodemailer",
      "Vercel",
      "Render",
    ],
    live: "https://nextjs-ecommerce-store-rouge.vercel.app/",
    video: "/video/NextMart.mp4",
    category: "Next.js · E-commerce · Full-Stack",
    featured: true,
  },
  {
    name: "MultiVendor",
    description:
      "A multi-vendor e-commerce platform where customers can shop, pay with Stripe or PayPal, choose cash on delivery, and chat in real time with sellers. It includes image storage, email notifications, and cloud deployment for both frontend and backend.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "PayPal",
      "Cloudinary",
      "Socket.IO",
      "Nodemailer",
      "Vercel",
      "Render",
    ],
    live: "https://multi-vendor-ecommerce-89ikdxdp6-mhamzanadeems-projects.vercel.app/",
    video: "/video/multivendor.mp4",
    category: "React · E-commerce · Full-Stack",
    featured: true,
  },
  {
    name: "School Management System",
    description:
      "A modern school management platform built with Next.js 14, React, and TypeScript, featuring secure authentication, database-backed data flows, calendar views, and charts for better school operations.",
    technologies: [
      "Next.js 14",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "MongoDB",
      "NextAuth.js",
      "Recharts",
      "React Calendar",
    ],
    live: "https://school-management-system-xi-ochre.vercel.app/",
    video: "/video/schoolmanagementsystem.mp4",
    category: "Next.js · School Management · Full-Stack",
    featured: true,
  },
  {
    name: "Real Estate Marketplace",
    description:
      "A real estate marketplace built with React, Redux Toolkit, React Router, Bootstrap, Vite, Node.js, Express, Mongoose, JWT, Nodemailer, and Cloudinary for image uploads. It supports secure authentication, image storage, and a responsive browsing experience for property listings.",
    technologies: [
      "React 18",
      "Redux Toolkit",
      "React Router 6",
      "Bootstrap 5",
      "Vite",
      "Node.js",
      "Express 4",
      "Mongoose 8",
      "JWT",
      "Nodemailer",
      "MongoDB",
      "Cloudinary",
    ],
    live: "https://real-estate-marketplace-132uwzt6y-mhamzanadeems-projects.vercel.app/",
    video: "/video/realestatemarketplace.mp4",
    category: "React · Real Estate · Full-Stack",
    featured: true,
  },
  {
    name: "CareerCompass",
    description:
      "A career guidance platform built with React and modern state management tools, focused on responsive UI, smooth motion, and maintainable frontend architecture.",
    technologies: [
      "React 19 (Vite)",
      "React Router DOM",
      "Redux Toolkit",
      "React Redux",
      "Context API",
      "Axios",
      "Tailwind CSS",
      "React Icons",
      "Framer Motion",
      "ESLint",
      "Prettier",
      "Vercel",
    ],
    live: "https://career-compass-tan-phi.vercel.app/",
    video: "/video/careercompass.mp4",
    category: "React · Career Platform · Frontend",
    featured: true,
  },
  {
    name: "Admin Dashboard (Typescript)",
    description:
      "A modern admin dashboard built with Vite, React, TypeScript, Sass, and Express, with routing, icons, environment-based configuration, and a clean interface for managing application workflows.",
    technologies: [
      "Vite 8",
      "React 19",
      "React Router DOM 7",
      "TypeScript 6",
      "Sass",
      "React Icons",
      "React Compiler",
      "Express 4",
      "tsx",
      "cors",
      "dotenv",
    ],
    live: "https://typescript-admin.vercel.app/admin/dashboard",
    video: "/video/typescript_admin.mp4",
    category: "React · Admin Dashboard · Full-Stack",
    featured: true,
  },
  {
    name: "Blog",
    description:
      "A modern blog platform with a React frontend and Node.js backend, supporting rich text publishing, secure authentication, file uploads, rate limiting, and cloud-hosted data.",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Mongoose",
      "React 19",
      "Vite",
      "Tailwind CSS v4",
      "React Quill",
      "React Router v7",
      "Axios",
      "JWT",
      "Multer",
      "Helmet",
      "express-rate-limit",
    ],
    live: "https://nodejs-blog-crud-app.vercel.app/",
    video: "/video/Blog.mp4",
    category: "React · Blog · Full-Stack",
    featured: true,
  },
  {
    name: "Mern E-commerce",
    description:
      "A MERN e-commerce backend and API focused on secure authentication, product and order data, password resets, and email notifications.",
    technologies: [
      "Node.js",
      "Express 5",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcryptjs",
      "Nodemailer",
      "cookie-parser",
    ],
    github: "https://github.com/mhamzanadeem/nodejs_ecommerce.git",
    category: "MERN · E-commerce · Backend",
    featured: true,
  },
  {
    name: "Currency Exchange Website",
    description:
      "A full-stack currency exchange website with a FastAPI backend for exchange-rate simulation and a React frontend for the user experience, with Dockerized deployment support.",
    technologies: [
      "FastAPI",
      "React",
      "Docker",
      "Docker Compose",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Axios",
    ],
    github: "https://github.com/mhamzanadeem/Currency_Exchange_Website.git",
    category: "FastAPI · React · Full-Stack",
    featured: true,
  },
  {
    name: "DevSecOps CI/CD Pipeline for Netflix Application",
    description:
      "Build production-ready AI applications with full-stack architecture and scalable deployment.",
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "Docker", "AWS EC2", "GitHub Actions"],
    github: "https://github.com/mhamzanadeem/DevSecOps",
    image:"/public/images/Netflix.jpg",
    category: "Full-Stack · Deployment · Cloud",
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
    name: "Multimodal PDF RAG Assistant",
    description:
      "Build an intelligent system capable of answering questions from PDFs containing text, tables, and images with high retrieval accuracy.",
    technologies: ["LangChain", "LlamaIndex", "FAISS", "CLIP", "BLIP", "Python", "Streamlit"],
    github: "https://github.com/mhamzanadeem/Multimodal-PDF-RAG-Assistant.git",
    category: "AI · RAG · Multimodal Systems",
    featured: true,
  },
  {
    name: "Stopwatch",
    description:
      "A lightweight stopwatch app with theme persistence, built with HTML, CSS, and JavaScript. It uses CSS variables for light and dark themes and keeps the interface focused on quick timing tasks.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/mhamzanadeem/Stopwatch.git",
    category: "JavaScript · Utility · Frontend",
    featured: true,
  },
  {
    name: "QR Code Generator",
    description:
      "A simple QR code generator built with HTML, CSS, and JavaScript for creating QR codes from user input through a clean, minimal interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/mhamzanadeem/qr-code-generator.git",
    category: "JavaScript · Utility · Frontend",
    featured: true,
  },
  {
    name: "Password Generator",
    description:
      "A password generator project with a small frontend built using HTML, CSS, and JavaScript, focused on quick credential generation and an easy-to-use demo interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/mhamzanadeem/Password-Generator.git",
    category: "JavaScript · Utility · Frontend",
    featured: true,
  },
  {
    name: "Food Recipe App",
    description:
      "Build a modern recipe search application with detailed recipe information and favorites management.",
    technologies: ["React", "React Router", "Forkify API", "JavaScript", "CSS"],
    live: "https://react-hook-ay6g.vercel.app/",
    video: "/video/FoodRecipeApp.mp4",
    category: "React · API · Frontend",
    featured: true,
  },
  {
    name: "Weather App",
    description:
      "Build a responsive weather application that provides real-time weather information for any city.",
    technologies: ["React", "OpenWeather API", "JavaScript", "CSS", "REST API"],
    live: "https://react-hook-roan.vercel.app/",
    video: "/video/WeatherApp.mp4",
    category: "React · API · Frontend",
    featured: true,
  },
  {
    name: "Northern Pakistan Travel Website",
    description:
      "Build a fully responsive travel website showcasing tourist destinations across Northern Pakistan.",
    technologies: ["React", "Vite", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    live: "https://tour-travel-app-inky.vercel.app/",
    video: "/video/NorthernPakistanTravelWebsite.mp4",
    category: "React · Frontend · Responsive",
    featured: true,
  },
];

export const contact = {
  intro: "Iâ€™m currently open to new opportunities and collaborations â€” feel free to reach out.",
};

