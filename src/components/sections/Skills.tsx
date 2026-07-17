import { useMemo, useState } from 'react';
import { skillCategories, type SkillCategory, type SkillLevel } from '@/data/portfolio';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/primitives';
import { cn } from '@/lib/utils';

const levelWidth: Record<SkillLevel, string> = {
  expert: 'w-[92%]',
  advanced: 'w-[78%]',
  proficient: 'w-[64%]',
  intermediate: 'w-[60%]',
  working: 'w-[30%]',
};

const levelLabel: Record<SkillLevel, string> = {
  expert: 'Expert',
  advanced: 'Advanced',
  proficient: 'Proficient',
  intermediate: 'Intermediate',
  working: 'Working',
};

function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <article className="glass group h-full rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--accent)_40%,var(--line))]">
      <h3 className="display text-lg font-semibold text-[var(--fg-strong)]">{category.label}</h3>
      <ul className="mt-4 space-y-3">
        {category.skills.map((skill) => (
          <li key={skill.name}>
            <div className="mb-1 flex items-center justify-between gap-3 text-sm">
              <span>{skill.name}</span>
              <span className="text-xs text-[var(--muted)]">{levelLabel[skill.level]}</span>
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
  );
}

export function Skills() {
  const filters = useMemo(
    () => [
      { id: 'all', label: 'All' },
      { id: 'cloud-backend', label: 'Cloud & Backend' },
      ...skillCategories
        .filter((c) => c.id !== 'cloud' && c.id !== 'backend')
        .map((c) => ({ id: c.id, label: c.label })),
    ],
    [],
  );
  const [active, setActive] = useState('all');

  const cloud = skillCategories.find((c) => c.id === 'cloud');
  const backend = skillCategories.find((c) => c.id === 'backend');
  const others = skillCategories.filter((c) => c.id !== 'cloud' && c.id !== 'backend');

  const showCloudBackend = active === 'all' || active === 'cloud-backend';
  const visibleOthers =
    active === 'all'
      ? others
      : active === 'cloud-backend'
        ? []
        : others.filter((c) => c.id === active);

  return (
    <section id="skills" className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Cloud, backend, DevOps, and full-stack delivery"
            description="Hands-on stack across Azure, AWS, GCP, Kubernetes, Node.js, identity, frontend/web, and AI at a basics level."
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
                  'shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-300',
                  active === f.id
                    ? 'border-[var(--accent)] bg-[color-mix(in_oklab,var(--accent)_18%,transparent)] text-[var(--fg-strong)] shadow-[0_0_18px_-8px_var(--accent)]'
                    : 'border-[var(--line)] text-[var(--muted)] hover:border-[color-mix(in_oklab,var(--accent)_35%,var(--line))] hover:text-[var(--fg)]',
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {showCloudBackend && cloud && backend ? (
          <div className="mb-4 grid gap-4 md:grid-cols-2">
            <Reveal>
              <SkillCard category={cloud} />
            </Reveal>
            <Reveal delay={0.04}>
              <SkillCard category={backend} />
            </Reveal>
          </div>
        ) : null}

        {visibleOthers.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visibleOthers.map((category, idx) => (
              <Reveal key={category.id} delay={Math.min(idx * 0.04, 0.2)}>
                <SkillCard category={category} />
              </Reveal>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
