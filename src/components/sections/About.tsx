import { about, siteConfig, stats } from '@/data/portfolio';
import { useInViewCounter } from '@/hooks/useInViewCounter';
import { Reveal } from '@/components/ui/Reveal';
import { Badge, SectionHeading } from '@/components/ui/primitives';

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: shown } = useInViewCounter(value);
  return (
    <div className="glass rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--accent)_40%,var(--line))]">
      <p className="display text-3xl font-bold text-[var(--fg-strong)]">
        <span ref={ref}>{shown}</span>
        {suffix}
      </p>
      <p className="mt-1 text-sm text-[var(--muted)]">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Engineering with clarity, scale, and care"
            description={siteConfig.summary}
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="glass rounded-3xl p-6 sm:p-8">
              <h3 className="display text-xl font-semibold text-[var(--fg-strong)]">
                Engineering philosophy
              </h3>
              <p className="mt-3 leading-relaxed text-[var(--muted)]">{about.philosophy}</p>

              <h3 className="display mt-8 text-xl font-semibold text-[var(--fg-strong)]">
                Professional journey
              </h3>
              <p className="mt-3 leading-relaxed text-[var(--muted)]">{about.journey}</p>

              <h3 className="display mt-8 text-xl font-semibold text-[var(--fg-strong)]">
                What I love building
              </h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {about.loveBuilding.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-[var(--line)] px-3 py-2 text-sm transition-colors duration-300 hover:border-[color-mix(in_oklab,var(--accent)_45%,var(--line))] hover:text-[var(--fg-strong)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.08}>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="glass rounded-3xl p-6">
                <h3 className="display text-lg font-semibold text-[var(--fg-strong)]">
                  Core strengths
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {about.strengths.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
                <h3 className="display mt-6 text-lg font-semibold text-[var(--fg-strong)]">
                  Industries
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {about.industries.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
                <h3 className="display mt-6 text-lg font-semibold text-[var(--fg-strong)]">
                  Focus technologies
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {about.technologies.map((s) => (
                    <Badge
                      key={s}
                      className="border-[color-mix(in_oklab,var(--accent)_35%,var(--line))] text-[var(--fg)]"
                    >
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
