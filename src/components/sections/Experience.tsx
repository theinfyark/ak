import { experience } from '@/data/portfolio';
import { Reveal } from '@/components/ui/Reveal';
import { Badge, SectionHeading } from '@/components/ui/primitives';

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Career timeline"
            description="From immersive product engineering to leading cloud, backend, and GenAI delivery."
          />
        </Reveal>

        <ol className="relative space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-px before:bg-[var(--line)] sm:before:left-[15px]">
          {experience.map((job, index) => (
            <Reveal key={job.company} delay={index * 0.05}>
              <li className="relative grid gap-4 pl-10 sm:pl-12 lg:grid-cols-[220px_1fr]">
                <div className="absolute top-1.5 left-0 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--bg)] sm:h-8 sm:w-8">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--accent)]">{job.period}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{job.location}</p>
                </div>
                <article className="glass rounded-3xl p-6">
                  <h3 className="display text-xl font-semibold text-[var(--fg-strong)]">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-[var(--muted)]">{job.company}</p>

                  <h4 className="mt-5 text-xs font-semibold tracking-[0.16em] text-[var(--muted)] uppercase">
                    Responsibilities
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm leading-relaxed text-[var(--fg)]">
                    {job.responsibilities.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="mt-5 text-xs font-semibold tracking-[0.16em] text-[var(--muted)] uppercase">
                    Impact
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm leading-relaxed text-[var(--fg)]">
                    {job.impact.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-2)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.clients.map((c) => (
                      <Badge key={c}>Client: {c}</Badge>
                    ))}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {job.projects.map((p) => (
                      <Badge key={p} className="text-[var(--fg)]">
                        {p}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </article>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
