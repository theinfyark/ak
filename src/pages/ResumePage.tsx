import { useEffect, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Printer,
} from 'lucide-react';
import {
  awards,
  certifications,
  education,
  experience,
  resumeSkillGroups,
  resumeSummary,
  siteConfig,
} from '@/data/portfolio';
import { assetUrl, yearsOfExperienceLabel } from '@/lib/utils';

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="resume-section">
      <h2 className="resume-section__title">{title}</h2>
      {children}
    </section>
  );
}

export function ResumePage() {
  useEffect(() => {
    const previous = document.title;
    document.title = `${siteConfig.name} | Resume`;
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="resume-page">
      <div className="resume-toolbar no-print">
        <div className="resume-toolbar__inner">
          <Link to="/" className="resume-toolbar__back">
            <ArrowLeft size={16} aria-hidden />
            Portfolio
          </Link>
          <div className="resume-toolbar__actions">
            <button type="button" className="resume-toolbar__btn" onClick={() => window.print()}>
              <Printer size={16} aria-hidden />
              Print / Save PDF
            </button>
            <a
              className="resume-toolbar__btn resume-toolbar__btn--accent"
              href={assetUrl(siteConfig.resumePath)}
              download
            >
              <Download size={16} aria-hidden />
              Download PDF
            </a>
          </div>
        </div>
      </div>

      <main className="resume-stage">
        <article className="resume-sheet" id="resume-content" aria-label="One-page resume">
          <header className="resume-header">
            <div className="resume-header__brand">
              <p className="resume-header__eyebrow">{yearsOfExperienceLabel()} years · Bengaluru</p>
              <h1 className="resume-header__name">{siteConfig.name}</h1>
              <p className="resume-header__title">{siteConfig.title}</p>
            </div>
            <ul className="resume-header__meta">
              <li>
                <Phone size={13} aria-hidden />
                <a href={siteConfig.social.phone}>{siteConfig.phone}</a>
              </li>
              <li>
                <Mail size={13} aria-hidden />
                <a href={siteConfig.social.email}>{siteConfig.email}</a>
              </li>
              <li>
                <MapPin size={13} aria-hidden />
                <span>{siteConfig.location}</span>
              </li>
              <li>
                <Linkedin size={13} aria-hidden />
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/anilachary67
                </a>
              </li>
              <li>
                <Github size={13} aria-hidden />
                <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">
                  github.com/theinfyark
                </a>
              </li>
            </ul>
          </header>

          <ResumeSection title="Professional Summary">
            <p className="resume-summary">{resumeSummary}</p>
          </ResumeSection>

          <ResumeSection title="Core Skills">
            <dl className="resume-skills">
              {resumeSkillGroups.map((group) => (
                <div key={group.label} className="resume-skills__row">
                  <dt>{group.label}</dt>
                  <dd>{group.items}</dd>
                </div>
              ))}
            </dl>
          </ResumeSection>

          <ResumeSection title="Experience">
            <div className="resume-jobs">
              {experience.map((job) => (
                <article key={`${job.company}-${job.period}`} className="resume-job">
                  <div className="resume-job__head">
                    <div>
                      <h3 className="resume-job__role">{job.role}</h3>
                      <p className="resume-job__company">
                        {job.company}
                        <span className="resume-job__sep">·</span>
                        {job.location}
                      </p>
                    </div>
                    <p className="resume-job__period">{job.period}</p>
                  </div>
                  <ul className="resume-job__bullets">
                    {[...job.impact, ...job.responsibilities].slice(0, 3).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {(job.clients.length > 0 || job.projects.length > 0) && (
                    <p className="resume-job__meta">
                      {job.clients.length > 0 ? (
                        <>
                          <strong>Clients:</strong> {job.clients.join(', ')}
                          {job.projects.length > 0 ? <span className="resume-job__sep">·</span> : null}
                        </>
                      ) : null}
                      {job.projects.length > 0 ? (
                        <>
                          <strong>Projects:</strong> {job.projects.slice(0, 6).join(', ')}
                          {job.projects.length > 6 ? '…' : ''}
                        </>
                      ) : null}
                    </p>
                  )}
                  <p className="resume-job__tech">
                    <strong>Stack:</strong> {job.tech.slice(0, 12).join(' · ')}
                    {job.tech.length > 12 ? '…' : ''}
                  </p>
                </article>
              ))}
            </div>
          </ResumeSection>

          <div className="resume-bottom">
            <ResumeSection title="Education">
              <p className="resume-edu__degree">{education.degree}</p>
              <p className="resume-edu__school">
                {education.school}
                <span className="resume-job__sep">·</span>
                {education.location}
                <span className="resume-job__sep">·</span>
                {education.year}
              </p>
            </ResumeSection>

            <ResumeSection title="Certifications & Awards">
              <ul className="resume-awards">
                {certifications.map((cert) => (
                  <li key={cert.code}>
                    <strong>{cert.name}</strong>
                    <span className="resume-job__sep">·</span>
                    {cert.code} · {cert.issuer}
                  </li>
                ))}
                {awards.map((award) => (
                  <li key={award.title}>
                    <strong>{award.title}</strong>
                    <span className="resume-job__sep">·</span>
                    {award.period}
                  </li>
                ))}
              </ul>
            </ResumeSection>
          </div>
        </article>
      </main>
    </div>
  );
}
