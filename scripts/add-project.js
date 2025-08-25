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

async function addProject() {
  console.log('🎯 Menambahkan Proyek Baru\n');

  const title = await question('Judul proyek: ');
  const description = await question('Deskripsi singkat: ');
  const category = await question('Kategori (web/mobile/fullstack/ai/iot): ');
  const technologies = await question('Teknologi (pisahkan dengan koma): ');
  const demoUrl = await question('URL Demo: ');
  const githubUrl = await question('URL GitHub: ');
  const year = await question('Tahun (2024): ') || '2024';
  const featured = await question('Featured? (y/n): ') === 'y';

  const project = {
    id: Date.now(),
    title,
    description,
    category,
    technologies: technologies.split(',').map(tech => tech.trim()),
    image: `/projects/${title.toLowerCase().replace(/\s+/g, '-')}.jpg`,
    demoUrl,
    githubUrl,
    featured,
    year: parseInt(year)
  };

  // Read existing projects
  const projectsPath = path.join(__dirname, '../src/data/projects.js');
  let content = fs.readFileSync(projectsPath, 'utf8');
  
  // Find the projects array
  const projectsMatch = content.match(/export const projects = (\[[\s\S]*?\]);/);
  if (!projectsMatch) {
    console.error('❌ Tidak dapat menemukan array projects');
    return;
  }

  const projectsArray = projectsMatch[1];
  const projects = eval(projectsArray);
  
  // Add new project
  projects.push(project);
  
  // Update the file
  const newContent = content.replace(
    /export const projects = (\[[\s\S]*?\]);/,
    `export const projects = ${JSON.stringify(projects, null, 2)};`
  );
  
  fs.writeFileSync(projectsPath, newContent);
  
  console.log('\n✅ Proyek berhasil ditambahkan!');
  console.log(`📁 File: ${projectsPath}`);
  console.log(`🔗 Demo: ${demoUrl}`);
  console.log(`📚 GitHub: ${githubUrl}`);
  
  rl.close();
}

addProject().catch(console.error);
