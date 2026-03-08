export default function SkillBar({ name, level, technologies }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-slate-700 dark:text-slate-300 font-medium">{name}</span>
        <span className="text-sm text-slate-500 dark:text-slate-400">{level}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
