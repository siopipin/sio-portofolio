import SkillBar from '@/components/ui/SkillBar';

export default function BioSection({ skills, totalCitations }) {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Tentang Saya
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              <p>
                Saya adalah seorang dosen di bidang Teknologi Informasi dengan pengalaman lebih dari 10 tahun dalam pengembangan aplikasi dan penelitian teknologi.
              </p>
              <p>
                Passion saya terletak pada pengembangan aplikasi web dan mobile yang inovatif, serta menulis artikel dan publikasi akademik yang berkontribusi pada kemajuan teknologi.
              </p>
              <p>
                Saat ini saya aktif mengajar mata kuliah pemrograman, database, dan pengembangan aplikasi, sambil terus mengembangkan proyek-proyek teknologi yang bermanfaat.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                <div className="text-slate-600 dark:text-slate-400">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{totalCitations}</div>
                <div className="text-slate-600 dark:text-slate-400">Total Citations</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Keahlian</h3>
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
