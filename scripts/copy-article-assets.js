#!/usr/bin/env node

/**
 * Copy content/articles/assets ke public/articles/assets
 * Supaya gambar di MD bisa diakses via /articles/assets/*
 */

const fs = require('fs');
const path = require('path');

const sourceDir = path.join(process.cwd(), 'content', 'articles', 'assets');
const destDir = path.join(process.cwd(), 'public', 'articles', 'assets');

if (!fs.existsSync(sourceDir)) {
  console.log('ℹ️  content/articles/assets tidak ada, skip copy');
  process.exit(0);
}

fs.mkdirSync(destDir, { recursive: true });

const files = fs.readdirSync(sourceDir);
let copied = 0;

files.forEach((file) => {
  const srcPath = path.join(sourceDir, file);
  const destPath = path.join(destDir, file);
  if (fs.statSync(srcPath).isFile()) {
    fs.copyFileSync(srcPath, destPath);
    copied++;
  }
});

console.log(`✅ Copied ${copied} asset(s) ke public/articles/assets/`);
