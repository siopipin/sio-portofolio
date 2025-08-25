export const articles = [
  {
    id: 1,
    title: "Memulai dengan Next.js 14: Fitur Terbaru dan Best Practices",
    excerpt: "Panduan lengkap untuk memulai pengembangan web dengan Next.js 14, termasuk fitur App Router, Server Components, dan optimasi performa.",
    content: "Next.js 14 membawa banyak fitur baru yang revolusioner...",
    category: "web-development",
    tags: ["Next.js", "React", "JavaScript", "Web Development"],
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    featured: true,
    slug: "memulai-nextjs-14"
  },
  {
    id: 2,
    title: "Implementasi AI dalam Aplikasi Mobile: Studi Kasus Chatbot",
    excerpt: "Bagaimana mengintegrasikan AI dan machine learning dalam aplikasi mobile untuk meningkatkan user experience.",
    content: "Artificial Intelligence telah menjadi bagian penting dalam pengembangan aplikasi mobile...",
    category: "mobile-development",
    tags: ["AI", "Mobile", "Machine Learning", "Flutter"],
    publishedAt: "2024-01-10",
    readTime: "12 min read",
    featured: true,
    slug: "ai-mobile-applications"
  },
  {
    id: 3,
    title: "Optimasi Database untuk Aplikasi Skala Besar",
    excerpt: "Teknik dan strategi untuk mengoptimalkan performa database pada aplikasi yang memiliki traffic tinggi.",
    content: "Database optimization adalah salah satu aspek kritis dalam pengembangan aplikasi...",
    category: "backend",
    tags: ["Database", "Performance", "PostgreSQL", "MongoDB"],
    publishedAt: "2024-01-05",
    readTime: "10 min read",
    featured: false,
    slug: "database-optimization"
  },
  {
    id: 4,
    title: "Membangun Sistem IoT dengan Raspberry Pi dan Node.js",
    excerpt: "Tutorial lengkap membuat sistem IoT sederhana menggunakan Raspberry Pi dan Node.js untuk monitoring sensor.",
    content: "Internet of Things (IoT) telah menjadi tren teknologi yang berkembang pesat...",
    category: "iot",
    tags: ["IoT", "Raspberry Pi", "Node.js", "MQTT"],
    publishedAt: "2023-12-20",
    readTime: "15 min read",
    featured: false,
    slug: "iot-raspberry-pi-nodejs"
  },
  {
    id: 5,
    title: "State Management di React: Redux vs Context API",
    excerpt: "Perbandingan mendalam antara Redux dan Context API untuk state management dalam aplikasi React.",
    content: "State management adalah salah satu konsep penting dalam pengembangan aplikasi React...",
    category: "web-development",
    tags: ["React", "Redux", "Context API", "State Management"],
    publishedAt: "2023-12-15",
    readTime: "9 min read",
    featured: false,
    slug: "redux-vs-context-api"
  },
  {
    id: 6,
    title: "Keamanan Aplikasi Web: Best Practices untuk Developer",
    excerpt: "Panduan lengkap tentang keamanan aplikasi web, dari autentikasi hingga proteksi terhadap serangan umum.",
    content: "Keamanan aplikasi web adalah aspek yang tidak boleh diabaikan...",
    category: "security",
    tags: ["Security", "Web Security", "Authentication", "OWASP"],
    publishedAt: "2023-12-10",
    readTime: "14 min read",
    featured: true,
    slug: "web-security-best-practices"
  },
  {
    id: 7,
    title: "Membangun REST API dengan Express.js dan TypeScript",
    excerpt: "Tutorial step-by-step membuat REST API yang robust menggunakan Express.js dan TypeScript.",
    content: "REST API adalah fondasi penting dalam pengembangan aplikasi modern...",
    category: "backend",
    tags: ["Express.js", "TypeScript", "REST API", "Node.js"],
    publishedAt: "2023-12-05",
    readTime: "11 min read",
    featured: false,
    slug: "express-typescript-rest-api"
  },
  {
    id: 8,
    title: "Responsive Design: Dari Mobile-First hingga Desktop",
    excerpt: "Strategi dan teknik untuk membuat desain yang responsive dan optimal di semua perangkat.",
    content: "Responsive design telah menjadi standar dalam pengembangan web modern...",
    category: "design",
    tags: ["CSS", "Responsive Design", "Mobile-First", "Tailwind CSS"],
    publishedAt: "2023-11-30",
    readTime: "7 min read",
    featured: false,
    slug: "responsive-design-mobile-first"
  }
];

export const categories = [
  { id: "all", name: "Semua", count: articles.length },
  { id: "web-development", name: "Web Development", count: articles.filter(a => a.category === "web-development").length },
  { id: "mobile-development", name: "Mobile Development", count: articles.filter(a => a.category === "mobile-development").length },
  { id: "backend", name: "Backend", count: articles.filter(a => a.category === "backend").length },
  { id: "iot", name: "IoT", count: articles.filter(a => a.category === "iot").length },
  { id: "security", name: "Security", count: articles.filter(a => a.category === "security").length },
  { id: "design", name: "Design", count: articles.filter(a => a.category === "design").length }
];

export const getArticlesByCategory = (category) => {
  if (category === "all") return articles;
  return articles.filter(article => article.category === category);
};

export const getFeaturedArticles = () => {
  return articles.filter(article => article.featured);
};

export const searchArticles = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return articles.filter(article => 
    article.title.toLowerCase().includes(lowercaseQuery) ||
    article.excerpt.toLowerCase().includes(lowercaseQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
