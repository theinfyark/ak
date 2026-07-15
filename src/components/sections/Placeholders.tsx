import { placeholders } from '@/data/portfolio';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/primitives';

export function Placeholders() {
  const items = [placeholders.blog, placeholders.testimonials, placeholders.speaking];

  return (
    <section id="more" className="section-pad pt-0">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Coming soon"
            title="More on the roadmap"
            description="Clearly marked placeholders for content still being prepared."
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="rounded-3xl border border-dashed border-[var(--line)] p-6">
                <p className="text-xs font-semibold tracking-[0.18em] text-[var(--accent)] uppercase">
                  Placeholder
                </p>
                <h3 className="display mt-3 text-xl font-semibold text-[var(--fg-strong)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
