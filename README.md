# Anil Kumar P — Portfolio

Premium developer portfolio for **Anil Kumar P**, Cloud & Backend Engineer specializing in Kubernetes, multi-cloud platforms, DevOps/DevSecOps, GenAI, and open source.

**Live site:** [https://theinfyark.github.io/ak/](https://theinfyark.github.io/ak/)

## Stack

- React 19 + TypeScript (strict)
- Vite (static build, `base: /ak/`)
- Tailwind CSS v4
- Framer Motion
- Lucide icons
- ESLint + Prettier

Optimized for **GitHub Pages** — no server, no SSR, no API routes.

## Sections

- Hero with typing tagline, floating stack, CTAs
- About, skills (filterable proficiency), experience timeline
- Featured projects (filterable), InfyArk open source
- Certifications, awards, education
- Contact (email, GitHub, LinkedIn, npm, WhatsApp, phone)
- Sponsor page (`/sponsor`) — UPI, roadmap, monthly goals
- Dark-first theme with light toggle, reduced-motion support

Content is sourced from `Anil_Kumar_P_Full_Stack_Cloud_9_Years.pdf` via `src/data/portfolio.ts`.

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (assets use `/ak/` base).

```bash
npm run lint
npm run typecheck
npm run build
npm run preview
```

## Project structure

```text
src/
  components/   layout, sections, effects, ui
  data/         resume-accurate portfolio content
  hooks/        theme, typing, counters, reduced motion
  lib/          helpers
public/         resume PDF, favicon, SEO assets
.github/workflows/static.yml   build + Pages deploy
```

## Deployment

Pushes to `main` run GitHub Actions:

1. `npm ci`
2. lint + typecheck
3. Vite production build
4. Deploy `dist/` to GitHub Pages

Manual run: Actions → **Deploy to GitHub Pages** → Run workflow.

## SEO & a11y

- Open Graph / Twitter cards, JSON-LD Person schema
- `robots.txt`, `sitemap.xml`, canonical URL
- Semantic landmarks, skip link, focus styles, `prefers-reduced-motion`

## Resume

Download path in production: `/ak/Anil_Kumar_P_Full_Stack_Cloud_9_Years.pdf`
