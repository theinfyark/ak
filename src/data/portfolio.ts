export const siteConfig = {
  name: 'Anil Kumar P',
  shortName: 'AK',
  title: 'Cloud & Backend Engineer | Full-Stack Developer',
  taglines: [
    'Cloud-native backends that scale',
    'Kubernetes · DevOps · GenAI',
    'Secure auth · resilient APIs',
    'Open source for AI & cloud',
  ],
  summary:
    'Cloud and Backend Engineer with 8+ years of experience designing and deploying scalable backend systems and cloud-native infrastructures. Strong expertise in Kubernetes, Docker, and cloud platforms AWS, Azure, and GCP. Experienced in full-stack development using Node.js, Express.js, PostgreSQL, MongoDB, and RESTful APIs, with frontend exposure to React.js and AngularJS. Proficient in secure authentication using OKTA, Auth0, and Azure Entra ID, with hands-on experience in DevOps and DevSecOps practices. Delivering high-availability Microservice Architecture and optimizing performance in Agile environments.',
  location: 'Bengaluru, India',
  email: 'anilachary.p@gmail.com',
  phone: '+91 9885155454',
  phoneRaw: '919885155454',
  resumePath: 'Anil_Kumar_P_Full_Stack_Cloud_9_Years.pdf',
  siteUrl: 'https://theinfyark.github.io/ak/',
  social: {
    github: 'https://github.com/theinfyark',
    githubPersonal: 'https://github.com/anilachary67p',
    linkedin: 'https://www.linkedin.com/in/anilachary67',
    npm: 'https://www.npmjs.com/org/theinfyark',
    email: 'mailto:anilachary.p@gmail.com',
    whatsapp: 'https://wa.me/919885155454',
    phone: 'tel:+919885155454',
  },
} as const;

export const stats = [
  { label: 'Years Experience', value: 8, suffix: '+' },
  { label: 'Dev Effort Reduced', value: 80, suffix: '%' },
  { label: 'Perf Optimized', value: 68, suffix: '%' },
  { label: 'Latency Reduced', value: 20, suffix: '%' },
] as const;

export const about = {
  philosophy:
    'Ship reliable systems first — clear contracts, observable services, and security baked into the delivery pipeline, not bolted on later.',
  journey:
    'From AR/PWA product work on AWS, through enterprise microservices and identity on GCP, to leading cloud and AI delivery on hybrid Kubernetes and Azure.',
  loveBuilding: [
    'High-availability microservice backends',
    'Cloud-native platforms on Kubernetes',
    'Secure identity (OKTA, Auth0, Entra ID)',
    'GenAI tooling for real product workflows',
    'Open-source SDKs for AI, cloud & Node',
  ],
  strengths: [
    'Backend architecture & APIs',
    'Cloud & Kubernetes delivery',
    'DevOps / DevSecOps',
    'Mentorship & technical leadership',
  ],
  industries: ['Insurance', 'Manufacturing', 'Enterprise ERP', 'AR / Immersive web'],
  technologies: ['Node.js', 'Kubernetes', 'Azure', 'AWS', 'GCP', 'PostgreSQL', 'GenAI'],
} as const;

export type SkillLevel = 'expert' | 'advanced' | 'proficient';

