# 🚀 Panduan Deployment ke Vercel

Panduan lengkap untuk mendeploy portfolio SioWeb ke Vercel.

## 📋 Prerequisites

1. **GitHub Account** - untuk menyimpan kode
2. **Vercel Account** - untuk hosting
3. **Domain (Opsional)** - untuk custom domain

## 🔧 Langkah-langkah Deployment

### 1. Push ke GitHub

```bash
# Inisialisasi git (jika belum)
git init

# Tambahkan semua file
git add .

# Commit perubahan
git commit -m "Initial commit: SioWeb Portfolio"

# Tambahkan remote repository
git remote add origin https://github.com/username/sioweb-portfolio.git

# Push ke GitHub
git push -u origin main
```

### 2. Deploy ke Vercel

#### Opsi A: Via Vercel Dashboard (Recommended)

1. Buka [vercel.com](https://vercel.com)
2. Login dengan GitHub account
3. Klik "New Project"
4. Import repository `sioweb-portfolio`
5. Vercel akan otomatis mendeteksi Next.js
6. Klik "Deploy"

#### Opsi B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel

# Untuk production
vercel --prod
```

### 3. Konfigurasi Environment Variables

Jika diperlukan, tambahkan environment variables di Vercel dashboard:

```bash
NEXT_PUBLIC_SITE_URL=https://sioweb.vercel.app
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### 4. Custom Domain (Opsional)

1. Di Vercel dashboard, pilih project
2. Klik "Settings" → "Domains"
3. Tambahkan domain Anda
4. Ikuti instruksi untuk konfigurasi DNS

## 🔄 Continuous Deployment

Setelah setup awal, setiap push ke branch `main` akan otomatis mendeploy:

```bash
# Update kode
git add .
git commit -m "Update portfolio"
git push origin main

# Vercel akan otomatis deploy
```

## 📊 Monitoring

### Vercel Analytics

1. Di Vercel dashboard, pilih project
2. Klik "Analytics"
3. Aktifkan Vercel Analytics

### Google Analytics

1. Buat Google Analytics account
2. Tambahkan tracking ID ke environment variables
3. Update `src/app/layout.js` dengan GA script

## 🚨 Troubleshooting

### Build Error

```bash
# Cek build lokal
npm run build

# Cek error di Vercel logs
# Dashboard → Project → Deployments → View Function Logs
```

### Performance Issues

1. Optimize images dengan Next.js Image component
2. Enable compression di Vercel
3. Use CDN untuk static assets

### SEO Issues

1. Cek meta tags di browser dev tools
2. Test dengan Google Search Console
3. Verify sitemap.xml

## 📈 Post-Deployment Checklist

- [ ] Website berjalan di production URL
- [ ] Semua halaman dapat diakses
- [ ] Images dan assets loading dengan benar
- [ ] Mobile responsive
- [ ] SEO meta tags working
- [ ] Google Analytics tracking
- [ ] Performance score > 90
- [ ] Security headers configured
- [ ] SSL certificate active
- [ ] Custom domain working (jika ada)

## 🔧 Maintenance

### Regular Updates

```bash
# Update dependencies
npm update

# Test locally
npm run dev

# Build test
npm run build

# Deploy
git add .
git commit -m "Update dependencies"
git push origin main
```

### Backup

- Repository di GitHub sebagai backup utama
- Vercel menyimpan deployment history
- Export data dari Vercel jika diperlukan

## 📞 Support

Jika mengalami masalah:

1. Cek [Vercel Documentation](https://vercel.com/docs)
2. Cek [Next.js Documentation](https://nextjs.org/docs)
3. Cek Vercel community forum
4. Contact Vercel support

---

**Happy Deploying! 🎉**
