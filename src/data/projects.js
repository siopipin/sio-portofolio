export const projects = [
  {
    id: 1,
    title: "E-Learning Platform",
    description: "Platform pembelajaran online yang terintegrasi dengan sistem manajemen pembelajaran (LMS) untuk institusi pendidikan.",
    category: "fullstack",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    image: "/projects/elearning.jpg",
    demoUrl: "https://demo-elearning.sioweb.com",
    githubUrl: "https://github.com/sioweb/elearning-platform",
    featured: true,
    year: 2024
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Aplikasi mobile banking dengan fitur transfer, pembayaran, dan investasi yang aman dan user-friendly.",
    category: "mobile",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    image: "/projects/mobile-banking.jpg",
    demoUrl: "https://mobile-banking.sioweb.com",
    githubUrl: "https://github.com/sioweb/mobile-banking",
    featured: true,
    year: 2023
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description: "Website e-commerce modern dengan sistem manajemen produk, keranjang belanja, dan pembayaran online.",
    category: "web",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/ecommerce.jpg",
    demoUrl: "https://ecommerce.sioweb.com",
    githubUrl: "https://github.com/sioweb/ecommerce-website",
    featured: false,
    year: 2023
  },
  {
    id: 4,
    title: "AI Chatbot Assistant",
    description: "Chatbot AI yang dapat membantu customer service dengan pemrosesan bahasa alami dan integrasi API.",
    category: "ai",
    technologies: ["Python", "TensorFlow", "OpenAI API", "FastAPI"],
    image: "/projects/chatbot.jpg",
    demoUrl: "https://chatbot.sioweb.com",
    githubUrl: "https://github.com/sioweb/ai-chatbot",
    featured: false,
    year: 2024
  },
  {
    id: 5,
    title: "Task Management App",
    description: "Aplikasi manajemen tugas dengan fitur kolaborasi tim, timeline, dan integrasi kalender.",
    category: "mobile",
    technologies: ["Flutter", "Firebase", "Provider", "Dart"],
    image: "/projects/task-manager.jpg",
    demoUrl: "https://task-manager.sioweb.com",
    githubUrl: "https://github.com/sioweb/task-management",
    featured: false,
    year: 2023
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Website portofolio personal yang responsive dengan fitur blog dan showcase proyek.",
    category: "web",
    technologies: ["Next.js", "Tailwind CSS", "MDX", "Vercel"],
    image: "/projects/portfolio.jpg",
    demoUrl: "https://portfolio.sioweb.com",
    githubUrl: "https://github.com/sioweb/portfolio-website",
    featured: false,
    year: 2024
  },
  {
    id: 7,
    title: "IoT Smart Home System",
    description: "Sistem smart home dengan kontrol perangkat IoT melalui aplikasi mobile dan web dashboard.",
    category: "iot",
    technologies: ["React Native", "Node.js", "MQTT", "Raspberry Pi"],
    image: "/projects/smart-home.jpg",
    demoUrl: "https://smart-home.sioweb.com",
    githubUrl: "https://github.com/sioweb/smart-home-system",
    featured: true,
    year: 2024
  },
  {
    id: 8,
    title: "Data Analytics Dashboard",
    description: "Dashboard analitik data real-time dengan visualisasi grafik dan laporan yang interaktif.",
    category: "web",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    image: "/projects/analytics.jpg",
    demoUrl: "https://analytics.sioweb.com",
    githubUrl: "https://github.com/sioweb/analytics-dashboard",
    featured: false,
    year: 2023
  }
];

export const categories = [
  { id: "all", name: "Semua", count: projects.length },
  { id: "web", name: "Web Development", count: projects.filter(p => p.category === "web").length },
  { id: "mobile", name: "Mobile Development", count: projects.filter(p => p.category === "mobile").length },
  { id: "fullstack", name: "Full Stack", count: projects.filter(p => p.category === "fullstack").length },
  { id: "ai", name: "AI & Machine Learning", count: projects.filter(p => p.category === "ai").length },
  { id: "iot", name: "IoT", count: projects.filter(p => p.category === "iot").length }
];

export const getProjectsByCategory = (category) => {
  if (category === "all") return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getFeaturedProjectsForMobile = () => {
  return projects.filter(project => project.featured).slice(0, 4);
};

export const getFeaturedProjectsForDesktop = () => {
  return projects.filter(project => project.featured).slice(0, 3);
};
