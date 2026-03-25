interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
}

export default function ProjectCard({ title, description, tech }: ProjectProps) {
  return (
    <div className="group p-8 rounded-2xl border border-border bg-surface/55 hover:border-accent/60 transition-all">
      <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-muted mb-6 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="px-3 py-1 text-xs font-semibold bg-accent-strong/25 text-foreground rounded-full border border-accent/40">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
