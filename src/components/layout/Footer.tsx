import { Github, Heart, Linkedin, Mail, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '@/data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--line)] py-10">
      <div className="container-shell flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="display text-lg font-semibold text-[var(--fg-strong)]">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Backend · Cloud · DevOps · AI · Open Source
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--accent)] transition hover:underline"
            >
              <Package size={14} aria-hidden />
              All products
            </Link>
            <Link
              to="/sponsor"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--accent)] transition hover:underline"
            >
              <Heart size={14} aria-hidden />
              Sponsor TheInfyArk
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-lg border border-[var(--line)] p-2 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]"
          >
            <Github size={18} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg border border-[var(--line)] p-2 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={siteConfig.social.npm}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="npm"
            className="rounded-lg border border-[var(--line)] p-2 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]"
          >
            <Package size={18} />
          </a>
          <a
            href={siteConfig.social.email}
            aria-label="Email"
            className="rounded-lg border border-[var(--line)] p-2 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]"
          >
            <Mail size={18} />
          </a>
        </div>
        <p className="text-sm text-[var(--muted)]">
          © {year} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
