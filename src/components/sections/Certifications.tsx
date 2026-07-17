import { Award, GraduationCap, ShieldCheck } from 'lucide-react';
import { awards, certifications, education } from '@/data/portfolio';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/primitives';

export function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Achievements"
            title="Certifications & awards"
            description="Recognition from the resume — Azure Fundamentals plus Innovation and Performance awards."
          />
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.code} delay={i * 0.05}>
              <article className="glass group h-full rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--accent)_40%,var(--line))]">
                <ShieldCheck className="text-[var(--accent)] transition-transform duration-300 group-hover:scale-110" />
                <h3 className="display mt-4 text-xl font-semibold text-[var(--fg-strong)]">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--accent)]">
                  {cert.code} · {cert.issuer}
                </p>
                <p className="mt-3 text-sm text-[var(--muted)]">{cert.description}</p>
              </article>
            </Reveal>
          ))}

          {awards.map((award, i) => (
            <Reveal key={award.title} delay={(i + 1) * 0.05}>
              <article className="glass group h-full rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--accent)_40%,var(--line))]">
                <Award className="text-[var(--accent-2)] transition-transform duration-300 group-hover:scale-110" />
                <h3 className="display mt-4 text-xl font-semibold text-[var(--fg-strong)]">
                  {award.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--accent)]">
                  {award.period} · {award.type}
                </p>
                <p className="mt-3 text-sm text-[var(--muted)]">{award.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div id="education" className="glass mt-8 rounded-3xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <GraduationCap className="mt-1 text-[var(--accent)]" />
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-[var(--muted)] uppercase">
                  Education
                </p>
                <h3 className="display mt-2 text-2xl font-semibold text-[var(--fg-strong)]">
                  {education.degree}
                </h3>
                <p className="mt-2 text-[var(--muted)]">
                  {education.school} · {education.location}
                </p>
                <p className="mt-1 text-sm text-[var(--accent)]">Graduated {education.year}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
