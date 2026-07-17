import { yearsOfExperience } from '@/lib/utils';

const yearsXp = yearsOfExperience();

export const siteConfig = {
  name: 'Anil Kumar Patnala',
  shortName: 'AK',
  title: 'Lead Software Engineer | Cloud & Full-Stack Developer',
  taglines: [
    'Cloud-native backends that scale',
    'Kubernetes · K3s · hybrid cloud',
    'Secure auth · resilient APIs',
    'Solution architecture & leadership',
  ],
  summary: `Cloud and Backend Lead Engineer with ${yearsXp}+ years designing and delivering scalable cloud-native and hybrid solutions on AWS, Azure, and GCP. Experienced with on-premises VMs and Kubernetes (K3s) for sensitive and regulated workloads. Strong in microservices, Node.js, PostgreSQL, and secure auth (OKTA, Auth0, Keycloak with RBAC). Hands-on with Docker, Kubernetes/K3s, CI/CD (Jenkins, Argo CD, Azure DevOps), and IaC (Terraform). Frontend experience with AngularJS and React, plus AR/VR/MR web technologies, with a focus on high availability, solution architecture, and technical leadership.`,
  location: 'Bengaluru, India',
  email: 'anilachary.p@gmail.com',
  phone: '+91 9885155454',
  phoneRaw: '919885155454',
  resumePath: 'Anil_Kumar_Patnala_Lead_Software_Cloud_Engineer_9Y_Resume_1.pdf',
  siteUrl: 'https://theinfyark.github.io/ak/',
  social: {
    github: 'https://github.com/theinfyark',
    githubPersonal: 'https://github.com/anilachary67p',
    linkedin: 'https://www.linkedin.com/in/anilachary67',
    npm: 'https://www.npmjs.com/~anilachary',
    email: 'mailto:anilachary.p@gmail.com',
    whatsapp: 'https://wa.me/919885155454',
    phone: 'tel:+919885155454',
  },
} as const;

export const sponsor = {
  brand: 'TheInfyArk',
  tagline: 'BUILD · ROBUST · DEPLOY · SCALE',
  logoPath: 'theinfyark-logo.png',
  mission:
    'TheInfyArk builds small, production-ready TypeScript and JavaScript packages — streaming LLM SDKs, RAG helpers, Express starters, Azure utilities, and DevOps CLIs — so teams ship reliable systems faster without reinventing the basics.',
  whySupport: [
    'Keep npm packages maintained, typed, tested, and documented',
    'Fund CI, releases, and security updates across the org',
    'Accelerate the roadmap of AI, cloud, and backend tooling',
    'Support an independent Indian open-source maintainer',
  ],
  upi: {
    name: 'Anil Kumar Patnala',
    india: {
      label: 'India',
      id: 'anilachary67-4@okaxis',
      qrPath: 'upi-qr-india.png',
      payUri: 'upi://pay?pa=anilachary67-4@okaxis&pn=Anil%20Kumar%20Patnala&cu=INR',
    },
    international: {
      label: 'International',
      id: 'anilachary67-3@okicici',
      qrPath: 'upi-qr-international.png',
      payUri: 'upi://pay?pa=anilachary67-3@okicici&pn=Anil%20Kumar%20Patnala&cu=INR',
    },
  },
  channels: [
    {
      id: 'github-sponsors',
      label: 'GitHub Sponsors',
      description: 'Recurring support on GitHub when the Sponsors profile is live.',
      href: undefined,
      status: 'coming-soon' as const,
    },
    {
      id: 'buymeacoffee',
      label: 'Buy Me a Coffee',
      description: 'One-time tips for coffee-fueled release nights.',
      href: undefined,
      status: 'coming-soon' as const,
    },
    {
      id: 'kofi',
      label: 'Ko-fi',
      description: 'Support the org with a tip or membership.',
      href: undefined,
      status: 'coming-soon' as const,
    },
  ],
  roadmap: [
    {
      name: 'V Cards',
      status: 'Coming soon',
      blurb: 'Smart digital business cards with QR, links, and shareable profiles.',
    },
    {
      name: 'node-gen',
      status: 'In progress',
      blurb: 'Interactive CLI to scaffold production-ready Node.js backends.',
    },
    {
      name: 'env-ok',
      status: 'Publishing next',
      blurb: 'Tiny TypeScript environment validator for Node.js.',
    },
    {
      name: 'docker-health-check',
      status: 'Publishing next',
      blurb: 'Docker/K8s-ready health checks for databases, Redis, and probes.',
    },
  ],
  monthlyGoals: [
    {
      amount: '₹5,000',
      label: 'Infrastructure',
      detail: 'Cover npm org costs, CI minutes, and domain/docs hosting.',
      progress: 0,
    },
    {
      amount: '₹15,000',
      label: 'Maintenance',
      detail: 'Dedicated hours each month for bugs, types, and docs across packages.',
      progress: 0,
    },
    {
      amount: '₹40,000',
      label: 'Ship velocity',
      detail: 'Fund focused sprints to publish the next wave of InfyArk libraries.',
      progress: 0,
    },
  ],
} as const;

