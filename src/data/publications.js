export const publications = [
  {
    id: 1,
    slug: "deepfake-video-detection-using-spatiotemporal-convolutional-network-and-prnu",
    title: "Deepfake Video Detection Using Spatiotemporal Convolutional Network and Photo Response Non Uniformity",
    authors: ["Sio Jurnalis Pipin", "Ronsen Purba", "Muhammad Fermi Pasha"],
    journal: "IEEE International Conference of Computer Science and Information Technology (ICOSNIKOM)",
    year: 2023,
    doi: "10.1109/ICOSNIKOM56551.2022.10034890",
    abstract:
      "Deteksi video deepfake penting dilakukan untuk membedakan antara video asli atau palsu yang menyebabkan disinformasi di era digital sehingga diperlukan tingkat akurasi yang tinggi. Namun, akurasi deteksi video deepfake terbatas oleh jumlah dan kualitas dataset, proses deteksi, dan inkonsisten performance evaluation yaitu model deteksi tidak dapat mengetahui video yang manipulasi dengan tools video editing. Penelitian ini memberikan solusi atas permasalahan ini menggunakan metode Spatiotemporal Convolutional Network dan analisis Photo-Response Non-Uniformity (PRNU). Dataset yang digunakan melalui tahapan pre-processing, ekstraksi video per-frame, deteksi bagian wajah, dan face cropping. Seluruh data dilatih dan dibuat model menggunakan ResNeXt50 dan LSTM. Penelitian ini menghasilkan 10 model yang dilatih menggunakan dataset FaceForensic++, CelebDF, DFDC dan campuran dari dataset tersebut yang kemudian dapat digunakan untuk menganalisis video deepfake. Hasil pengujian menunjukkan proses deteksi deepfake lebih cepat dan akurat dengan tingkat akurasi hingga 97,89%.",
    overview: [
      "Publikasi ini membahas bagaimana teknik machine learning modern dapat digunakan untuk mendeteksi pola anomali pada lalu lintas jaringan, sehingga potensi serangan dapat diidentifikasi lebih awal.",
      "Fokus utama penelitian adalah pada pemilihan fitur, pemilihan model, serta evaluasi performa model dalam skenario jaringan yang mendekati kondisi nyata."
    ],
    keyContributions: [
      "Mengintegrasikan Spatiotemporal Convolutional Network dengan analisis Photo-Response Non-Uniformity (PRNU) untuk deteksi video deepfake.",
      "Mengembangkan pipeline pemrosesan data yang mencakup pre-processing, ekstraksi frame, deteksi wajah, dan face cropping pada beberapa dataset deepfake populer.",
      "Membangun dan melatih 10 model berbasis ResNeXt50 dan LSTM menggunakan kombinasi dataset FaceForensic++, CelebDF, dan DFDC.",
      "Mencapai tingkat akurasi deteksi deepfake hingga 97,89%, yang menunjukkan efektivitas pendekatan yang diusulkan."
    ],
    citations: 24,
    category: "machine-learning",
    featured: true
  },
  {
    id: 2,
    slug: "pengembangan-framework-iot-untuk-smart-city-studi-kasus-kota-jakarta",
    title: "Pengembangan Framework IoT untuk Smart City: Studi Kasus Kota Jakarta",
    authors: ["SioWeb", "Budi Santoso", "Maria Garcia"],
    journal: "International Journal of Internet of Things",
    year: 2023,
    doi: "10.1000/example.2023.045",
    abstract: "Framework IoT yang dikembangkan untuk implementasi smart city di Jakarta...",
    overview: [
      "xArtikel ini memaparkan rancangan dan implementasi framework Internet of Things (IoT) untuk mendukung inisiatif smart city di Jakarta.",
      "Framework yang diusulkan berfokus pada skalabilitas, interoperabilitas perangkat, serta integrasi dengan infrastruktur kota yang sudah ada."
    ],
    keyContributions: [
      "Mengusulkan arsitektur referensi IoT untuk use case smart city.",
      "Menjelaskan penerapan nyata pada beberapa layanan kota cerdas.",
      "Menyajikan evaluasi performa dan tantangan implementasi di lapangan."
    ],
    citations: 28,
    category: "iot",
    featured: true
  },
  {
    id: 3,
    slug: "optimasi-algoritma-blockchain-untuk-transaksi-mikro-dalam-e-commerce",
    title: "Optimasi Algoritma Blockchain untuk Transaksi Mikro dalam E-Commerce",
    authors: ["SioWeb", "David Chen", "Lisa Wong"],
    journal: "Blockchain Technology and Applications",
    year: 2023,
    doi: "10.1000/example.2023.032",
    abstract: "Penelitian tentang optimasi algoritma blockchain untuk mendukung transaksi mikro...",
    overview: [
      "Publikasi ini mengeksplorasi bagaimana blockchain dapat dioptimasi untuk menangani transaksi mikro pada platform e-commerce.",
      "Penelitian menilai trade-off antara keamanan, kecepatan transaksi, dan biaya operasional."
    ],
    keyContributions: [
      "Mengusulkan skema optimasi transaksi mikro pada jaringan blockchain.",
      "Menyajikan analisis performa sebelum dan sesudah optimasi.",
      "Membahas implikasi desain bagi pelaku industri e-commerce."
    ],
    citations: 12,
    category: "blockchain",
    featured: false
  },
  {
    id: 4,
    slug: "analisis-performa-cloud-computing-untuk-aplikasi-pendidikan-online",
    title: "Analisis Performa Cloud Computing untuk Aplikasi Pendidikan Online",
    authors: ["SioWeb", "Rina Dewi", "John Smith"],
    journal: "Cloud Computing in Education",
    year: 2023,
    doi: "10.1000/example.2023.018",
    abstract: "Analisis mendalam tentang performa cloud computing dalam mendukung aplikasi pendidikan online...",
    overview: [
      "Artikel ini menganalisis performa berbagai konfigurasi cloud computing dalam konteks aplikasi pendidikan online.",
      "Studi dilakukan pada beberapa skenario penggunaan nyata, termasuk kelas sinkron dan asinkron."
    ],
    keyContributions: [
      "Memberikan metrik dan metodologi evaluasi performa cloud untuk e-learning.",
      "Membandingkan beberapa penyedia layanan cloud dan konfigurasi yang umum digunakan.",
      "Memberikan rekomendasi praktis untuk institusi pendidikan."
    ],
    citations: 22,
    category: "cloud-computing",
    featured: false
  },
  {
    id: 5,
    slug: "pengembangan-sistem-rekomendasi-berbasis-deep-learning-untuk-platform-e-learning",
    title: "Pengembangan Sistem Rekomendasi Berbasis Deep Learning untuk Platform E-Learning",
    authors: ["SioWeb", "Eko Prasetyo", "Anna Rodriguez"],
    journal: "Educational Technology Research",
    year: 2022,
    doi: "10.1000/example.2022.067",
    abstract: "Sistem rekomendasi yang menggunakan deep learning untuk personalisasi pembelajaran...",
    overview: [
      "Penelitian ini mempresentasikan sistem rekomendasi berbasis deep learning untuk mempersonalisasi pengalaman belajar pada platform e-learning.",
      "Model yang dikembangkan mempertimbangkan perilaku pengguna dan karakteristik materi pembelajaran."
    ],
    keyContributions: [
      "Merancang arsitektur model rekomendasi berbasis deep learning untuk e-learning.",
      "Mengevaluasi peningkatan engagement dan hasil belajar pengguna.",
      "Mendiskusikan tantangan implementasi pada skala besar."
    ],
    citations: 35,
    category: "deep-learning",
    featured: true
  },
  {
    id: 6,
    slug: "keamanan-data-dalam-era-big-data-pendekatan-kriptografi-modern",
    title: "Keamanan Data dalam Era Big Data: Pendekatan Kriptografi Modern",
    authors: ["SioWeb", "Hendra Wijaya", "Michael Brown"],
    journal: "Cybersecurity and Privacy",
    year: 2022,
    doi: "10.1000/example.2022.041",
    abstract: "Pendekatan kriptografi modern untuk mengamankan data dalam lingkungan big data...",
    overview: [
      "Publikasi ini membahas strategi dan pendekatan kriptografi modern untuk melindungi data dalam lingkungan big data.",
      "Fokus diberikan pada keseimbangan antara keamanan, performa, dan kemudahan integrasi dengan sistem yang sudah ada."
    ],
    keyContributions: [
      "Mengulas ancaman utama terhadap keamanan data di ekosistem big data.",
      "Mengusulkan kombinasi teknik kriptografi yang sesuai untuk berbagai skenario.",
      "Menyediakan panduan implementasi tingkat tinggi bagi praktisi."
    ],
    citations: 18,
    category: "cybersecurity",
    featured: false
  },
  {
    id: 7,
    slug: "implementasi-edge-computing-untuk-aplikasi-real-time-dalam-industri-4-0",
    title: "Implementasi Edge Computing untuk Aplikasi Real-Time dalam Industri 4.0",
    authors: ["SioWeb", "Dewi Sartika", "Robert Wilson"],
    journal: "Industrial Internet of Things",
    year: 2022,
    doi: "10.1000/example.2022.029",
    abstract: "Implementasi edge computing untuk mendukung aplikasi real-time dalam konteks Industry 4.0...",
    overview: [
      "Artikel ini mengeksplorasi peran edge computing dalam mendukung aplikasi real-time pada konteks Industri 4.0.",
      "Beberapa skenario industri diulas untuk menunjukkan manfaat pengolahan data di dekat sumbernya."
    ],
    keyContributions: [
      "Menyajikan arsitektur edge computing untuk beberapa use case industri.",
      "Menganalisis pengurangan latensi dan beban jaringan berkat edge computing.",
      "Mendiskusikan integrasi edge dengan infrastruktur cloud yang ada."
    ],
    citations: 31,
    category: "edge-computing",
    featured: false
  },
  {
    id: 8,
    slug: "pengembangan-framework-mobile-learning-untuk-pendidikan-jarak-jauh",
    title: "Pengembangan Framework Mobile Learning untuk Pendidikan Jarak Jauh",
    authors: ["SioWeb", "Siti Nurhaliza", "Jennifer Lee"],
    journal: "Mobile Learning and Education",
    year: 2021,
    doi: "10.1000/example.2021.078",
    abstract: "Framework mobile learning yang dikembangkan untuk mendukung pendidikan jarak jauh...",
    overview: [
      "Publikasi ini memperkenalkan framework mobile learning untuk mendukung pendidikan jarak jauh yang lebih inklusif.",
      "Penelitian menyoroti desain antarmuka, aksesibilitas, dan kinerja aplikasi pada berbagai perangkat."
    ],
    keyContributions: [
      "Mengusulkan framework mobile learning yang mudah diadopsi.",
      "Mengevaluasi pengalaman pengguna dan dampak terhadap hasil belajar.",
      "Memberikan rekomendasi desain untuk pengembang aplikasi pendidikan."
    ],
    citations: 42,
    category: "mobile-learning",
    featured: true
  },
  {
    id: 9,
    slug: "analisis-sentimen-berbasis-nlp-untuk-customer-service",
    title: "Analisis Sentimen Berbasis Natural Language Processing untuk Customer Service",
    authors: ["SioWeb", "Ahmad Fauzi", "Carlos Martinez"],
    journal: "Natural Language Processing Applications",
    year: 2021,
    doi: "10.1000/example.2021.055",
    abstract: "Implementasi analisis sentimen menggunakan NLP untuk meningkatkan customer service...",
    overview: [
      "Artikel ini mendeskripsikan sistem analisis sentimen berbasis Natural Language Processing untuk meningkatkan kualitas layanan pelanggan.",
      "Studi kasus dilakukan pada interaksi pelanggan di berbagai kanal, termasuk media sosial dan chat."
    ],
    keyContributions: [
      "Merancang pipeline NLP untuk analisis sentimen pada teks berbahasa Indonesia dan Inggris.",
      "Mengevaluasi akurasi model dan dampaknya terhadap pengambilan keputusan layanan.",
      "Menyediakan insight bagi organisasi yang ingin mengadopsi analisis sentimen."
    ],
    citations: 26,
    category: "nlp",
    featured: false
  },
  {
    id: 10,
    slug: "pengembangan-sistem-manajemen-pengetahuan-berbasis-semantic-web",
    title: "Pengembangan Sistem Manajemen Pengetahuan Berbasis Semantic Web",
    authors: ["SioWeb", "Nina Kartika", "Thomas Anderson"],
    journal: "Semantic Web and Knowledge Management",
    year: 2021,
    doi: "10.1000/example.2021.033",
    abstract: "Sistem manajemen pengetahuan yang memanfaatkan teknologi semantic web...",
    overview: [
      "Publikasi ini memaparkan pengembangan sistem manajemen pengetahuan yang memanfaatkan teknologi semantic web.",
      "Pendekatan ini bertujuan untuk meningkatkan kemampuan organisasi dalam menemukan, menghubungkan, dan menggunakan kembali pengetahuan."
    ],
    keyContributions: [
      "Mengusulkan model representasi pengetahuan berbasis semantic web.",
      "Menunjukkan bagaimana ontologi dapat meningkatkan pencarian dan integrasi informasi.",
      "Membahas hasil implementasi pada studi kasus organisasi nyata."
    ],
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
