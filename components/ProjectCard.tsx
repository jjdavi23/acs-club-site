interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
}

export default function ProjectCard({ title, description, tech }: ProjectProps) {
  return (
    <div className="group p-8 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-accent/50 transition-all">
      <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-slate-400 mb-6 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="px-3 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-full border border-accent/20">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}