export const stats = [
  { label: 'Years Experience', value: yearsXp, suffix: '+' },
  { label: 'Dev Effort Reduced', value: 80, suffix: '%' },
  { label: 'Perf Optimized', value: 68, suffix: '%' },
  { label: 'Deploy Code Cut', value: 50, suffix: '%' },
] as const;

export const about = {
  philosophy:
    'Ship reliable systems first — clear contracts, observable services, and security baked into the delivery pipeline, not bolted on later.',
  journey:
    'From AR/PWA product work on AWS, through enterprise microservices and identity on GCP, to leading cloud and AI delivery as Team Lead on hybrid Kubernetes and Azure.',
  loveBuilding: [
    'High-availability microservice backends',
    'Cloud-native platforms on Kubernetes / K3s',
    'Secure identity (OKTA, Auth0, Keycloak, Entra ID)',
    'CI/CD and IaC that shorten release cycles',
    'Open-source SDKs for AI, cloud & Node',
  ],
  strengths: [
    'Solution architecture & technical leadership',
    'Cloud & Kubernetes delivery',
    'DevOps / DevSecOps',
    'Mentorship across backend, cloud & frontend',
  ],
  industries: ['Insurance', 'Manufacturing', 'Enterprise ERP', 'AR / Immersive web'],
  technologies: ['Node.js', 'Kubernetes', 'Azure', 'AWS', 'GCP', 'PostgreSQL', 'Terraform'],
  languages: ['English', 'Telugu', 'Hindi', 'Kannada'],
} as const;

export type SkillLevel = 'expert' | 'advanced' | 'proficient' | 'intermediate' | 'working';

