import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import ProjectCard from '@/components/ui/ProjectCard';

export default function FeaturedProjects({ projects }) {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 md:mb-4">
            Featured Projects
          </h2>
          <p className="text-sm md:text-lg text-slate-600 dark:text-slate-300">
            Selected works I&apos;ve built
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-6 md:mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-700 dark:bg-slate-600 text-white font-semibold rounded-lg hover:bg-slate-800 dark:hover:bg-slate-500 transition-colors"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
