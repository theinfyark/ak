import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Package, Rocket, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  githubProfile,
  productMatchesTab,
  productStatusLabel,
  productTabs,
  productsCatalog,
  type Product,
  type ProductStatus,
  type ProductTab,
} from '@/data/portfolio';
import { assetUrl, cn } from '@/lib/utils';
import { Reveal } from '@/components/ui/Reveal';
import { Badge, Button, SectionHeading } from '@/components/ui/primitives';

const statusLabel = productStatusLabel;

const statusTone: Record<ProductStatus, string> = {
  live: 'border-[color-mix(in_oklab,var(--accent)_45%,var(--line))] text-[var(--accent)]',
  beta: 'border-[color-mix(in_oklab,var(--accent-2)_45%,var(--line))] text-[var(--accent-2)]',
  'in-progress':
    'border-[color-mix(in_oklab,var(--accent-3)_45%,var(--line))] text-[var(--accent-3)]',
  'coming-soon': 'border-[var(--line)] text-[var(--muted)]',
};

function matchesTab(product: Product, tab: ProductTab): boolean {
  return productMatchesTab(product, tab);
}

function ProductCard({ product }: { product: Product }) {
  const isVCards = product.group === 'v-cards';

  return (
    <article
      className={cn(
        'glass group flex h-full flex-col rounded-3xl p-5 transition duration-300 hover:-translate-y-1 sm:p-6',
        isVCards
          ? 'border-dashed hover:border-[color-mix(in_oklab,var(--accent-2)_45%,var(--line))]'
          : 'hover:border-[color-mix(in_oklab,var(--accent)_40%,var(--line))]',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          {isVCards ? (
            <Sparkles size={18} className="text-[var(--accent-2)]" aria-hidden />
          ) : (
            <Package size={18} className="text-[var(--accent)]" aria-hidden />
          )}
          <h3 className="display text-lg font-semibold text-[var(--fg-strong)]">{product.name}</h3>
        </div>
        <Badge className={statusTone[product.status]}>{statusLabel[product.status]}</Badge>
      </div>

      {isVCards ? (
        <div
          className="mt-4 flex aspect-[16/10] items-center justify-center rounded-2xl border border-dashed border-[var(--line)] bg-[color-mix(in_oklab,var(--bg)_40%,transparent)]"
          aria-hidden
        >
          <div className="text-center">
            <Rocket size={28} className="mx-auto text-[var(--accent-2)] opacity-80" />
            <p className="mt-2 text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
              {product.launchNote ?? 'Placeholder'}
            </p>
          </div>
        </div>
      ) : null}

      <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--muted)]">
        {product.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {product.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3 text-sm">
        {product.github ? (
          <a
            href={product.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition hover:text-[var(--accent)]"
          >
            <Github size={14} /> GitHub
          </a>
        ) : null}
        {product.npm ? (
          <a
            href={product.npm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition hover:text-[var(--accent)]"
          >
            <Package size={14} /> npm
          </a>
        ) : null}
        {product.demo ? (
          <a
            href={product.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition hover:text-[var(--accent)]"
          >
            <ExternalLink size={14} /> Demo
          </a>
        ) : null}
        {isVCards ? (
          <span className="inline-flex items-center gap-1.5 text-[var(--muted)]">
            <ExternalLink size={14} /> Launch page — soon
          </span>
        ) : null}
      </div>
    </article>
  );
}

export function ProductsPage() {
  const [tab, setTab] = useState<ProductTab>('all');

  const visible = useMemo(
    () => productsCatalog.filter((product) => matchesTab(product, tab)),
    [tab],
  );

  const counts = useMemo(
    () =>
      productTabs.reduce(
        (acc, t) => {
          acc[t.id] = productsCatalog.filter((p) => matchesTab(p, t.id)).length;
          return acc;
        },
        {} as Record<ProductTab, number>,
      ),
    [],
  );

  return (
    <main>
      <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-40">
        <div className="absolute inset-0 mesh opacity-80" aria-hidden />
        <div className="absolute inset-0 grid-fade opacity-30" aria-hidden />

        <div className="container-shell relative z-10">
          <motion.div
            className="mb-6 flex items-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <img
              src={assetUrl(githubProfile.org.logoPath)}
              alt="TheInfyArk logo"
              width={88}
              height={88}
              className="h-20 w-20 rounded-full border border-[var(--line)] shadow-lg sm:h-24 sm:w-24"
            />
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-[var(--accent)] uppercase">
                Products
              </p>
              <p className="mt-1 text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
                {githubProfile.org.tagline}
              </p>
            </div>
          </motion.div>

          <motion.h1
            className="brand max-w-3xl text-4xl text-[var(--fg-strong)] sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            All <span className="text-[var(--accent-2)]">TheInfy</span>Ark products
          </motion.h1>

          <motion.p
            className="mt-4 max-w-2xl text-lg text-[var(--muted)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            AI, cloud, and backend libraries for TypeScript and Node.js — including{' '}
            <span className="font-medium text-[var(--fg-strong)]">V Cards</span>.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
          >
            <Button href="#catalog">
              <Package size={16} /> Browse catalog
            </Button>
            <Button href={githubProfile.org.npm} external variant="secondary">
              <Package size={16} /> npm profile
            </Button>
            <Link
              to="/"
              className="btn-ripple inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-[var(--muted)] transition duration-300 hover:text-[var(--fg-strong)]"
            >
              ← Back to portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="catalog" className="section-pad !pt-10 sm:!pt-14">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Catalog"
              title="Browse by category"
              description="Filter npm libraries, V Cards placeholders, and upcoming releases."
            />
          </Reveal>

          <Reveal>
            <div
              className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none"
              role="tablist"
              aria-label="Product categories"
            >
              {productTabs.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={tab === t.id}
                  onClick={() => setTab(t.id)}
                  className={cn(
                    'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300',
                    tab === t.id
                      ? 'border-[var(--accent)] bg-[color-mix(in_oklab,var(--accent)_18%,transparent)] text-[var(--fg-strong)] shadow-[0_0_18px_-8px_var(--accent)]'
                      : 'border-[var(--line)] text-[var(--muted)] hover:border-[color-mix(in_oklab,var(--accent)_35%,var(--line))] hover:text-[var(--fg)]',
                  )}
                >
                  {t.label}
                  <span className="ml-1.5 text-xs opacity-70">({counts[t.id]})</span>
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((product, i) => (
              <Reveal key={product.id} delay={Math.min(i * 0.04, 0.2)}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>

          {visible.length === 0 ? (
            <p className="mt-8 text-center text-sm text-[var(--muted)]">
              No products in this category yet.
            </p>
          ) : null}

          {tab === 'v-cards' || tab === 'all' ? (
            <Reveal>
              <div className="glass mt-10 rounded-3xl p-6 sm:p-8">
                <h3 className="display text-xl font-semibold text-[var(--fg-strong)]">
                  V Cards — launching soon
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                  Smart digital business cards with shareable profiles, QR codes, custom themes, and
                  team dashboards. Placeholders above will become live product pages when V Cards
                  ships.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={githubProfile.org.url} external variant="secondary">
                    <Github size={16} /> Follow on GitHub
                  </Button>
                  <Link
                    to="/sponsor"
                    className="btn-ripple inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-[var(--muted)] transition duration-300 hover:text-[var(--fg-strong)]"
                  >
                    Support development →
                  </Link>
                </div>
              </div>
            </Reveal>
          ) : null}
        </div>
      </section>
    </main>
  );
}