export type SkillCategory = {
  id: string;
  label: string;
  skills: { name: string; level: SkillLevel }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'cloud',
    label: 'Cloud',
    skills: [
      { name: 'Azure', level: 'expert' },
      { name: 'AWS', level: 'advanced' },
      { name: 'GCP', level: 'advanced' },
      { name: 'Azure DevOps', level: 'advanced' },
      { name: 'Terraform', level: 'working' },
      { name: 'Docker', level: 'expert' },
      { name: 'Kubernetes', level: 'expert' },
      { name: 'Helm', level: 'advanced' },
      { name: 'K3s', level: 'advanced' },
      { name: 'Nginx', level: 'advanced' },
      { name: 'Istio', level: 'proficient' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js', level: 'expert' },
      { name: 'Express.js', level: 'expert' },
      { name: 'Fastify', level: 'advanced' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'JavaScript', level: 'expert' },
      { name: 'Redis', level: 'advanced' },
      { name: 'MS Graph API', level: 'advanced' },
      { name: 'REST APIs', level: 'expert' },
      { name: 'GraphQL', level: 'proficient' },
      { name: 'PostgreSQL', level: 'expert' },
      { name: 'MongoDB', level: 'advanced' },
      { name: 'Prisma', level: 'advanced' },
      { name: 'Flyway', level: 'advanced' },
      { name: 'BullMQ', level: 'advanced' },
      { name: 'HAPI FHIR', level: 'proficient' },
      { name: 'ODK (Data Collection)', level: 'proficient' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps / DevSecOps & CI/CD',
    skills: [
      { name: 'Jenkins', level: 'advanced' },
      { name: 'Concourse', level: 'proficient' },
      { name: 'Azure Pipelines', level: 'advanced' },
      { name: 'SonarQube', level: 'advanced' },
      { name: 'Snyk', level: 'advanced' },
      { name: 'Wiz', level: 'proficient' },
      { name: 'Trivy', level: 'advanced' },
      { name: 'Argo CD', level: 'proficient' },
      { name: 'Veracode', level: 'proficient' },
      { name: 'Burp Suite', level: 'proficient' },
      { name: 'HCL AppScan', level: 'proficient' },
      { name: 'Kiali', level: 'proficient' },
      { name: 'Prometheus', level: 'advanced' },
      { name: 'Grafana', level: 'advanced' },
      { name: 'OpenTelemetry', level: 'proficient' },
    ],
  },
  {
    id: 'identity',
    label: 'Identity & Security',
    skills: [
      { name: 'Azure Entra ID', level: 'expert' },
      { name: 'Auth0', level: 'expert' },
      { name: 'OKTA', level: 'expert' },
      { name: 'Keycloak', level: 'advanced' },
      { name: 'JWT', level: 'expert' },
      { name: 'OAuth 2.0', level: 'expert' },
      { name: 'SSO', level: 'expert' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend / Web',
    skills: [
      { name: 'AR / VR / MR', level: 'proficient' },
      { name: 'ArCore', level: 'proficient' },
      { name: 'React.js', level: 'working' },
      { name: 'Three.js', level: 'proficient' },
      { name: '8th Wall', level: 'proficient' },
      { name: 'A-Frame', level: 'proficient' },
      { name: 'JSArToolKit', level: 'proficient' },
      { name: 'Next.js', level: 'working' },
      { name: 'AngularJS', level: 'advanced' },
      { name: 'WebXR', level: 'proficient' },
      { name: 'MUI', level: 'proficient' },
      { name: 'Tailwind', level: 'proficient' },
      { name: 'TanStack', level: 'proficient' },
      { name: 'Material React Table', level: 'proficient' },
      { name: 'Table Virtualization', level: 'proficient' },
      { name: 'Babylon.js', level: 'proficient' },
    ],
  },
  {
    id: 'ai',
    label: 'AI / GenAI (Basics Level)',
    skills: [
      { name: 'OpenAI', level: 'intermediate' },
      { name: 'Azure AI Foundry', level: 'working' },
      { name: 'OCR', level: 'intermediate' },
      { name: 'AI Search', level: 'working' },
      { name: 'LLMs', level: 'working' },
      { name: 'RAG', level: 'working' },
    ],
  },
];

export type Experience = {
  company: string;
  location: string;
  role: string;
  period: string;
  responsibilities: string[];
  impact: string[];
  clients: string[];
  projects: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    company: 'SLK Software (Part Of Altimetrik)',
    location: 'Bengaluru, India',
    role: 'Team Lead',
    period: '06/2025 – Present',
    responsibilities: [
      'Lead end-to-end solution design, estimation, and delivery; mentor engineers across backend.',
      'Optimize deployment pipelines and platform performance; reduced deployment time by ~20 minutes by optimizing Docker container images.',
      'Cut deployment-related code by approximately 50% using shared libraries and reusable modules for CI/CD and release workflows.',
      'Set up CI/CD and Infrastructure as Code for secure cloud deployments (Azure DevOps Pipelines, self-hosted agents, Azure Blob Storage for artifacts).',
      'Built an evaluation pipeline to automate data ingestion and reduce manual work by ~30%.',
      'Hardened Azure networking and security with private endpoints, DNS zones, and firewalls; set up monitoring, logging, and debugging with Azure Functions and related Azure services.',
    ],
    impact: [
      'Reduced deployment time by ~20 minutes via Docker image optimization.',
      'Cut deployment-related code by ~50% with shared CI/CD libraries.',
      'Automated data ingestion, reducing manual work by ~30%.',
    ],
    clients: ['Emerson NAM', 'Ball Corp'],
    projects: ['AskBall', 'Quote AI NAM'],
    tech: [
      'Node.js',
      'Azure',
      'Docker',
      'Azure DevOps',
      'Terraform',
      'Azure Functions',
      'Private Endpoints',
      'DNS Zones',
      'CI/CD',
      'GenAI',
    ],
  },
  {
    company: 'SLK Software / Digital (Part Of Amin Holdings)',
    location: 'Bengaluru, India',
    role: 'Software Developer Lead',
    period: '04/2024 – 05/2025',
    responsibilities: [
      'Lead and mentor engineers across backend, cloud, and frontend; set technical direction and reduce delivery risk via code reviews.',
      'Own end-to-end delivery across full SDLC — scope, estimation, architecture, build, test & deploy.',
      'Improved scalability and reliability through architecture refinements and database migrations, cutting latency by ~20%.',
      'Built production platforms with Node.js, PostgreSQL, Docker, Kubernetes, GCP, and Azure.',
      'Integrated secure authentication with Auth0 and OKTA in Agile delivery.',
    ],
    impact: [
      'Architecture and database migration work cut latency by ~20%.',
      'Delivered multi-client platforms spanning GenAI, ERP, and insurance workflows.',
    ],
    clients: ['Emerson MEA', 'Berry Global', 'Maldivian Mermaid'],
    projects: [
      'Dextr',
      'Quote AI MEA',
      'Insure AI',
      'FRP',
      'MM-ERP',
      'TAT',
      'Mithril',
      'POCs & demos',
    ],
    tech: [
      'Node.js',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
      'GCP',
      'Azure',
      'Auth0',
      'OKTA',
      'Microservices',
      'GenAI',
    ],
  },
  {
    company: 'V-Labs Pvt Ltd (Part Of SLK Software)',
    location: 'Bengaluru, India',
    role: 'Senior Developer',
    period: '07/2021 – 04/2024',
    responsibilities: [
      'Delivered backend and cloud platforms for mission-critical systems with stronger reliability and scalability.',
      'Built Node.js/Express microservices and REST APIs with PostgreSQL for AI-driven data processing.',
      'Created reusable components that cut development effort by ~80% and improved critical module performance by ~68%.',
      'Integrated secure authentication with OKTA (SSO), Auth0, Azure AD, and JWT.',
      'Architected scalable GCP infrastructure (GKE, Pub/Sub) and end-to-end CI/CD with Concourse, Docker, and Kubernetes.',
      'Enforced quality and security gates with Veracode, SonarQube, and Stackdriver.',
    ],
    impact: [
      'Reusable components cut development effort by ~80%.',
      'Critical module performance improved by ~68%.',
    ],
    clients: ['CNA', 'Finolex'],
    projects: ['New Business Submission (NBSI)', 'Endorsement (EMS)', 'POCs & demos'],
    tech: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
      'GCP',
      'GKE',
      'Pub/Sub',
      'OKTA',
      'Auth0',
      'JWT',
      'Concourse',
      'Veracode',
      'SonarQube',
      'Stackdriver',
    ],
  },
  {
    company: 'Immersion Software Labs Pvt Ltd',
    location: 'Bengaluru / Hyderabad, India',
    role: 'Software Developer',
    period: '02/2017 – 08/2021',
    responsibilities: [
      'Owned end-to-end web delivery for AR/WebAR, VR/MR products and admin dashboards (UI/UX) across L Catalog, ALS, WebAR apps, and POCs/demos.',
      'Built interactive AR experiences with A-Frame, Three.js, JSArToolKit, WebXR, and Babylon.js; optimized 3D rendering, interactivity, and mobile performance.',
      'Delivered AngularJS Progressive Web Apps with Google Analytics for engagement tracking and frontend flows for catalog browsing and AR campaigns.',
      'Built Node.js APIs with MongoDB (caching/proxy patterns) and deployed on AWS (EC2, S3, Auto Scaling, Security Groups, ELB, VPC).',
    ],
    impact: [
      'Shipped immersive AR/WebAR product experiences optimized for cross-device 3D performance.',
    ],
    clients: ['ALS', 'Cliff'],
    projects: ['L Catalog', 'ALS', 'WishAR', 'AR Cards', 'POCs & demos'],
    tech: [
      'AngularJS',
      'Node.js',
      'MongoDB',
      'AWS',
      'PWA',
      'A-Frame',
      'Three.js',
      'JSArToolKit',
      'WebXR',
      'Babylon.js',
      '8th Wall',
    ],
  },
];

export type ProjectCategory = 'AI' | 'Cloud' | 'Backend' | 'Frontend';

export type Project = {
  id: string;
  name: string;
  categories: ProjectCategory[];
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: 'askball',
    name: 'AskBall',
    categories: ['AI', 'Cloud'],
    tagline: 'HR chatbot in Copilot',
    description:
      'HR chatbot in Copilot to interact regarding employee details, with multilingual support.',
    challenge: 'Give employees fast, accurate answers about HR data without ticket churn.',
    solution: 'Copilot-based conversational assistant with multilingual employee-detail workflows.',
    impact: 'Streamlined HR interactions for employee queries across languages.',
    tech: ['Copilot', 'GenAI', 'Azure', 'Node.js'],
  },
  {
    id: 'frp',
    name: 'FRP',
    categories: ['Cloud'],
    tagline: 'AI-based report generation',
    description: 'AI-based report generation across different report types and formats.',
    challenge: 'Produce consistent business reports without heavy manual drafting.',
    solution: 'AI-assisted report generation pipelines tailored to multiple report templates.',
    impact: 'Faster report creation with less repetitive manual effort.',
    tech: ['Node.js', 'GenAI', 'PostgreSQL', 'Azure'],
  },
  {
    id: 'quote-ai',
    name: 'Quote AI',
    categories: ['AI', 'Backend', 'Cloud', 'Frontend'],
    tagline: 'Quote generation for NAM & MEA',
    description:
      'Quote generation platform covering NAM and MEA regions with AI-assisted quoting workflows.',
    challenge: 'Generate reliable quotes across regions with complex product rules.',
    solution: 'Cloud-native quote generation services with secure identity and GenAI assistance.',
    impact: 'Shorter quote cycles for Emerson NAM and MEA programs.',
    tech: ['Node.js', 'GenAI', 'PostgreSQL', 'Azure', 'Kubernetes'],
  },
  {
    id: 'mm-erp',
    name: 'MM-ERP',
    categories: ['Cloud'],
    tagline: 'ERP for Maldivian Mermaid',
    description:
      'ERP system for Maldivian Mermaid — business process automation and day-to-day operations.',
    challenge:
      'Unify operational workflows into a maintainable enterprise system for Maldivian Mermaid.',
    solution: 'Full-stack ERP services with authenticated access and cloud-ready delivery.',
    impact: 'Centralized business process handling for Maldivian Mermaid.',
    tech: ['Full Stack', 'PostgreSQL', 'Microservices', 'Auth0', 'Docker'],
  },
  {
    id: 'dextr',
    name: 'Dextr',
    categories: ['Backend', 'Cloud', 'Frontend'],
    tagline: 'Data extraction platform',
    description:
      'Data extraction platform for turning documents and inputs into usable business data.',
    challenge: 'Extract structured data reliably from varied document sources at scale.',
    solution: 'Microservice extraction pipelines with OCR and cloud-native processing.',
    impact: 'Reduced manual document handling and improved downstream data quality.',
    tech: ['Node.js', 'OCR', 'Azure', 'Microservices', 'React'],
  },
  {
    id: 'endorsement',
    name: 'Endorsement (EMS)',
    categories: ['Cloud', 'Frontend'],
    tagline: 'Email endorsement automation',
    description:
      'Handles endorsement requests from different customers through email and automates the process.',
    challenge:
      'Process high volumes of endorsement requests arriving over email with less manual work.',
    solution:
      'Automated email intake and endorsement workflow services with enterprise auth and CI/CD.',
    impact: 'Faster endorsement handling with fewer manual touchpoints.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'GKE', 'OKTA', 'Email automation'],
  },
  {
    id: 'nbsi',
    name: 'New Business Submission (NBSI)',
    categories: ['Backend', 'Cloud'],
    tagline: 'AI email-attachment extraction',
    description:
      'Data extraction from email attachments through an AI engine, then processing of that data for new business submission.',
    challenge: 'Turn email attachment content into reliable structured submission data.',
    solution:
      'AI extraction engine on cloud microservices with secure identity and automated pipelines.',
    impact: 'Accelerated new-business intake from email-driven submissions.',
    tech: ['Node.js', 'AI Engine', 'PostgreSQL', 'Kubernetes', 'GCP', 'OKTA'],
  },
  {
    id: 'als',
    name: 'ALS',
    categories: ['Backend', 'Frontend'],
    tagline: 'Online course subscription platform',
    description: 'Online course subscription platform with different user role access levels.',
    challenge: 'Support role-based access for learners and admins across subscription workflows.',
    solution: 'Web platform with role-based access control and subscription management flows.',
    impact: 'Clear separation of user roles for course access and administration.',
    tech: ['AngularJS', 'Node.js', 'MongoDB', 'PWA', 'AWS'],
  },
  {
    id: 'wishar',
    name: 'WishAR',
    categories: ['Backend', 'Frontend'],
    tagline: 'AR greeting card platform',
    description:
      'Platform where users purchase a greeting card and receive a QR code that anyone can scan to experience augmented reality.',
    challenge: 'Connect physical greeting cards to a smooth web AR experience after purchase.',
    solution: 'Purchase flow plus QR delivery that launches an AR experience on scan.',
    impact: 'Memorable AR greeting experiences for recipients via QR scan.',
    tech: ['Three.js', 'A-Frame', 'WebXR', 'PWA', 'Node.js'],
  },
  {
    id: 'ar-cards',
    name: 'AR Cards',
    categories: ['Backend', 'Frontend'],
    tagline: 'AR visiting cards with social links',
    description:
      'Users register for Augmented Reality cards, pick a template layout, and enter social profile links (Facebook, LinkedIn, Twitter, Instagram, WhatsApp, Mail, and more). They receive a QR code to print on a visiting card. Scanning opens an AR web page with clickable social icons and a user video that deep-link to profiles, calls, or WhatsApp.',
    challenge:
      'Turn printed visiting cards into interactive AR profiles without a native app install.',
    solution:
      'Template-based registration, QR generation, and AR web page with clickable social actions.',
    impact:
      'Shareable AR visiting cards that connect people to social profiles and media instantly.',
    tech: ['Three.js', 'A-Frame', 'WebXR', 'JSArToolKit', 'PWA', 'AngularJS'],
  },
  {
    id: 'l-catalog',
    name: 'L Catalog',
    categories: ['Frontend'],
    tagline: 'AR furniture catalog (B2C)',
    description:
      'Augmented Reality application for a furniture vendor (B2C). The vendor provides a marker such as a QR code; the end user augments 3D furniture models in their space to decide faster. Helps reduce manpower, transport cost, pricing friction, decision time, and experience gaps for both vendor and buyer.',
    challenge: 'Let shoppers visualize furniture in their own space before purchase.',
    solution: 'Marker/QR-driven AR catalog that places 3D models in the user’s environment.',
    impact: 'Better purchase decisions with less logistics overhead for vendor and end user.',
    tech: ['Three.js', 'A-Frame', 'WebXR', 'Babylon.js', '8th Wall', 'PWA'],
  },
];

import {
  featuredLibraryIds,
  featuredLibraryProducts,
  libraryProducts,
  productMatchesTab,
  productStatusLabel,
  productTabs,
  productsCatalog,
  upcomingProducts,
  type Product,
  type ProductStatus,
  type ProductTab,
} from './products';

export {
  featuredLibraryIds,
  featuredLibraryProducts,
  libraryProducts,
  productMatchesTab,
  productStatusLabel,
  productTabs,
  productsCatalog,
  upcomingProducts,
  type Product,
  type ProductStatus,
  type ProductTab,
};

export const githubProfile = {
  org: {
    login: 'theinfyark',
    name: 'TheInfyArk',
    bio: 'AI, cloud, and backend libraries for TypeScript and Node.js',
    tagline: 'BUILD · ROBUST · DEPLOY · SCALE',
    logoPath: 'theinfyark-logo.png',
    url: 'https://github.com/theinfyark',
    npm: 'https://www.npmjs.com/~anilachary',
    publicRepos: 21,
    followers: 0,
  },
  personal: {
    login: 'anilachary67p',
    url: 'https://github.com/anilachary67p',
    publicRepos: 6,
    followers: 0,
  },
  languages: ['TypeScript', 'JavaScript', 'HTML'],
  featured: featuredLibraryIds,
} as const;

export const certifications = [
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    code: 'AZ-900',
    issuer: 'Microsoft',
    description: 'Foundational knowledge of cloud concepts and Microsoft Azure services.',
  },
] as const;

