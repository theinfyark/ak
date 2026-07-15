import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-10 max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-[var(--accent)] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="display text-3xl font-semibold text-[var(--fg-strong)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">{description}</p>
      ) : null}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  external?: boolean;
  className?: string;
  download?: boolean | string;
};

export function Button({
  href,
  children,
  variant = 'primary',
  external,
  className,
  download,
}: ButtonProps) {
  const base =
    'btn-ripple inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition duration-300 focus-visible:outline-none';
  const styles = {
    primary:
      'bg-[var(--accent)] text-[#042f2e] shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_40%,transparent)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_var(--accent)]',
    secondary:
      'glass text-[var(--fg-strong)] hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--accent)_45%,var(--line))]',
    ghost: 'text-[var(--muted)] hover:text-[var(--fg-strong)]',
  } as const;

  return (
    <a
      href={href}
      className={cn(base, styles[variant], className)}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...(download ? { download: download === true ? undefined : download } : {})}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
      }}
    >
      {children}
    </a>
  );
}

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-[var(--line)] bg-[color-mix(in_oklab,var(--bg-panel-solid)_80%,transparent)] px-2 py-0.5 text-xs text-[var(--muted)]',
        className,
      )}
    >
      {children}
    </span>
  );
}
