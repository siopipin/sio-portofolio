import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

const contentDirectory = path.join(process.cwd(), 'content');
const articlesBaseUrl = '/articles/assets';

/**
 * Transform image paths in markdown/html dari assets/ ke /articles/assets/
 * Contoh: ![alt](assets/01nextjs.jpg) -> src="/articles/assets/01nextjs.jpg"
 */
function transformImagePaths(htmlContent) {
  return htmlContent
    .replace(/src="\.\/assets\//g, `src="${articlesBaseUrl}/`)
    .replace(/src="assets\//g, `src="${articlesBaseUrl}/`);
}

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
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName, index) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        id: index + 1,
        slug,
        content,
        ...data,
      };
    })
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return articles;
}

export async function markdownToHtml(markdown) {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight, { detect: true })
    .use(rehypeStringify)
    .process(markdown);
  const htmlContent = result.toString();
  return transformImagePaths(htmlContent);
}
