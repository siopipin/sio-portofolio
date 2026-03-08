import SkillBar from '@/components/ui/SkillBar';

export default function BioSection({ skills, totalCitations }) {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              About Me
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              <p>
                IT lecturer with 10+ years in app development and tech research. Focus on web & mobile apps, and academic writing.
              </p>
              <p>
                Currently teaching programming, databases, and software development while building side projects.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                <div className="text-slate-600 dark:text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{totalCitations}</div>
                <div className="text-slate-600 dark:text-slate-400">Total Citations</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  technologies={skill.technologies}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
