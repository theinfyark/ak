import { ExternalLink, GitBranch, Package, Star } from 'lucide-react';
import { githubProfile, openSourcePackages } from '@/data/portfolio';
import { Reveal } from '@/components/ui/Reveal';
import { Badge, Button, SectionHeading } from '@/components/ui/primitives';

export function OpenSource() {
  return (
    <section id="opensource" className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Open Source"
            title="InfyArk — AI, cloud & backend libraries"
            description={githubProfile.org.bio}
          />
        </Reveal>

        <Reveal>
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="glass rounded-2xl p-5">
              <p className="text-sm text-[var(--muted)]">Org repositories</p>
              <p className="display mt-2 text-3xl font-bold text-[var(--fg-strong)]">
                {githubProfile.org.publicRepos}
              </p>
            </div>
            <div className="glass rounded-2xl p-5">
              <p className="text-sm text-[var(--muted)]">Followers</p>
              <p className="display mt-2 text-3xl font-bold text-[var(--fg-strong)]">
                {githubProfile.org.followers}
              </p>
            </div>
            <div className="glass rounded-2xl p-5">
              <p className="text-sm text-[var(--muted)]">Personal repos</p>
              <p className="display mt-2 text-3xl font-bold text-[var(--fg-strong)]">
                {githubProfile.personal.publicRepos}
              </p>
            </div>
            <div className="glass rounded-2xl p-5">
              <p className="text-sm text-[var(--muted)]">Languages</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {githubProfile.languages.map((lang) => (
                  <Badge key={lang}>{lang}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-6 flex flex-wrap gap-3">
            <Button href={githubProfile.org.url} external variant="secondary">
              <GitBranch size={16} /> @{githubProfile.org.login}
            </Button>
            <Button href={githubProfile.personal.url} external variant="ghost">
              Personal · @{githubProfile.personal.login}
            </Button>
            <Button href="https://www.npmjs.com/org/theinfyark" external variant="ghost">
              <Package size={16} /> npm org
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {openSourcePackages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={Math.min(i * 0.04, 0.2)}>
              <article className="glass flex h-full flex-col rounded-3xl p-5 transition hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--accent)_40%,var(--line))]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="display text-lg font-semibold text-[var(--fg-strong)]">
                      {pkg.name}
                    </h3>
                    <p className="mt-1 text-xs text-[var(--muted)]">
                      {pkg.language} · v{pkg.version}
                    </p>
                  </div>
                  <Star size={16} className="text-[var(--accent)]" aria-hidden />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                  {pkg.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {pkg.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <p className="mt-4 text-xs text-[var(--muted)]">Downloads: {pkg.downloads}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <a
                    href={pkg.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-[var(--accent)]"
                  >
                    <ExternalLink size={14} /> Repository
                  </a>
                  {'npm' in pkg && pkg.npm ? (
                    <a
                      href={pkg.npm}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-[var(--accent)]"
                    >
                      <Package size={14} /> npm
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