export type SkillCategory = {
  id: string;
  label: string;
  skills: { name: string; level: SkillLevel }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js', level: 'expert' },
      { name: 'Express.js', level: 'expert' },
      { name: 'Fastify', level: 'advanced' },
      { name: 'REST APIs', level: 'expert' },
      { name: 'SOAP APIs', level: 'proficient' },
      { name: 'Prisma', level: 'advanced' },
      { name: 'Flyway', level: 'advanced' },
      { name: 'BullMQ', level: 'advanced' },
      { name: 'Middleware', level: 'expert' },
      { name: 'HL7 / FHIR', level: 'proficient' },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'TypeScript / JavaScript', level: 'expert' },
      { name: 'SQL', level: 'advanced' },
      { name: 'YAML', level: 'advanced' },
      { name: 'Bash', level: 'proficient' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 'expert' },
      { name: 'MongoDB', level: 'advanced' },
      { name: 'Redis', level: 'advanced' },
      { name: 'CloudNativePG', level: 'proficient' },
      { name: 'MinIO', level: 'proficient' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud',
    skills: [
      { name: 'Azure', level: 'expert' },
      { name: 'AWS', level: 'advanced' },
      { name: 'GCP', level: 'advanced' },
      { name: 'Networking / VNet', level: 'advanced' },
      { name: 'Bastion / Private Endpoints', level: 'advanced' },
      { name: 'DNS Zones', level: 'proficient' },
      { name: 'Load Balancers', level: 'advanced' },
    ],
  },
  {
    id: 'azure',
    label: 'Azure',
    skills: [
      { name: 'AKS', level: 'advanced' },
      { name: 'App Services', level: 'advanced' },
      { name: 'Azure Functions', level: 'advanced' },
      { name: 'Azure AD / Entra ID', level: 'expert' },
      { name: 'Key Vault (AKV)', level: 'advanced' },
      { name: 'Service Bus (ASB)', level: 'advanced' },
      { name: 'Azure Pipelines', level: 'advanced' },
      { name: 'Storage / OCR / Foundry', level: 'proficient' },
    ],
  },
  {
    id: 'aws',
    label: 'AWS',
    skills: [
      { name: 'EC2 / VPC / ELB', level: 'advanced' },
      { name: 'S3', level: 'advanced' },
      { name: 'Auto Scaling', level: 'proficient' },
      { name: 'Security Groups', level: 'advanced' },
    ],
  },
  {
    id: 'containers',
    label: 'Containers & Kubernetes',
    skills: [
      { name: 'Docker', level: 'expert' },
      { name: 'Kubernetes', level: 'expert' },
      { name: 'Helm', level: 'advanced' },
      { name: 'AKS / GKE / K3s', level: 'advanced' },
      { name: 'Istio / Kiali', level: 'proficient' },
      { name: 'NGINX', level: 'advanced' },
      { name: 'On-prem K8s', level: 'advanced' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & CI/CD',
    skills: [
      { name: 'Jenkins', level: 'advanced' },
      { name: 'Concourse', level: 'proficient' },
      { name: 'Argo CD', level: 'proficient' },
      { name: 'Terraform', level: 'proficient' },
      { name: 'Git / GitOps', level: 'expert' },
      { name: 'JFrog', level: 'proficient' },
      { name: 'Microservices', level: 'expert' },
    ],
  },
  {
    id: 'ai',
    label: 'AI · GenAI · LLM',
    skills: [
      { name: 'OpenAI', level: 'advanced' },
      { name: 'GenAI / Agents', level: 'advanced' },
      { name: 'Copilot / Models', level: 'proficient' },
      { name: 'OCR pipelines', level: 'advanced' },
      { name: 'LLM streaming', level: 'proficient' },
      { name: 'RAG (tooling)', level: 'proficient' },
    ],
  },
  {
    id: 'security',
    label: 'Security',
    skills: [
      { name: 'OKTA / SSO', level: 'expert' },
      { name: 'Auth0', level: 'expert' },
      { name: 'JWT', level: 'expert' },
      { name: 'SonarQube', level: 'advanced' },
      { name: 'Snyk / Trivy', level: 'advanced' },
      { name: 'Veracode / VAPT', level: 'proficient' },
      { name: 'Burp Scan', level: 'proficient' },
    ],
  },
  {
    id: 'monitoring',
    label: 'Monitoring',
    skills: [
      { name: 'Grafana', level: 'advanced' },
      { name: 'Prometheus', level: 'advanced' },
      { name: 'Kiali', level: 'proficient' },
      { name: 'Stackdriver', level: 'proficient' },
    ],
  },
  {
    id: 'messaging',
    label: 'Messaging & APIs',
    skills: [
      { name: 'Kafka', level: 'advanced' },
      { name: 'Pub/Sub', level: 'advanced' },
      { name: 'Azure Service Bus', level: 'advanced' },
      { name: 'MS Graph API', level: 'advanced' },
      { name: 'Webhooks', level: 'advanced' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React.js', level: 'proficient' },
      { name: 'AngularJS', level: 'proficient' },
      { name: 'HTML / CSS / Bootstrap', level: 'proficient' },
      { name: 'MUI / TanStack', level: 'proficient' },
      { name: 'PWA', level: 'advanced' },
      { name: 'Three.js / A-Frame / WebXR', level: 'proficient' },
    ],
  },
  {
    id: 'tools',
    label: 'Developer Tools',
    skills: [
      { name: 'PM2 / Cluster', level: 'advanced' },
      { name: 'JOI validation', level: 'advanced' },
      { name: 'Mocha / Jest / RTL', level: 'proficient' },
      { name: 'Keycloak', level: 'proficient' },
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
    company: 'SLK Software Pvt Ltd (Part of Altimetrik Group)',
    location: 'Bengaluru, India',
    role: 'Lead Software Engineer',
    period: '04/2024 – Present',
    responsibilities: [
      'Lead and mentor engineers across backend, cloud, and frontend; identify and mitigate technical risk early.',
      'Define scope, timelines, and deliverables; run code reviews against quality and security standards.',
      'Evaluate and integrate emerging tools to improve system performance and delivery.',
      'Partner with product, design, and QA across full SDLC for predictable releases.',
    ],
    impact: [
      'Led architecture and database migration work that improved scalability and reduced latency by ~20%.',
      'Delivered multi-client platforms spanning GenAI, ERP, and insurance workflows.',
    ],
    clients: ['Emerson', 'BallCorp', 'Berry Global', 'Maldivian Mermaid', 'Internal Product', 'CNA'],
    projects: [
      'Insure AI',
      'Dextr',
      'AskBall',
      'Quote AI',
      'FRP',
      'MM-ERP',
      'TAT',
      'Mithril',
      "POCs & Demos",
    ],
    tech: [
      'Node.js',
      'PostgreSQL',
      'Azure AD',
      'Auth0',
      'OKTA',
      'GCP',
      'Docker',
      'Kubernetes',
      'Microservices',
      'MS Graph API',
      'GenAI',
      'SonarQube',
      'VAPT',
      'Trivy/Snyk',
      'Jenkins',
      'ASB',
      'OpenAI',
      'OCR',
      'Flyway',
      'On-Prem K8s',
      'Grafana',
      'Prometheus',
      'Kiali',
      'Webhooks',
    ],
  },
  {
    company: 'V-Labs Pvt Ltd',
    location: 'Bengaluru, India',
    role: 'Senior Software Engineer',
    period: '08/2021 – 04/2024',
    responsibilities: [
      'Built RESTful services in Node.js / Java microservices with AI-assisted data handling.',
      'Integrated OKTA (SSO), Auth0, Azure AD, and JWT across applications.',
      'Designed cloud infrastructure and end-to-end CI/CD with Veracode, SonarQube, and Stackdriver.',
    ],
    impact: [
      'Reusable components cut development effort by ~80%.',
      'Critical module performance improved by ~68%.',
    ],
    clients: ['CNA', 'Finolex'],
    projects: ['NBSI', 'Endorsement', "POCs & Demos"],
    tech: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
      'GCP',
      'OKTA',
      'Auth0',
      'JWT',
      'Microservices',
      'Veracode',
      'SonarQube',
      'Stackdriver',
      'Jenkins',
      'Concourse',
    ],
  },
  {
    company: 'Immersion Software Labs Pvt Ltd',
    location: 'Bengaluru / Hyderabad, India',
    role: 'Software Developer',
    period: '02/2017 – 08/2021',
    responsibilities: [
      'Delivered full-stack web apps with frontend UI, backend services, and AWS deployment.',
      'Built Progressive Web Apps with analytics and resilient caching/proxy layers.',
      'Created interactive AR web experiences with A-Frame, Three.js, and JSArToolKit.',
      'Operated AWS (EC2, S3, ASG, Security Groups, ELB) inside VPC topologies.',
    ],
    impact: [
      'Shipped immersive AR product experiences optimized for cross-device 3D performance.',
    ],
    clients: ['ALS', 'In-House Product'],
    projects: ['AR Cards', 'L Catalog', 'Multiple AR projects'],
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
    challenge: 'Accelerate insurance operations with GenAI without sacrificing compliance or reliability.',
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
    tagline: 'Generative quote assistance',
    description:
      'Intelligent quote generation using generative AI for dynamic pricing support and personalized insurance quotes.',
    challenge: 'Produce consistent, context-aware quotes from complex product rules.',
    solution: 'Secure GenAI orchestration with Entra ID and cloud-native deployment.',
    impact: 'Shorter quote cycles with AI-assisted pricing support.',
    tech: ['Node.js', 'GenAI', 'PostgreSQL', 'Azure AD', 'Kubernetes'],
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
    tagline: 'AI assistant for client product surface',
    description:
      'Client-facing AI assistant experience delivered as part of SLK / Altimetrik product work.',
    challenge: 'Embed helpful AI interactions into an existing product ecosystem.',
    solution: 'Backend GenAI integration with secure identity and operational monitoring.',
    impact: 'Expanded product capabilities with conversational / agent-style assistance.',
    tech: ['Node.js', 'GenAI', 'Azure', 'Auth', 'Kubernetes'],
  },
  {
    id: 'ar-cards',
    name: 'AR Cards',
    category: 'AR',
    tagline: 'Immersive web AR experiences',
    description:
      'Interactive AR web experiences with 3D rendering, marker-based tracking, and cross-device responsiveness.',
    challenge: 'Deliver smooth AR on the open web under device and network constraints.',
    solution: 'A-Frame / Three.js / WebXR stack with caching, proxies, and performance tuning.',
    impact: 'Engaging marker-based AR product experiences for end users.',
    tech: ['Three.js', 'A-Frame', 'WebXR', 'PWA', 'JSArToolKit', '8th Wall'],
  },
];

export const openSourcePackages = [
  {
    name: 'streamflow-ai',
    description:
      'Unified TypeScript streaming SDK for OpenAI, Azure OpenAI, Anthropic, Gemini, Ollama, Groq, DeepSeek, Mistral, and OpenRouter.',
    language: 'TypeScript',
    tags: ['ai', 'llm', 'streaming'],
    version: '—',
    downloads: 'Placeholder — publishing soon',
    url: 'https://github.com/theinfyark/streamflow-ai',
    npm: 'https://www.npmjs.com/package/streamflow-ai',
  },
  {
    name: 'deploy-doctor-cli',
    description:
      'Deployment validation CLI — Docker, Kubernetes, Helm, Terraform, cloud CLIs, Node, disk, memory, ports, and networking.',
    language: 'TypeScript',
    tags: ['devops', 'cli', 'kubernetes'],
    version: '—',
    downloads: 'Placeholder — publishing soon',
    url: 'https://github.com/theinfyark/deploy-doctor-cli',
  },
  {
    name: 'env-ok',
    description:
      'Tiny TypeScript environment validator with Enum, Boolean, Email, URL, Port, Secret, and defaults.',
    language: 'TypeScript',
    tags: ['node', 'config', 'validation'],
    version: '—',
    downloads: 'Placeholder — publishing soon',
    url: 'https://github.com/theinfyark/env-ok',
  },
  {
    name: 'rag-toolkit',
    description: 'Tiny RAG toolkit — chunking, embeddings, similarity search, and context building.',
    language: 'JavaScript',
    tags: ['ai', 'rag'],
    version: '—',
    downloads: 'Placeholder — publishing soon',
    url: 'https://github.com/theinfyark/rag-toolkit',
  },
  {
    name: 'express-api-starter',
    description:
      'Production-ready Express API starter with logger, errors, JWT, rate limit, CORS, Helmet, request IDs, and health checks.',
    language: 'JavaScript',
    tags: ['backend', 'express'],
    version: '—',
    downloads: 'Placeholder — publishing soon',
    url: 'https://github.com/theinfyark/express-api-starter',
  },
  {
    name: 'mcp-server-plus',
    description: 'MCP Server Toolkit — typed helpers for building Model Context Protocol servers.',
    language: 'TypeScript',
    tags: ['mcp', 'ai', 'toolkit'],
    version: '—',
    downloads: 'Placeholder — publishing soon',
    url: 'https://github.com/theinfyark/mcp-server-plus',
  },
  {
    name: 'ai-cost-insight',
    description: 'Universal AI cost and token usage tracker.',
    language: 'TypeScript',
    tags: ['ai', 'cost', 'observability'],
    version: '—',
    downloads: 'Placeholder — publishing soon',
    url: 'https://github.com/theinfyark/ai-cost-insight',
  },
  {
    name: 'azure-secret-manager',
    description:
      'Tiny Azure Key Vault helper — get secrets with DefaultAzureCredential, caching, and a clean API.',
    language: 'JavaScript',
    tags: ['azure', 'security'],
    version: '—',
    downloads: 'Placeholder — publishing soon',
    url: 'https://github.com/theinfyark/azure-secret-manager',
  },
] as const;

export const githubProfile = {
  org: {
    login: 'theinfyark',
    name: 'InfyArk-Tech',
    bio: 'Modern Javascript / TypeScript Libraries for AI, Cloud and Backend Development.',
    url: 'https://github.com/theinfyark',
    publicRepos: 20,
    followers: 0,
  },
  personal: {
    login: 'anilachary67p',
    url: 'https://github.com/anilachary67p',
    publicRepos: 6,
    followers: 0,
  },
  languages: ['TypeScript', 'JavaScript', 'HTML'],
  featured: [
    'streamflow-ai',
    'deploy-doctor-cli',
    'mcp-server-plus',
    'express-api-starter',
    'rag-toolkit',
    'ai-telemetry-kit',
  ],
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
  degree: 'B-Tech in Computer Science & Engineering',
  school: 'VITAM College Of Engineering, JNTUK',
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
  'GenAI',
  'Auth0',
  'OKTA',
  'Terraform',
  'Grafana',
] as const;

export const placeholders = {
  blog: {
    title: 'Writing',
    note: 'Placeholder — deep-dives on cloud platforms, GenAI delivery, and backend architecture coming soon.',
  },
  testimonials: {
    title: 'Testimonials',
    note: 'Placeholder — colleague and stakeholder quotes will appear here.',
  },
  speaking: {
    title: 'Speaking',
    note: 'Placeholder — talks and workshops on cloud, DevOps, and AI tooling will be listed here.',
  },
} as const;
