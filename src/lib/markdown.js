import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export function getArticleBySlug(slug) {
  try {
    const fullPath = path.join(contentDirectory, 'articles', `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...data,
    };
  } catch (error) {
    return null;
  }
}

export function getAllArticles() {
  const articlesDirectory = path.join(contentDirectory, 'articles');
  
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  const articles = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        ...data,
      };
    })
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return articles;
}

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
