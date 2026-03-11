import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import PublicationCard from '@/components/ui/PublicationCard';

export default function FeaturedPublications({ publications }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4 md:mb-8">
        <h2 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white">
          Publikasi Terbaru
        </h2>
        <Link
          href="/publications"
          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
        >
          Lihat Semua
          <ExternalLink className="w-4 h-4 ml-1" />
        </Link>
      </div>

      <div className="space-y-3 md:space-y-6">
        {publications.map((publication) => (
          <PublicationCard key={publication.id} publication={publication} />
        ))}
      </div>
    </div>
  );
}
