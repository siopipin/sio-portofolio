export default function SkillBar({ name, level, technologies }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-slate-700 dark:text-slate-300 font-medium">{name}</span>
        <span className="text-sm tabular-nums text-slate-500 dark:text-slate-400">{level}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
        <div
          className="bg-slate-600 dark:bg-slate-400 h-2 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
      <div className="flex flex-wrap gap-1.5">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-600"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
