# SioWeb Portfolio

Portfolio personal website untuk SioWeb - Dosen IT, Programmer, dan Penulis yang dibuat dengan Next.js 14.

## 🚀 Fitur

- **Responsive Design**: Mobile-first dan desktop responsive
- **SEO Optimized**: Meta tags, Open Graph, dan structured data
- **Dark Mode**: Tema gelap dan terang
- **Fast Performance**: Optimized dengan Next.js 14
- **Search & Filter**: Pencarian dan filter untuk proyek, artikel, dan publikasi
- **Google Scholar Integration**: Link ke profil Google Scholar
- **Modern UI**: Desain modern dengan Tailwind CSS

## 📱 Halaman

### Landing Page (`/`)
- Hero section dengan bio singkat
- Keahlian dan skills
- Preview karya terbaru
- Preview artikel terbaru
- Preview publikasi terbaru

### Karya (`/projects`)
- Grid proyek dengan filter kategori
- Pencarian berdasarkan judul, deskripsi, dan teknologi
- Kategori: Web, Mobile, Full Stack, AI, IoT
- Link demo dan GitHub untuk setiap proyek

### Artikel (`/articles`)
- List artikel dengan filter kategori
- Pencarian berdasarkan judul, excerpt, dan tags
- Kategori: Web Development, Mobile Development, Backend, IoT, Security, Design
- Meta informasi: tanggal publikasi, waktu baca

### Publikasi (`/publications`)
- List publikasi akademik
- Pencarian berdasarkan judul, penulis, jurnal, dan abstract
- Link ke Google Scholar dan DOI
- Statistik citations

## 🛠️ Teknologi

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Content**: Static data (JSON)

## 📁 Struktur Proyek

```
src/
├── app/
│   ├── page.js              # Landing page
│   ├── projects/
│   │   └── page.js          # Halaman proyek
│   ├── articles/
│   │   └── page.js          # Halaman artikel
│   ├── publications/
│   │   └── page.js          # Halaman publikasi
│   ├── layout.js            # Root layout
│   └── globals.css          # Global styles
├── components/
│   ├── Header.js            # Navigation header
│   └── Footer.js            # Footer component
└── data/
    ├── projects.js          # Data proyek
    ├── articles.js          # Data artikel
    └── publications.js      # Data publikasi
```

## 🚀 Cara Menjalankan

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Production

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📝 Menambah Konten

### Menambah Proyek Baru

Edit file `src/data/projects.js`:

```javascript
{
  id: 9,
  title: "Nama Proyek",
  description: "Deskripsi proyek...",
  category: "web", // web, mobile, fullstack, ai, iot
  technologies: ["React", "Node.js"],
  image: "/projects/project-image.jpg",
  demoUrl: "https://demo-url.com",
  githubUrl: "https://github.com/username/project",
  featured: false,
  year: 2024
}
```

### Menambah Artikel Baru

Edit file `src/data/articles.js`:

```javascript
{
  id: 9,
  title: "Judul Artikel",
  excerpt: "Ringkasan artikel...",
  content: "Konten lengkap artikel...",
  category: "web-development",
  tags: ["React", "Next.js"],
  publishedAt: "2024-01-20",
  readTime: "5 min read",
  featured: false,
  slug: "judul-artikel"
}
```

### Menambah Publikasi Baru

Edit file `src/data/publications.js`:

```javascript
{
  id: 11,
  title: "Judul Publikasi",
  authors: ["SioWeb", "Co-author"],
  journal: "Journal Name",
  year: 2024,
  doi: "10.1000/example.2024.002",
  abstract: "Abstract publikasi...",
  citations: 5,
  category: "machine-learning",
  featured: false
}
```

## 🎨 Kustomisasi

### Mengubah Warna

Edit file `tailwind.config.js` untuk mengubah skema warna:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
      }
    }
  }
}
```

### Mengubah Meta Data

Edit file `src/app/layout.js` untuk mengubah SEO metadata:

```javascript
export const metadata = {
  title: "SioWeb - Portfolio Personal",
  description: "Portfolio personal SioWeb...",
  // ... other metadata
};
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push code ke GitHub
2. Connect repository ke Vercel
3. Deploy otomatis

### Manual Build

```bash
npm run build
npm start
```

## 📊 SEO Features

- Meta tags untuk setiap halaman
- Open Graph untuk social media
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt
- Canonical URLs

## 🔧 Performance

- Image optimization dengan Next.js
- Code splitting otomatis
- Static generation untuk halaman
- Lazy loading untuk komponen
- CSS purging dengan Tailwind

## 📱 Mobile Responsive

- Mobile-first design
- Touch-friendly navigation
- Responsive images
- Optimized typography
- Fast loading pada mobile

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 📞 Kontak

- Email: contact@sioweb.com
- GitHub: [@sioweb](https://github.com/sioweb)
- LinkedIn: [SioWeb](https://linkedin.com/in/sioweb)

---

Dibuat dengan ❤️ menggunakan Next.js dan Tailwind CSS
