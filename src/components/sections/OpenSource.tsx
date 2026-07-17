import { useMemo } from 'react';
import { Download, ExternalLink, GitBranch, Heart, Package, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  featuredLibraryProducts,
  githubProfile,
  libraryProducts,
  productStatusLabel,
  siteConfig,
} from '@/data/portfolio';
import { useNpmWeeklyDownloads } from '@/hooks/useNpmWeeklyDownloads';
import { formatDownloadCount, npmPackageName } from '@/lib/npmDownloads';
import { assetUrl } from '@/lib/utils';
import { Reveal } from '@/components/ui/Reveal';
import { Badge, Button, SectionHeading } from '@/components/ui/primitives';

export function OpenSource() {
  const featured = featuredLibraryProducts();
  const libraryCount = libraryProducts().length;

  const npmNames = useMemo(
    () =>
      libraryProducts()
        .map((product) => npmPackageName(product))
        .filter((name): name is string => Boolean(name)),
    [],
  );

  const { byPackage, status, total } = useNpmWeeklyDownloads(npmNames);

  return (
    <section id="opensource" className="section-pad">
      <div className="container-shell">
        <Reveal>
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center">
            <img
              src={assetUrl(githubProfile.org.logoPath)}
              alt="TheInfyArk logo"
              width={96}
              height={96}
              className="h-24 w-24 shrink-0 rounded-full border border-[var(--line)] shadow-lg"
            />
            <SectionHeading
              className="mb-0"
              eyebrow="Open Source · npm & GitHub"
              title={
                <>
                  The<span className="text-[var(--accent-2)]">Infy</span>Ark
                </>
              }
              description={githubProfile.org.bio}
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="glass rounded-2xl p-5">
              <p className="text-sm text-[var(--muted)]">npm libraries</p>
              <p className="display mt-2 text-3xl font-bold text-[var(--fg-strong)]">
                {libraryCount}
              </p>
            </div>
            <div className="glass rounded-2xl p-5">
              <p className="text-sm text-[var(--muted)]">Weekly downloads</p>
              <p className="display mt-2 text-3xl font-bold text-[var(--fg-strong)]">
                {status === 'ready' ? formatDownloadCount(total) : status === 'loading' ? '…' : '—'}
              </p>
              <p className="mt-1 text-xs text-[var(--muted)]">npm last 7 days</p>
            </div>
            <div className="glass rounded-2xl p-5">
              <p className="text-sm text-[var(--muted)]">Org repositories</p>
              <p className="display mt-2 text-3xl font-bold text-[var(--fg-strong)]">
                {githubProfile.org.publicRepos}
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
            <Button href={siteConfig.social.npm} external variant="ghost">
              <Package size={16} /> npm profile
            </Button>
            <Link
              to="/products"
              className="btn-ripple inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-[var(--muted)] transition duration-300 hover:text-[var(--fg-strong)]"
            >
              <Package size={16} /> All products
            </Link>
            <Link
              to="/sponsor"
              className="btn-ripple inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-[var(--muted)] transition duration-300 hover:text-[var(--fg-strong)]"
            >
              <Heart size={16} /> Sponsor
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((pkg, i) => {
            const name = npmPackageName(pkg);
            const weekly = name ? byPackage[name] : undefined;
            return (
              <Reveal key={pkg.id} delay={Math.min(i * 0.04, 0.2)}>
                <article className="glass flex h-full flex-col rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--accent)_40%,var(--line))]">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="display text-lg font-semibold text-[var(--fg-strong)]">
                        {pkg.name}
                      </h3>
                      <p className="mt-1 text-xs text-[var(--muted)]">
                        {pkg.language ?? 'TypeScript'} ·{' '}
                        {pkg.npmVersion ? `v${pkg.npmVersion}` : productStatusLabel[pkg.status]}
                        {typeof weekly === 'number' ? (
                          <>
                            {' '}
                            ·{' '}
                            <span className="inline-flex items-center gap-1 text-[var(--accent)]">
                              <Download size={12} aria-hidden />
                              {formatDownloadCount(weekly)}/wk
                            </span>
                          </>
                        ) : null}
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
                  <div className="mt-4 flex flex-wrap gap-3 text-sm">
                    {pkg.github ? (
                      <a
                        href={pkg.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 hover:text-[var(--accent)]"
                      >
                        <ExternalLink size={14} /> Repository
                      </a>
                    ) : null}
                    {pkg.npm ? (
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
