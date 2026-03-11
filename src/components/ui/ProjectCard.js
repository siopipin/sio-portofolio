import Link from 'next/link';
import Image from 'next/image';
import { Code, ExternalLink, Github } from 'lucide-react';

const categoryLabels = {
  fullstack: "Full Stack",
  mobile: "Mobile",
  web: "Web",
  ai: "AI",
  iot: "IoT",
};

export default function ProjectCard({ project }) {
  const imageSrc = project.image || null;
  const categoryLabel = categoryLabels[project.category] || project.category;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg md:rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative h-40 sm:h-36 md:h-40 lg:h-48 bg-slate-200 dark:bg-slate-700">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-300 dark:bg-slate-600">
              <Code className="w-10 h-10 md:w-16 md:h-16 text-slate-400 dark:text-slate-500" />
            </div>
          )}
          <div className="absolute top-1.5 right-1.5 md:top-3 md:right-3 flex gap-1">
            <span className="px-1.5 py-0.5 md:px-2 bg-white/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 text-[10px] md:text-xs rounded backdrop-blur-sm">
              {categoryLabel}
            </span>
            <span className="px-1.5 py-0.5 md:px-2 bg-white/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 text-[10px] md:text-xs rounded backdrop-blur-sm">
              {project.year}
            </span>
          </div>
        </div>
      </Link>
      <div className="p-3 md:p-5">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white mb-1 md:mb-2 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer line-clamp-2">
            {project.title}
          </h3>
        </Link>
        <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm mb-2 md:mb-4 line-clamp-2 md:line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 md:gap-1.5 mb-2 md:mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] md:text-xs rounded border border-slate-200 dark:border-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="hidden sm:flex gap-1.5 md:gap-2">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1 bg-slate-700 dark:bg-slate-600 text-white py-1.5 px-3 md:py-2 md:px-4 rounded-md md:rounded-lg hover:bg-slate-800 dark:hover:bg-slate-500 transition-colors text-xs md:text-sm font-medium"
          >
            <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5 flex-shrink-0" />
            Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 py-1.5 px-3 md:py-2 md:px-4 rounded-md md:rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-xs md:text-sm font-medium"
          >
            <Github className="w-3 h-3 md:w-3.5 md:h-3.5 flex-shrink-0" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
