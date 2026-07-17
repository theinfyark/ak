import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Coffee, Copy, Github, Heart, Package, Sparkles, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig, sponsor, githubProfile } from '@/data/portfolio';
import { assetUrl } from '@/lib/utils';
import { Reveal } from '@/components/ui/Reveal';
import { Badge, Button, SectionHeading } from '@/components/ui/primitives';

export function SponsorPage() {
  const [copied, setCopied] = useState<'india' | 'international' | null>(null);

  const copyUpi = async (type: 'india' | 'international') => {
    try {
      await navigator.clipboard.writeText(sponsor.upi[type].id);
      setCopied(type);
      window.setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
    }
  };

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
              src={assetUrl(sponsor.logoPath)}
              alt="TheInfyArk logo"
              width={88}
              height={88}
              className="h-20 w-20 rounded-full border border-[var(--line)] shadow-lg sm:h-24 sm:w-24"
            />
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-[var(--accent)] uppercase">
                Sponsor
              </p>
              <p className="mt-1 text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
                {sponsor.tagline}
              </p>
            </div>
          </motion.div>

          <motion.h1
            className="display mt-3 max-w-3xl text-4xl font-bold text-[var(--fg-strong)] sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            The<span className="text-[var(--accent-2)]">Infy</span>Ark
          </motion.h1>

          <motion.p
            className="mt-4 max-w-2xl text-lg text-[var(--muted)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            {githubProfile.org.bio}
          </motion.p>

          <motion.p
            className="mt-3 text-sm text-[var(--fg)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Maintained by{' '}
            <span className="font-semibold text-[var(--fg-strong)]">{siteConfig.name}</span>
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
          >
            <Button href="#upi">
              <Heart size={16} /> Support via UPI
            </Button>
            <Button href="#roadmap" variant="secondary">
              <Package size={16} /> Roadmap
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

      <section className="section-pad !pt-20 sm:!pt-28 lg:!pt-32">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="❤️ Why support TheInfyArk"
              title="Your open-source mission"
              description={sponsor.mission}
            />
          </Reveal>

          <Reveal>
            <ul className="grid gap-3 sm:grid-cols-2">
              {sponsor.whySupport.map((item) => (
                <li
                  key={item}
                  className="glass flex items-start gap-3 rounded-2xl p-5 text-sm leading-relaxed text-[var(--muted)] transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--accent)_40%,var(--line))]"
                >
                  <Sparkles
                    size={18}
                    className="mt-0.5 shrink-0 text-[var(--accent)]"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="upi" className="section-pad !pt-0">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="UPI payments"
              title="UPI"
              description="Use the correct UPI ID for Indian or international payments."
            />
          </Reveal>

          <Reveal>
            <p className="mb-6 text-sm text-[var(--muted)]">
              Payment via UPI to{' '}
              <span className="font-semibold text-[var(--fg-strong)]">{sponsor.upi.name}</span>
            </p>

            <div className="grid gap-6 lg:grid-cols-2">
              {(['india', 'international'] as const).map((type) => {
                const option = sponsor.upi[type];
                return (
                  <article
                    key={type}
                    className="glass flex flex-col rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--accent)_40%,var(--line))] sm:p-8"
                  >
                    <p className="text-xs font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">
                      {option.label}
                    </p>

                    <div className="mx-auto mt-5 w-full max-w-[260px] overflow-hidden rounded-2xl border border-[var(--line)] shadow-sm">
                      <img
                        src={assetUrl(option.qrPath)}
                        alt={`${option.label} UPI QR code for ${sponsor.upi.name} — ${option.id}`}
                        width={260}
                        height={type === 'india' ? 310 : 260}
                        className="h-auto w-full"
                      />
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <code className="rounded-xl border border-[var(--line)] bg-[color-mix(in_oklab,var(--bg)_40%,transparent)] px-3 py-2 font-mono text-sm text-[var(--fg-strong)] sm:text-base">
                        {option.id}
                      </code>
                      <button
                        type="button"
                        onClick={() => copyUpi(type)}
                        className="inline-flex items-center gap-2 rounded-xl border border-[var(--line)] px-3 py-2 text-sm font-semibold transition duration-300 hover:border-[var(--accent)]"
                      >
                        {copied === type ? (
                          <Check size={16} className="text-[var(--accent)]" />
                        ) : (
                          <Copy size={16} />
                        )}
                        {copied === type ? 'Copied' : 'Copy'}
                      </button>
                    </div>

                    <div className="mt-5">
                      <Button href={option.payUri} external variant="secondary">
                        Open UPI app
                      </Button>
                    </div>
                  </article>
                );
              })}
            </div>

            <p className="mt-6 text-sm text-[var(--muted)]">
              Scan the QR for your region, or copy the matching UPI ID into GPay, PhonePe, Paytm,
              BHIM, or any app that supports international UPI transfers.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad !pt-0">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="More ways to help"
              title="Global sponsorship channels"
              description="GitHub Sponsors, Buy Me a Coffee, and Ko-fi will appear here as soon as they are available."
            />
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {sponsor.channels.map((channel, i) => (
              <Reveal key={channel.id} delay={Math.min(i * 0.05, 0.15)}>
                <article className="glass flex h-full flex-col rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--accent)_40%,var(--line))]">
                  <div className="flex items-center justify-between gap-3">
                    {channel.id === 'github-sponsors' ? (
                      <Github size={22} className="text-[var(--accent)]" aria-hidden />
                    ) : (
                      <Coffee size={22} className="text-[var(--accent)]" aria-hidden />
                    )}
                    <Badge>Coming soon</Badge>
                  </div>
                  <h3 className="display mt-4 text-lg font-semibold text-[var(--fg-strong)]">
                    {channel.label}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                    {channel.description}
                  </p>
                  {channel.href ? (
                    <Button href={channel.href} external className="mt-5" variant="secondary">
                      Open {channel.label}
                    </Button>
                  ) : (
                    <p className="mt-5 text-xs text-[var(--muted)]">
                      Link will be added when ready.
                    </p>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="section-pad !pt-0">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Roadmap"
              title="Upcoming npm packages"
              description="Sponsorship helps ship and maintain the next wave of TheInfyArk libraries."
            />
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {sponsor.roadmap.map((item, i) => (
              <Reveal key={item.name} delay={Math.min(i * 0.04, 0.2)}>
                <article className="glass rounded-3xl p-5 transition hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--accent)_40%,var(--line))]">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="display text-lg font-semibold text-[var(--fg-strong)]">
                      {item.name}
                    </h3>
                    <Badge>{item.status}</Badge>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.blurb}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad !pt-0">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Goals"
              title="Monthly sponsor goals"
              description="Transparent targets for infrastructure, maintenance, and shipping velocity."
            />
          </Reveal>

          <div className="grid gap-4 lg:grid-cols-3">
            {sponsor.monthlyGoals.map((goal, i) => (
              <Reveal key={goal.label} delay={Math.min(i * 0.05, 0.15)}>
                <article className="glass flex h-full flex-col rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--accent)_40%,var(--line))]">
                  <div className="flex items-center gap-2 text-[var(--accent)]">
                    <Target size={18} aria-hidden />
                    <span className="text-xs font-semibold tracking-[0.18em] uppercase">
                      {goal.label}
                    </span>
                  </div>
                  <p className="display mt-4 text-3xl font-bold text-[var(--fg-strong)]">
                    {goal.amount}
                    <span className="ml-1 text-base font-medium text-[var(--muted)]">/ month</span>
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                    {goal.detail}
                  </p>
                  <div className="mt-5">
                    <div className="mb-2 flex justify-between text-xs text-[var(--muted)]">
                      <span>Progress</span>
                      <span>{goal.progress}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[var(--line)]">
                      <div
                        className="h-full rounded-full bg-[var(--accent)]"
                        style={{ width: `${goal.progress}%` }}
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href="#upi">
                <Heart size={16} /> Sponsor with UPI
              </Button>
              <Link
                to="/"
                className="text-sm text-[var(--muted)] transition hover:text-[var(--accent)]"
              >
                Return to portfolio →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
