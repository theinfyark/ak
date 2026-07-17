import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Package, Phone, Sparkles } from 'lucide-react';
import { floatingTech, siteConfig } from '@/data/portfolio';
import { useTypingText } from '@/hooks/useTypingText';
import { assetUrl, yearsOfExperienceLabel } from '@/lib/utils';
import { Button } from '@/components/ui/primitives';
import { ParticleField } from '@/components/effects/ParticleField';

export function Hero() {
  const typed = useTypingText(siteConfig.taglines);

  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden pt-20">
      <div className="absolute inset-0 mesh" aria-hidden />
      <div className="absolute inset-0 grid-fade opacity-40" aria-hidden />
      <ParticleField />

      <div className="container-shell relative z-10 flex min-h-[calc(100svh-5rem)] flex-col justify-center py-16">
        <motion.h1
          className="brand text-5xl text-[var(--fg-strong)] sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          {siteConfig.name}
        </motion.h1>

        <motion.div
          className="mt-3 flex flex-wrap items-center gap-2"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-[var(--fg)]">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            Hey there — I&apos;m
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] px-4 py-1.5 text-sm text-[var(--muted)]">
            <Sparkles size={13} className="text-[var(--accent-2)]" aria-hidden />
            {yearsOfExperienceLabel()} years experience
          </span>
        </motion.div>

        <motion.p
          className="mt-4 max-w-2xl text-lg text-[var(--muted)] sm:text-xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          {siteConfig.title}
        </motion.p>

        <motion.p
          className="mt-5 min-h-[1.75rem] text-base text-[var(--fg)] sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          aria-live="polite"
        >
          <span className="gradient-text font-medium">{typed}</span>
          <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 bg-[var(--accent)] animate-pulse-soft" />
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
        >
          <Button href={assetUrl(siteConfig.resumePath)} download external>
            Resume
          </Button>
          <Button href={siteConfig.social.github} variant="secondary" external>
            <Github size={16} /> GitHub
          </Button>
          <Button href={siteConfig.social.linkedin} variant="secondary" external>
            <Linkedin size={16} /> LinkedIn
          </Button>
          <Button href={siteConfig.social.npm} variant="secondary" external>
            <Package size={16} /> npm
          </Button>
          <Button href="#contact" variant="ghost">
            <Mail size={16} /> Contact
          </Button>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          aria-label="Technology stack"
        >
          {floatingTech.map((tech, i) => (
            <span
              key={tech}
              className="animate-float glass rounded-full px-3 py-1.5 text-xs text-[var(--muted)]"
              style={{ animationDelay: `${i * 0.18}s` }}
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <div className="mt-14 flex items-center gap-4 text-sm text-[var(--muted)]">
          <Phone size={14} aria-hidden />
          <a href={siteConfig.social.phone} className="hover:text-[var(--fg-strong)]">
            {siteConfig.phone}
          </a>
          <span aria-hidden>·</span>
          <span>{siteConfig.location}</span>
        </div>

        <a
          href="#about"
          className="mt-10 inline-flex w-fit items-center gap-2 text-sm text-[var(--muted)] transition hover:text-[var(--accent)]"
        >
          <ArrowDown size={16} className="animate-float" />
          Scroll
        </a>
      </div>
    </section>
  );
}
