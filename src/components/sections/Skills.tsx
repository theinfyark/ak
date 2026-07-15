import { useMemo, useState } from 'react';
import { skillCategories, type SkillLevel } from '@/data/portfolio';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/primitives';
import { cn } from '@/lib/utils';

const levelWidth: Record<SkillLevel, string> = {
  expert: 'w-[92%]',
  advanced: 'w-[78%]',
  proficient: 'w-[64%]',
};

const levelLabel: Record<SkillLevel, string> = {
  expert: 'Expert',
  advanced: 'Advanced',
  proficient: 'Proficient',
};

export function Skills() {
  const filters = useMemo(
    () => [
      { id: 'all', label: 'All' },
      ...skillCategories.map((c) => ({ id: c.id, label: c.label })),
    ],
    [],
  );
  const [active, setActive] = useState('all');

  const visible =
    active === 'all' ? skillCategories : skillCategories.filter((c) => c.id === active);

  return (
    <section id="skills" className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Systems fluency across cloud, backend, and AI"
            description="Proficiency from the resume — grouped for scanning by hiring managers and principal engineers."
          />
        </Reveal>

        <Reveal>
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(f.id)}
                className={cn(
                  'shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition',
                  active === f.id
                    ? 'border-[var(--accent)] bg-[color-mix(in_oklab,var(--accent)_18%,transparent)] text-[var(--fg-strong)]'
                    : 'border-[var(--line)] text-[var(--muted)] hover:text-[var(--fg)]',
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((category, idx) => (
            <Reveal key={category.id} delay={Math.min(idx * 0.04, 0.2)}>
              <article className="glass group h-full rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--accent)_40%,var(--line))]">
                <h3 className="display text-lg font-semibold text-[var(--fg-strong)]">
                  {category.label}
                </h3>
                <ul className="mt-4 space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="mb-1 flex items-center justify-between gap-3 text-sm">
                        <span>{skill.name}</span>
                        <span className="text-xs text-[var(--muted)]">
                          {levelLabel[skill.level]}
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-[color-mix(in_oklab,var(--fg)_8%,transparent)]">
                        <div
                          className={cn(
                            'h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] transition-all duration-700',
                            levelWidth[skill.level],
                          )}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
