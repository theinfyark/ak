import { useMemo, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';
import { Reveal } from '@/components/ui/Reveal';
import { Badge, SectionHeading } from '@/components/ui/primitives';
import { cn } from '@/lib/utils';

const categories = ['All', 'AI', 'Cloud', 'Backend', 'DevOps', 'AR'] as const;

function ProjectVisual({ project }: { project: Project }) {
  const tones: Record<Project['category'], string> = {
    AI: 'from-teal-400/30 via-sky-400/10 to-transparent',
    Cloud: 'from-sky-400/30 via-cyan-300/10 to-transparent',
    Backend: 'from-emerald-400/30 via-teal-300/10 to-transparent',
    DevOps: 'from-amber-400/25 via-orange-300/10 to-transparent',
    AR: 'from-fuchsia-400/20 via-sky-300/10 to-transparent',
  };

  return (
    <div
      className={cn(
        'relative mb-5 aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-elevated)]',
        'bg-gradient-to-br',
        tones[project.category],
      )}
      aria-hidden
    >
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.15)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute inset-x-6 bottom-6 top-6 rounded-xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
        <p className="text-xs tracking-[0.2em] text-white/70 uppercase">{project.category}</p>
        <p className="mt-2 text-lg font-semibold text-white">{project.name}</p>
        <div className="mt-4 space-y-2">
          <div className="h-2 w-[80%] rounded bg-white/20" />
          <div className="h-2 w-[60%] rounded bg-white/15" />
          <div className="h-2 w-[66%] rounded bg-white/10" />
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All');
  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projects" className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Featured delivery"
            description="Cloud, AI, backend, and AR work highlighted from recent client programs. Live demo links marked when unavailable."
          />
        </Reveal>

        <Reveal>
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={cn(
                  'rounded-full border px-3 py-1.5 text-xs font-medium transition',
                  filter === c
                    ? 'border-[var(--accent)] bg-[color-mix(in_oklab,var(--accent)_18%,transparent)] text-[var(--fg-strong)]'
                    : 'border-[var(--line)] text-[var(--muted)] hover:text-[var(--fg)]',
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {visible.map((project, i) => (
            <Reveal key={project.id} delay={Math.min(i * 0.05, 0.2)}>
              <article className="glass group h-full rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--accent)_40%,var(--line))] sm:p-6">
                <ProjectVisual project={project} />
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>{project.category}</Badge>
                  <h3 className="display text-xl font-semibold text-[var(--fg-strong)]">
                    {project.name}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-[var(--accent)]">{project.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {project.description}
                </p>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="font-semibold text-[var(--fg-strong)]">Challenge</dt>
                    <dd className="text-[var(--muted)]">{project.challenge}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[var(--fg-strong)]">Solution</dt>
                    <dd className="text-[var(--muted)]">{project.solution}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[var(--fg-strong)]">Business impact</dt>
                    <dd className="text-[var(--muted)]">{project.impact}</dd>
                  </div>
                </dl>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3 text-sm">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[var(--fg-strong)] hover:text-[var(--accent)]"
                    >
                      <Github size={15} /> GitHub
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-[var(--muted)]">
                      <Github size={15} /> Proprietary client work
                    </span>
                  )}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[var(--fg-strong)] hover:text-[var(--accent)]"
                    >
                      <ExternalLink size={15} /> Live demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-[var(--muted)]">
                      <ExternalLink size={15} /> Demo — placeholder / NDA
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
