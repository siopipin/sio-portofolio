#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function addArticle() {
  console.log('📝 Menambahkan Artikel Baru\n');

  const title = await question('Judul artikel: ');
  const excerpt = await question('Ringkasan artikel: ');
  const category = await question('Kategori (web-development/mobile-development/backend/iot/security/design): ');
  const tags = await question('Tags (pisahkan dengan koma): ');
  const readTime = await question('Waktu baca (5 min read): ') || '5 min read';
  const featured = await question('Featured? (y/n): ') === 'y';

  const slug = title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

  const today = new Date().toISOString().split('T')[0];

  const article = {
    id: Date.now(),
    title,
    excerpt,
    content: `# ${title}\n\nKonten artikel akan ditambahkan di sini...`,
    category,
    tags: tags.split(',').map(tag => tag.trim()),
    publishedAt: today,
    readTime,
    featured,
    slug
  };

  // Create markdown file
  const markdownContent = `---
title: "${title}"
excerpt: "${excerpt}"
category: "${category}"
tags: [${tags.split(',').map(tag => `"${tag.trim()}"`).join(', ')}]
publishedAt: "${today}"
readTime: "${readTime}"
featured: ${featured}
---

# ${title}

${excerpt}

## Pendahuluan

Tulis pendahuluan artikel Anda di sini...

## Konten Utama

Tulis konten utama artikel Anda di sini...

## Kesimpulan

Tulis kesimpulan artikel Anda di sini...

## Referensi

- [Referensi 1](https://example.com)
- [Referensi 2](https://example.com)
`;

  const articlesDir = path.join(__dirname, '../content/articles');
  if (!fs.existsSync(articlesDir)) {
    fs.mkdirSync(articlesDir, { recursive: true });
  }

  const filePath = path.join(articlesDir, `${slug}.md`);
  fs.writeFileSync(filePath, markdownContent);

  console.log('\n✅ Artikel berhasil ditambahkan!');
  console.log(`📁 File: ${filePath}`);
  console.log(`🔗 Slug: ${slug}`);
  console.log(`📅 Tanggal: ${today}`);
  
  rl.close();
}

addArticle().catch(console.error);
