import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Heart, Menu, Moon, Package, Sun, X } from 'lucide-react';
import { siteConfig } from '@/data/portfolio';
import { assetUrl, cn } from '@/lib/utils';
import type { Theme } from '@/hooks/useTheme';

const sectionLinks = [
  { hash: '#about', label: 'About' },
  { hash: '#experience', label: 'Experience' },
  { hash: '#skills', label: 'Skills' },
  { hash: '#projects', label: 'Projects' },
  { hash: '#opensource', label: 'Open Source' },
  { hash: '#certifications', label: 'Certs' },
  { hash: '#contact', label: 'Contact' },
] as const;

type NavbarProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const sectionHref = (hash: string) => (onHome ? hash : `${assetUrl('')}${hash}`);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open ? 'glass border-b border-[var(--line)]' : 'bg-transparent',
      )}
    >
      <div className="container-shell flex h-16 items-center justify-between gap-4">
        <Link to="/" className="brand text-xl tracking-wide text-[var(--fg-strong)]">
          {siteConfig.shortName}
          <span className="text-[var(--accent)]">.</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {sectionLinks.map((link) => (
            <a
              key={link.hash}
              href={sectionHref(link.hash)}
              className="rounded-lg px-3 py-2 text-sm text-[var(--muted)] transition hover:bg-[color-mix(in_oklab,var(--fg)_6%,transparent)] hover:text-[var(--fg-strong)]"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/resume"
            className={cn(
              'inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm transition',
              pathname === '/resume'
                ? 'bg-[color-mix(in_oklab,var(--accent)_16%,transparent)] text-[var(--accent)]'
                : 'text-[var(--muted)] hover:bg-[color-mix(in_oklab,var(--fg)_6%,transparent)] hover:text-[var(--fg-strong)]',
            )}
          >
            <FileText size={14} aria-hidden />
            Resume
          </Link>
          <Link
            to="/products"
            className={cn(
              'inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm transition',
              pathname === '/products'
                ? 'bg-[color-mix(in_oklab,var(--accent)_16%,transparent)] text-[var(--accent)]'
                : 'text-[var(--muted)] hover:bg-[color-mix(in_oklab,var(--fg)_6%,transparent)] hover:text-[var(--fg-strong)]',
            )}
          >
            <Package size={14} aria-hidden />
            Products
          </Link>
          <Link
            to="/sponsor"
            className={cn(
              'inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm transition',
              pathname === '/sponsor'
                ? 'bg-[color-mix(in_oklab,var(--accent)_16%,transparent)] text-[var(--accent)]'
                : 'text-[var(--muted)] hover:bg-[color-mix(in_oklab,var(--fg)_6%,transparent)] hover:text-[var(--fg-strong)]',
            )}
          >
            <Heart size={14} aria-hidden />
            Sponsor
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--line)] text-[var(--fg)] transition hover:border-[var(--accent)]"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--line)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="animate-fade-down border-t border-[var(--line)] px-4 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {sectionLinks.map((link) => (
              <li key={link.hash}>
                <a
                  href={sectionHref(link.hash)}
                  className="block rounded-lg px-3 py-3 text-[var(--fg-strong)] transition-colors duration-200 hover:bg-[color-mix(in_oklab,var(--fg)_6%,transparent)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/resume"
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-[var(--fg-strong)] transition-colors duration-200 hover:bg-[color-mix(in_oklab,var(--fg)_6%,transparent)]"
                onClick={() => setOpen(false)}
              >
                <FileText size={16} aria-hidden />
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-[var(--fg-strong)] transition-colors duration-200 hover:bg-[color-mix(in_oklab,var(--fg)_6%,transparent)]"
                onClick={() => setOpen(false)}
              >
                <Package size={16} aria-hidden />
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/sponsor"
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-[var(--fg-strong)] transition-colors duration-200 hover:bg-[color-mix(in_oklab,var(--fg)_6%,transparent)]"
                onClick={() => setOpen(false)}
              >
                <Heart size={16} aria-hidden />
                Sponsor
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
