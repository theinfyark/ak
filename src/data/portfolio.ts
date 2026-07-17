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
  languages: [{ name: 'English', level: 'Native' }],
} as const;

export type SkillLevel = 'expert' | 'advanced' | 'proficient' | 'intermediate' | 'working';

export type SkillCategory = {
  id: string;
  label: string;
  skills: { name: string; level: SkillLevel }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    label: 'Cloud / Backend',
    skills: [
      { name: 'Node.js', level: 'expert' },
      { name: 'Express.js', level: 'expert' },
      { name: 'Fastify', level: 'advanced' },
      { name: 'TypeScript / JavaScript', level: 'expert' },
      { name: 'REST APIs', level: 'expert' },
      { name: 'GraphQL', level: 'proficient' },
      { name: 'Prisma', level: 'advanced' },
      { name: 'Flyway', level: 'advanced' },
      { name: 'BullMQ', level: 'advanced' },
      { name: 'HAPI FHIR', level: 'proficient' },
      { name: 'ODK (Data Collection)', level: 'proficient' },
      { name: 'MS Graph API', level: 'advanced' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 'expert' },
      { name: 'MongoDB', level: 'advanced' },
      { name: 'Redis', level: 'advanced' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud Platforms',
    skills: [
      { name: 'Azure', level: 'expert' },
      { name: 'AWS', level: 'advanced' },
      { name: 'GCP', level: 'advanced' },
      { name: 'Azure DevOps', level: 'advanced' },
      { name: 'Private Endpoints / DNS', level: 'advanced' },
      { name: 'Networking / Firewalls', level: 'advanced' },
    ],
  },
  {
    id: 'containers',
    label: 'Containers & Kubernetes',
    skills: [
      { name: 'Docker', level: 'expert' },
      { name: 'Kubernetes', level: 'expert' },
      { name: 'Helm', level: 'advanced' },
      { name: 'K3s', level: 'advanced' },
      { name: 'Istio', level: 'proficient' },
      { name: 'NGINX', level: 'advanced' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps / DevSecOps & CI/CD',
    skills: [
      { name: 'Jenkins', level: 'advanced' },
      { name: 'Concourse', level: 'proficient' },
      { name: 'Azure Pipelines', level: 'advanced' },
      { name: 'Argo CD', level: 'proficient' },
      { name: 'SonarQube', level: 'advanced' },
      { name: 'Snyk / Wiz / Trivy', level: 'advanced' },
      { name: 'Veracode / HCL AppScan', level: 'proficient' },
      { name: 'Burp Suite', level: 'proficient' },
    ],
  },
  {
    id: 'iac',
    label: 'IaC',
    skills: [
      { name: 'Terraform', level: 'working' },
      { name: 'Bicep', level: 'working' },
    ],
  },
  {
    id: 'observability',
    label: 'Observability',
    skills: [
      { name: 'Prometheus', level: 'advanced' },
      { name: 'Grafana', level: 'advanced' },
      { name: 'OpenTelemetry', level: 'proficient' },
      { name: 'Kiali', level: 'proficient' },
      { name: 'Stackdriver', level: 'proficient' },
    ],
  },
  {
    id: 'identity',
    label: 'Identity & Security',
    skills: [
      { name: 'Azure Entra ID', level: 'expert' },
      { name: 'Auth0', level: 'expert' },
      { name: 'OKTA / SSO', level: 'expert' },
      { name: 'Keycloak', level: 'advanced' },
      { name: 'JWT / OAuth 2.0', level: 'expert' },
    ],
  },
  {
    id: 'ai',
    label: 'AI · GenAI (Basics)',
    skills: [
      { name: 'OpenAI', level: 'intermediate' },
      { name: 'Azure AI Foundry', level: 'working' },
      { name: 'OCR', level: 'intermediate' },
      { name: 'AI Search', level: 'working' },
      { name: 'LLMs', level: 'working' },
      { name: 'RAG', level: 'working' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend / Web',
    skills: [
      { name: 'AngularJS', level: 'advanced' },
      { name: 'React.js', level: 'working' },
      { name: 'Next.js', level: 'working' },
      { name: 'MUI / Tailwind', level: 'proficient' },
      { name: 'TanStack / Material React Table', level: 'proficient' },
      { name: 'Table Virtualization', level: 'proficient' },
    ],
  },
  {
    id: 'ar',
    label: 'AR / VR / MR',
    skills: [
      { name: 'Three.js', level: 'proficient' },
      { name: 'A-Frame / WebXR', level: 'proficient' },
      { name: 'JSArToolKit', level: 'proficient' },
      { name: 'Babylon.js', level: 'proficient' },
      { name: '8th Wall / ArCore', level: 'proficient' },
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
    company: 'SLK Software (Part of Altimetrik)',
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
    company: 'SLK Software / Digital (Part of Amin Holdings)',
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
    company: 'V-Labs Pvt Ltd (Part of SLK Software)',
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
    projects: ['NBSI', 'Endorsement', 'POCs & demos'],
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
    projects: ['L Catalog', 'ALS', 'WebAR apps', 'POCs & demos'],
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

export type Project = {
  id: string;
  name: string;
  category: 'AI' | 'Cloud' | 'Backend' | 'DevOps' | 'AR';
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
    id: 'insure-ai',
    name: 'Insure AI',
    category: 'AI',
    tagline: 'AI-powered insurance workflows',
    description:
      'Insurance platform capabilities spanning intelligent quote support, risk-oriented assistance, and AI-assisted underwriting flows.',
    challenge:
      'Accelerate insurance operations with GenAI without sacrificing compliance or reliability.',
    solution:
      'Node.js services on Kubernetes with OpenAI/OCR integrations, secure identity, and observability.',
    impact: 'Enabled faster quote and underwriting assistance across client programs.',
    tech: ['Node.js', 'GenAI', 'OpenAI', 'PostgreSQL', 'Kubernetes', 'Azure'],
  },
  {
    id: 'dextr',
    name: 'Dextr',
    category: 'Backend',
    tagline: 'Intelligent extraction & pipelines',
    description:
      'Data extraction and processing platform with OCR, workflow automation, and real-time pipelines.',
    challenge: 'Turn unstructured documents into reliable, queryable business data at scale.',
    solution: 'Microservice pipelines with Kafka/ASB messaging, OCR, and cloud-native services.',
    impact: 'Reduced manual document handling and improved throughput for downstream systems.',
    tech: ['Node.js', 'OCR', 'Kafka', 'Azure', 'React', 'Microservices'],
  },
  {
    id: 'quote-ai',
    name: 'Quote AI',
    category: 'AI',
    tagline: 'Generative quote assistance (NAM & MEA)',
    description:
      'Intelligent quote generation using generative AI for dynamic pricing support and personalized quotes across NAM and MEA programs.',
    challenge: 'Produce consistent, context-aware quotes from complex product rules.',
    solution: 'Secure GenAI orchestration with enterprise identity and cloud-native deployment.',
    impact:
      'Shorter quote cycles with AI-assisted pricing support for Emerson NAM/MEA and related clients.',
    tech: ['Node.js', 'GenAI', 'PostgreSQL', 'Azure', 'Kubernetes'],
  },
  {
    id: 'mm-erp',
    name: 'MM-ERP',
    category: 'Backend',
    tagline: 'Enterprise ERP for Maldivian Mermaid',
    description:
      'ERP coverage for business process automation, inventory, and financial reporting.',
    challenge: 'Unify operational workflows into a maintainable, authenticated enterprise system.',
    solution: 'Full-stack services with Auth0, Dockerized delivery, and PostgreSQL persistence.',
    impact: 'Centralized operational processes for the client organization.',
    tech: ['Full Stack', 'PostgreSQL', 'Microservices', 'Auth0', 'Docker'],
  },
  {
    id: 'nbsi',
    name: 'NBSI',
    category: 'Cloud',
    tagline: 'National Business Service Infrastructure',
    description:
      'Scalable microservices architecture with high availability, secure authentication, and cloud-native deployment.',
    challenge: 'Deliver a resilient multi-service backbone with enterprise SSO.',
    solution: 'GCP Kubernetes microservices secured with OKTA and automated CI/CD.',
    impact: 'Stable foundation for subsequent product modules and endorsements.',
    tech: ['Microservices', 'Docker', 'Kubernetes', 'GCP', 'CI/CD', 'OKTA'],
  },
  {
    id: 'askball',
    name: 'AskBall',
    category: 'AI',
    tagline: 'AI assistant for Ball Corp / Emerson NAM',
    description:
      'Client-facing AI assistant experience delivered as Team Lead work at SLK Software (Altimetrik).',
    challenge: 'Embed helpful AI interactions into an existing product ecosystem.',
    solution:
      'Backend GenAI integration with secure Azure networking, identity, and operational monitoring.',
    impact: 'Expanded product capabilities with conversational assistance for AskBall.',
    tech: ['Node.js', 'GenAI', 'Azure', 'Docker', 'Azure DevOps'],
  },
  {
    id: 'frp',
    name: 'FRP',
    category: 'Backend',
    tagline: 'Enterprise delivery program',
    description:
      'Production platform work delivered during Software Developer Lead tenure spanning architecture, build, and release.',
    challenge: 'Ship reliable backend and cloud changes across a multi-team delivery program.',
    solution: 'Node.js services with Docker/Kubernetes delivery and Auth0/OKTA identity.',
    impact: 'Supported scalable client delivery with lower latency after architecture refinements.',
    tech: ['Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'Auth0'],
  },
  {
    id: 'tat',
    name: 'TAT',
    category: 'Backend',
    tagline: 'Turnaround-time / workflow platform',
    description:
      'Workflow-oriented product delivery under Software Developer Lead role at SLK Software / Digital.',
    challenge: 'Improve operational throughput with clearer service boundaries and reliable APIs.',
    solution: 'Microservice-style Node.js services with PostgreSQL and cloud deployment.',
    impact: 'Contributed to multi-client platform delivery alongside ERP and GenAI programs.',
    tech: ['Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'GCP'],
  },
  {
    id: 'mithril',
    name: 'Mithril',
    category: 'Cloud',
    tagline: 'Cloud platform delivery',
    description:
      'Cloud and backend platform work delivered for SLK Software / Digital client programs.',
    challenge: 'Stabilize cloud-native delivery with secure auth and repeatable deployments.',
    solution: 'Node.js on Docker/Kubernetes across GCP/Azure with Auth0 and OKTA.',
    impact: 'Supported production readiness for multi-client initiatives.',
    tech: ['Node.js', 'Kubernetes', 'Azure', 'GCP', 'OKTA'],
  },
  {
    id: 'endorsement',
    name: 'Endorsement',
    category: 'Cloud',
    tagline: 'Mission-critical endorsement flows',
    description:
      'Backend and cloud platform capabilities for endorsement workflows at V-Labs (part of SLK Software).',
    challenge: 'Deliver reliable microservices with enterprise SSO and strong quality gates.',
    solution: 'Node.js/Express APIs on GCP (GKE, Pub/Sub) with OKTA/Auth0 and Concourse CI/CD.',
    impact: 'Improved reliability for mission-critical client systems alongside NBSI.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'GKE', 'OKTA', 'Concourse'],
  },
  {
    id: 'ar-cards',
    name: 'WebAR / L Catalog',
    category: 'AR',
    tagline: 'Immersive web AR experiences',
    description:
      'Interactive AR/WebAR experiences and catalog apps with 3D rendering, marker-based tracking, and cross-device responsiveness.',
    challenge: 'Deliver smooth AR on the open web under device and network constraints.',
    solution:
      'A-Frame / Three.js / WebXR / Babylon.js stack with caching, proxies, and performance tuning.',
    impact: 'Engaging marker-based AR product experiences for ALS, Cliff, and in-house campaigns.',
    tech: ['Three.js', 'A-Frame', 'WebXR', 'PWA', 'JSArToolKit', 'Babylon.js', '8th Wall'],
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
    period: '2024–25',
    type: 'Innovation',
    detail: 'Recognized for technical innovation and delivery impact.',
  },
  {
    title: 'Excellence in Performance',
    period: '2021–22',
    type: 'Award',
    detail: 'Recognized for outstanding performance and contribution.',
  },
] as const;

export const education = {
  degree: 'B.Tech / B.E. in Computer Science and Engineering (CSE)',
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
    label: 'Cloud / Backend',
    items:
      'Azure · AWS · GCP · Azure DevOps · Terraform · Docker · Kubernetes · Helm · K3s · Nginx · Istio · Node.js · Express.js · Fastify · TypeScript · PostgreSQL · MongoDB · Redis · Prisma · Flyway · BullMQ · REST · GraphQL · MS Graph · HAPI FHIR · ODK',
  },
  {
    label: 'DevOps / DevSecOps',
    items:
      'Jenkins · Concourse · Azure Pipelines · Argo CD · SonarQube · Snyk · Wiz · Trivy · Veracode · Burp Suite · HCL AppScan · Prometheus · Grafana · OpenTelemetry · Kiali',
  },
  {
    label: 'Identity & Security',
    items: 'Azure Entra ID · Auth0 · OKTA · Keycloak · JWT · OAuth 2.0 · SSO',
  },
  {
    label: 'Frontend / AR',
    items:
      'AngularJS · React.js · Next.js · MUI · Tailwind · TanStack · Three.js · A-Frame · WebXR · Babylon.js · 8th Wall · ArCore',
  },
  {
    label: 'AI / GenAI (Basics)',
    items: 'OpenAI · Azure AI Foundry · OCR · AI Search · LLMs · RAG',
  },
] as const;

/** Shorter summary tuned to fit one printed page */
export const resumeSummary = `Cloud and Backend Lead Engineer with ${yearsXp}+ years designing scalable cloud-native and hybrid solutions on AWS, Azure, and GCP. Strong in microservices, Node.js, PostgreSQL, Kubernetes/K3s, and enterprise identity (OKTA, Auth0, Keycloak). Hands-on CI/CD and IaC with measurable impact on deployment speed, reuse, latency, and performance.`;
