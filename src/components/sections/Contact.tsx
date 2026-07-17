import { Github, Linkedin, Mail, MessageCircle, Package, Phone } from 'lucide-react';
import { siteConfig } from '@/data/portfolio';
import { Reveal } from '@/components/ui/Reveal';
import { Button, SectionHeading } from '@/components/ui/primitives';

const channels = [
  {
    label: 'Email',
    href: siteConfig.social.email,
    icon: Mail,
    detail: siteConfig.email,
  },
  {
    label: 'GitHub',
    href: siteConfig.social.github,
    icon: Github,
    detail: '@theinfyark',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: siteConfig.social.linkedin,
    icon: Linkedin,
    detail: 'anilachary67',
    external: true,
  },
  {
    label: 'npm',
    href: siteConfig.social.npm,
    icon: Package,
    detail: '~anilachary',
    external: true,
  },
  {
    label: 'WhatsApp',
    href: siteConfig.social.whatsapp,
    icon: MessageCircle,
    detail: siteConfig.phone,
    external: true,
  },
  {
    label: 'Call',
    href: siteConfig.social.phone,
    icon: Phone,
    detail: siteConfig.phone,
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something resilient"
            description="Open to Lead/Staff backend, cloud, DevOps, and platform conversations."
          />
        </Reveal>

        <Reveal>
          <div className="glass rounded-3xl p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    {...('external' in channel && channel.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="group rounded-2xl border border-[var(--line)] bg-[color-mix(in_oklab,var(--bg)_35%,transparent)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_12px_30px_-18px_var(--accent)]"
                  >
                    <Icon
                      className="text-[var(--accent)] transition-transform duration-300 group-hover:scale-110"
                      size={22}
                    />
                    <p className="mt-4 font-semibold text-[var(--fg-strong)]">{channel.label}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">{channel.detail}</p>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`mailto:${siteConfig.email}`}>
                <Mail size={16} /> Email me
              </Button>
              <Button href={siteConfig.social.whatsapp} variant="secondary" external>
                <MessageCircle size={16} /> WhatsApp
              </Button>
              <Button href={siteConfig.social.phone} variant="ghost">
                <Phone size={16} /> Call
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
