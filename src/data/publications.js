export const publications = [
  {
    id: 1,
    title: "Implementasi Machine Learning untuk Deteksi Anomali dalam Sistem Keamanan Jaringan",
    authors: ["SioWeb", "Ahmad Rahman", "Sarah Johnson"],
    journal: "Journal of Computer Science and Information Technology",
    year: 2024,
    doi: "10.1000/example.2024.001",
    abstract: "Penelitian ini mengimplementasikan algoritma machine learning untuk mendeteksi anomali dalam sistem keamanan jaringan...",
    citations: 15,
    category: "machine-learning",
    featured: true
  },
  {
    id: 2,
    title: "Pengembangan Framework IoT untuk Smart City: Studi Kasus Kota Jakarta",
    authors: ["SioWeb", "Budi Santoso", "Maria Garcia"],
    journal: "International Journal of Internet of Things",
    year: 2023,
    doi: "10.1000/example.2023.045",
    abstract: "Framework IoT yang dikembangkan untuk implementasi smart city di Jakarta...",
    citations: 28,
    category: "iot",
    featured: true
  },
  {
    id: 3,
    title: "Optimasi Algoritma Blockchain untuk Transaksi Mikro dalam E-Commerce",
    authors: ["SioWeb", "David Chen", "Lisa Wong"],
    journal: "Blockchain Technology and Applications",
    year: 2023,
    doi: "10.1000/example.2023.032",
    abstract: "Penelitian tentang optimasi algoritma blockchain untuk mendukung transaksi mikro...",
    citations: 12,
    category: "blockchain",
    featured: false
  },
  {
    id: 4,
    title: "Analisis Performa Cloud Computing untuk Aplikasi Pendidikan Online",
    authors: ["SioWeb", "Rina Dewi", "John Smith"],
    journal: "Cloud Computing in Education",
    year: 2023,
    doi: "10.1000/example.2023.018",
    abstract: "Analisis mendalam tentang performa cloud computing dalam mendukung aplikasi pendidikan online...",
    citations: 22,
    category: "cloud-computing",
    featured: false
  },
  {
    id: 5,
    title: "Pengembangan Sistem Rekomendasi Berbasis Deep Learning untuk Platform E-Learning",
    authors: ["SioWeb", "Eko Prasetyo", "Anna Rodriguez"],
    journal: "Educational Technology Research",
    year: 2022,
    doi: "10.1000/example.2022.067",
    abstract: "Sistem rekomendasi yang menggunakan deep learning untuk personalisasi pembelajaran...",
    citations: 35,
    category: "deep-learning",
    featured: true
  },
  {
    id: 6,
    title: "Keamanan Data dalam Era Big Data: Pendekatan Kriptografi Modern",
    authors: ["SioWeb", "Hendra Wijaya", "Michael Brown"],
    journal: "Cybersecurity and Privacy",
    year: 2022,
    doi: "10.1000/example.2022.041",
    abstract: "Pendekatan kriptografi modern untuk mengamankan data dalam lingkungan big data...",
    citations: 18,
    category: "cybersecurity",
    featured: false
  },
  {
    id: 7,
    title: "Implementasi Edge Computing untuk Aplikasi Real-Time dalam Industri 4.0",
    authors: ["SioWeb", "Dewi Sartika", "Robert Wilson"],
    journal: "Industrial Internet of Things",
    year: 2022,
    doi: "10.1000/example.2022.029",
    abstract: "Implementasi edge computing untuk mendukung aplikasi real-time dalam konteks Industry 4.0...",
    citations: 31,
    category: "edge-computing",
    featured: false
  },
  {
    id: 8,
    title: "Pengembangan Framework Mobile Learning untuk Pendidikan Jarak Jauh",
    authors: ["SioWeb", "Siti Nurhaliza", "Jennifer Lee"],
    journal: "Mobile Learning and Education",
    year: 2021,
    doi: "10.1000/example.2021.078",
    abstract: "Framework mobile learning yang dikembangkan untuk mendukung pendidikan jarak jauh...",
    citations: 42,
    category: "mobile-learning",
    featured: true
  },
  {
    id: 9,
    title: "Analisis Sentimen Berbasis Natural Language Processing untuk Customer Service",
    authors: ["SioWeb", "Ahmad Fauzi", "Carlos Martinez"],
    journal: "Natural Language Processing Applications",
    year: 2021,
    doi: "10.1000/example.2021.055",
    abstract: "Implementasi analisis sentimen menggunakan NLP untuk meningkatkan customer service...",
    citations: 26,
    category: "nlp",
    featured: false
  },
  {
    id: 10,
    title: "Pengembangan Sistem Manajemen Pengetahuan Berbasis Semantic Web",
    authors: ["SioWeb", "Nina Kartika", "Thomas Anderson"],
    journal: "Semantic Web and Knowledge Management",
    year: 2021,
    doi: "10.1000/example.2021.033",
    abstract: "Sistem manajemen pengetahuan yang memanfaatkan teknologi semantic web...",
    citations: 19,
    category: "semantic-web",
    featured: false
  }
];

export const categories = [
  { id: "all", name: "Semua", count: publications.length },
  { id: "machine-learning", name: "Machine Learning", count: publications.filter(p => p.category === "machine-learning").length },
  { id: "iot", name: "Internet of Things", count: publications.filter(p => p.category === "iot").length },
  { id: "blockchain", name: "Blockchain", count: publications.filter(p => p.category === "blockchain").length },
  { id: "cloud-computing", name: "Cloud Computing", count: publications.filter(p => p.category === "cloud-computing").length },
  { id: "deep-learning", name: "Deep Learning", count: publications.filter(p => p.category === "deep-learning").length },
  { id: "cybersecurity", name: "Cybersecurity", count: publications.filter(p => p.category === "cybersecurity").length },
  { id: "edge-computing", name: "Edge Computing", count: publications.filter(p => p.category === "edge-computing").length },
  { id: "mobile-learning", name: "Mobile Learning", count: publications.filter(p => p.category === "mobile-learning").length },
  { id: "nlp", name: "Natural Language Processing", count: publications.filter(p => p.category === "nlp").length },
  { id: "semantic-web", name: "Semantic Web", count: publications.filter(p => p.category === "semantic-web").length }
];

export const getPublicationsByCategory = (category) => {
  if (category === "all") return publications;
  return publications.filter(publication => publication.category === category);
};

export const getFeaturedPublications = () => {
  return publications.filter(publication => publication.featured);
};

export const searchPublications = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return publications.filter(publication => 
    publication.title.toLowerCase().includes(lowercaseQuery) ||
    publication.authors.some(author => author.toLowerCase().includes(lowercaseQuery)) ||
    publication.journal.toLowerCase().includes(lowercaseQuery) ||
    publication.abstract.toLowerCase().includes(lowercaseQuery)
  );
};

export const getTotalCitations = () => {
  return publications.reduce((total, pub) => total + pub.citations, 0);
};
