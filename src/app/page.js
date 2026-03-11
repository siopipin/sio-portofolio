import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import BioSection from '@/components/home/BioSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import FeaturedArticles from '@/components/home/FeaturedArticles';
import FeaturedPublications from '@/components/home/FeaturedPublications';
import BooksCarousel from '@/components/home/BooksCarousel';
import { getProjectsForHome } from '@/data/projects';
import { getFeaturedArticles } from '@/data/articles';
import { getFeaturedPublications, getTotalCitations } from '@/data/publications';
import { skills } from '@/data/skills';

export default function Home() {
  const featuredProjects = getProjectsForHome();
  const featuredArticles = getFeaturedArticles();
  const featuredPublications = getFeaturedPublications();
  const totalCitations = getTotalCitations();

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BioSection skills={skills} totalCitations={totalCitations} />
      <FeaturedProjects projects={featuredProjects} />
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FeaturedArticles articles={featuredArticles} />
            <FeaturedPublications publications={featuredPublications} />
          </div>
        </div>
      </section>
      <BooksCarousel />
      <Footer />
    </div>
  );
}
