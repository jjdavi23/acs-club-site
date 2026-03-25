import { BookOpenText, Code2, ExternalLink, Users } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  language: string;
  repoUrl: string;
  readmeUrl: string;
  members: string[];
  highlights: string[];
}

export default function ProjectCard({
  title,
  description,
  tech,
  language,
  repoUrl,
  readmeUrl,
  members,
  highlights,
}: ProjectProps) {
  return (
    <div className="group p-8 rounded-2xl border border-border bg-surface/55 hover:border-accent/60 transition-all">
      <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-muted mb-6 leading-relaxed">{description}</p>
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex items-center gap-2 rounded-lg border border-accent/30 bg-accent-strong/20 px-3 py-2">
          <Code2 className="w-4 h-4 text-accent" />
          <p className="text-sm">
            <span className="text-muted">Primary Language:</span>{' '}
            <span className="font-semibold text-foreground">{language}</span>
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-accent/30 bg-accent-strong/20 px-3 py-2">
          <Users className="w-4 h-4 text-accent" />
          <p className="text-sm">
            <span className="text-muted">Built by:</span>{' '}
            <span className="font-semibold text-foreground">{members.join(', ')}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="px-3 py-1 text-xs font-semibold bg-accent-strong/25 text-foreground rounded-full border border-accent/40">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 rounded-lg border border-border/70 bg-background/30 p-4">
        <p className="text-xs uppercase tracking-wide text-muted mb-2">Project Highlights</p>
        <ul className="space-y-1.5 text-sm text-muted">
          {highlights.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-accent/50 bg-accent-strong/20 px-4 py-2 text-sm font-semibold text-foreground hover:bg-accent-strong/35 transition"
        >
          <ExternalLink className="w-4 h-4 text-accent" />

          Open Repository
        </a>
        <a
          href={readmeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-accent/50 bg-accent-strong/20 px-4 py-2 text-sm font-semibold text-foreground hover:bg-accent-strong/35 transition"
        >
          <BookOpenText className="w-4 h-4 text-accent" />
          Read Project Overview
        </a>
      </div>
    </div>
  );
}