export const awards = [
  {
    title: 'Innovation Award',
    period: '2024–2025',
    type: 'Achievement',
    detail: 'Recognized for technical innovation and delivery impact.',
  },
  {
    title: 'Excellence in Performance Award',
    period: '2021–2022',
    type: 'Achievement',
    detail: 'Recognized for outstanding performance and contribution.',
  },
] as const;

export const education = {
  degree: 'B.Tech / B.E. | Computer Science and Engineering (CSE)',
  school: 'VITAM (Affiliated: Jawaharlal Nehru Technological University, Kakinada)',
  location: 'Visakhapatnam, India',
  year: '2015',
} as const;

export const floatingTech = [
  'Node.js',
  'Kubernetes',
  'Azure',
  'AWS',
  'GCP',
  'PostgreSQL',
  'Docker',
  'K3s',
  'Auth0',
  'OKTA',
  'Terraform',
  'Argo CD',
] as const;

/** Compact skill rows for the printable one-page resume */
export const resumeSkillGroups = [
  {
    label: 'Cloud',
    items:
      'Azure · AWS · GCP · Azure DevOps · Terraform · Docker · Kubernetes · Helm · K3s · Nginx · Istio',
  },
  {
    label: 'Backend',
    items:
      'Node.js · Express.js · Fastify · TypeScript · JavaScript · Redis · MS Graph API · REST APIs · GraphQL · PostgreSQL · MongoDB · Prisma · Flyway · BullMQ · HAPI FHIR · ODK',
  },
  {
    label: 'DevOps / DevSecOps & CI/CD',
    items:
      'Jenkins · Concourse · Azure Pipelines · SonarQube · Snyk · Wiz · Trivy · Argo CD · Veracode · Burp Suite · HCL AppScan · Kiali · Prometheus · Grafana · OpenTelemetry',
  },
  {
    label: 'Identity & Security',
    items: 'Azure Entra ID · Auth0 · OKTA · Keycloak · JWT · OAuth 2.0 · SSO',
  },
  {
    label: 'Frontend / Web',
    items:
      'AR/VR/MR · ArCore · React.js · Three.js · 8th Wall · A-Frame · JSArToolKit · Next.js · AngularJS · WebXR · MUI · Tailwind · TanStack · Material React Table · Table Virtualization · Babylon.js',
  },
  {
    label: 'AI / GenAI (Basics Level)',
    items: 'OpenAI · Azure AI Foundry · OCR · AI Search · LLMs · RAG',
  },
] as const;

/** Shorter summary tuned to fit one printed page */
export const resumeSummary = `Cloud and Backend Lead Engineer with ${yearsXp}+ years designing and delivering scalable cloud-native and hybrid solutions on AWS, Azure, and GCP. Strong in microservices, Node.js, PostgreSQL, Kubernetes/K3s, and secure auth (OKTA, Auth0, Keycloak). Hands-on with Docker, CI/CD, and IaC (Terraform), plus AngularJS/React and AR/VR/MR web technologies.`;
