export type ProductStatus = 'live' | 'beta' | 'in-progress' | 'coming-soon';

export type ProductTab = 'all' | 'v-cards' | 'libraries' | 'coming-soon';

export type Product = {
  id: string;
  name: string;
  group: 'v-cards' | 'library';
  status: ProductStatus;
  description: string;
  tags: readonly string[];
  language?: 'TypeScript' | 'JavaScript';
  npmVersion?: string;
  github?: string;
  npm?: string;
  demo?: string;
  launchNote?: string;
};

export const productTabs: { id: ProductTab; label: string }[] = [
  { id: 'all', label: 'All products' },
  { id: 'v-cards', label: 'V Cards' },
  { id: 'libraries', label: 'npm libraries' },
  { id: 'coming-soon', label: 'Coming soon' },
];

const npm = (name: string) => `https://www.npmjs.com/package/${name}`;
const gh = (name: string) => `https://github.com/theinfyark/${name}`;

/** Single source of truth — folder name === npm name === GitHub repo name */
export const productsCatalog: Product[] = [
  {
    id: 'v-cards',
    name: 'V Cards',
    group: 'v-cards',
    status: 'coming-soon',
    description:
      'Smart digital business cards — share your profile, links, and contact details with a tap or QR scan.',
    tags: ['saas', 'vcard', 'qr', 'networking'],
    launchNote: 'Launching soon',
  },
  {
    id: 'v-cards-studio',
    name: 'V Cards Studio',
    group: 'v-cards',
    status: 'coming-soon',
    description:
      'Design beautiful card themes, custom branding, cover images, and link layouts — no code required.',
    tags: ['design', 'themes', 'branding'],
    launchNote: 'Launching soon',
  },
  {
    id: 'v-cards-teams',
    name: 'V Cards for Teams',
    group: 'v-cards',
    status: 'coming-soon',
    description:
      'Org-wide digital cards with admin dashboards, team templates, analytics, and bulk provisioning.',
    tags: ['teams', 'enterprise', 'analytics'],
    launchNote: 'Launching soon',
  },
  {
    id: 'streamflow-ai',
    name: 'streamflow-ai',
    group: 'library',
    status: 'live',
    language: 'TypeScript',
    npmVersion: '1.0.2',
    description:
      'Unified TypeScript streaming SDK for OpenAI, Azure OpenAI, Anthropic, Gemini, Ollama, Groq, DeepSeek, Mistral, and OpenRouter.',
    tags: ['ai', 'llm', 'streaming'],
    github: gh('streamflow-ai'),
    npm: npm('streamflow-ai'),
  },
  {
    id: 'deploy-doctor-cli',
    name: 'deploy-doctor-cli',
    group: 'library',
    status: 'live',
    language: 'TypeScript',
    npmVersion: '1.0.2',
    description:
      'Deployment validation CLI — Docker, Kubernetes, Helm, Terraform, cloud CLIs, Node, disk, memory, ports, and networking.',
    tags: ['devops', 'cli', 'kubernetes'],
    github: gh('deploy-doctor-cli'),
    npm: npm('deploy-doctor-cli'),
  },
  {
    id: 'mcp-server-plus',
    name: 'mcp-server-plus',
    group: 'library',
    status: 'live',
    language: 'TypeScript',
    npmVersion: '1.0.1',
    description:
      'MCP Server Toolkit — create Model Context Protocol servers with tools, prompts, resources, auth, and middleware.',
    tags: ['mcp', 'ai', 'toolkit'],
    github: gh('mcp-server-plus'),
    npm: npm('mcp-server-plus'),
  },
  {
    id: 'node-gen',
    name: 'node-gen',
    group: 'library',
    status: 'in-progress',
    language: 'TypeScript',
    description:
      'Interactive CLI to scaffold production-ready Node.js backends — Express, Fastify, Hono, TypeScript, Zod, Prisma, Docker, and CI.',
    tags: ['cli', 'scaffold', 'backend', 'generator'],
    github: gh('node-gen'),
  },
  {
    id: 'env-ok',
    name: 'env-ok',
    group: 'library',
    status: 'in-progress',
    language: 'TypeScript',
    description:
      'Tiny TypeScript environment validator with Enum, Boolean, Email, URL, Port, Secret, and defaults.',
    tags: ['node', 'config', 'validation'],
    github: gh('env-ok'),
  },
  {
    id: 'docker-health-check',
    name: 'docker-health-check',
    group: 'library',
    status: 'in-progress',
    language: 'JavaScript',
    description:
      'Docker/K8s-ready health checks for database, Redis, RabbitMQ, HTTP, disk, and memory.',
    tags: ['docker', 'kubernetes', 'health'],
    github: gh('docker-health-check'),
  },
  {
    id: 'ai-cost-insight',
    name: 'ai-cost-insight',
    group: 'library',
    status: 'live',
    language: 'TypeScript',
    npmVersion: '1.0.1',
    description:
      'Universal AI cost and token usage tracker with reports, model comparison, and CSV/JSON export.',
    tags: ['ai', 'cost', 'observability'],
    github: gh('ai-cost-insight'),
    npm: npm('ai-cost-insight'),
  },
  {
    id: 'ai-telemetry-kit',
    name: 'ai-telemetry-kit',
    group: 'library',
    status: 'live',
    language: 'TypeScript',
    npmVersion: '1.0.1',
    description:
      'OpenTelemetry for AI — track prompts, responses, cost, tokens, traces, and errors with GenAI semantic conventions.',
    tags: ['ai', 'opentelemetry', 'observability'],
    github: gh('ai-telemetry-kit'),
    npm: npm('ai-telemetry-kit'),
  },
  {
    id: 'ai-prompt-logger',
    name: 'ai-prompt-logger',
    group: 'library',
    status: 'live',
    language: 'TypeScript',
    npmVersion: '1.0.2',
    description:
      'Log AI prompts with tokens, cost estimates, and latency for OpenAI, Azure OpenAI, Anthropic, and Gemini.',
    tags: ['ai', 'logging', 'observability'],
    github: gh('ai-prompt-logger'),
    npm: npm('ai-prompt-logger'),
  },
  {
    id: 'rag-toolkit',
    name: 'rag-toolkit',
    group: 'library',
    status: 'live',
    language: 'JavaScript',
    npmVersion: '1.0.2',
    description:
      'Tiny RAG toolkit — chunking, embeddings abstraction, metadata, similarity search, and context building.',
    tags: ['ai', 'rag'],
    github: gh('rag-toolkit'),
    npm: npm('rag-toolkit'),
  },
  {
    id: 'express-api-starter',
    name: 'express-api-starter',
    group: 'library',
    status: 'live',
    language: 'JavaScript',
    npmVersion: '1.0.3',
    description:
      'Production-ready Express API starter with logger, errors, JWT, rate limit, CORS, Helmet, request IDs, and health checks.',
    tags: ['backend', 'express', 'starter'],
    github: gh('express-api-starter'),
    npm: npm('express-api-starter'),
  },
  {
    id: 'env-safe-plus',
    name: 'env-safe-plus',
    group: 'library',
    status: 'live',
    language: 'TypeScript',
    npmVersion: '1.0.3',
    description:
      'Tiny, typed environment variable validator with defaults, type coercion, and clear errors.',
    tags: ['node', 'config', 'validation'],
    github: gh('env-safe-plus'),
    npm: npm('env-safe-plus'),
  },
  {
    id: 'llm-stream-util',
    name: 'llm-stream-util',
    group: 'library',
    status: 'live',
    language: 'TypeScript',
    npmVersion: '1.0.3',
    description:
      'Tiny helpers to stream LLM responses from OpenAI, Anthropic, and OpenAI-compatible APIs.',
    tags: ['ai', 'llm', 'streaming'],
    github: gh('llm-stream-util'),
    npm: npm('llm-stream-util'),
  },
  {
    id: 'api-response-util',
    name: 'api-response-util',
    group: 'library',
    status: 'live',
    language: 'JavaScript',
    npmVersion: '1.0.2',
    description: 'Tiny Express helpers for consistent API success and error JSON responses.',
    tags: ['express', 'api', 'backend'],
    github: gh('api-response-util'),
    npm: npm('api-response-util'),
  },
  {
    id: 'azure-secret-manager',
    name: 'azure-secret-manager',
    group: 'library',
    status: 'live',
    language: 'JavaScript',
    npmVersion: '1.0.1',
    description:
      'Tiny Azure Key Vault helper — get secrets with DefaultAzureCredential, caching, and a clean API.',
    tags: ['azure', 'security', 'cloud'],
    github: gh('azure-secret-manager'),
    npm: npm('azure-secret-manager'),
  },
  {
    id: 'db-health',
    name: 'db-health',
    group: 'library',
    status: 'live',
    language: 'TypeScript',
    npmVersion: '1.0.1',
    description:
      'Database health monitoring for PostgreSQL, MySQL, MongoDB, and Redis — latency, pool metrics, and readiness.',
    tags: ['database', 'health', 'monitoring'],
    github: gh('db-health'),
    npm: npm('db-health'),
  },
  {
    id: 'dev-logger-kit',
    name: 'dev-logger-kit',
    group: 'library',
    status: 'live',
    language: 'JavaScript',
    npmVersion: '1.0.2',
    description:
      'Beautiful colored Node.js logger with levels, request IDs, execution time, file names, and stack traces.',
    tags: ['logging', 'node', 'devtools'],
    github: gh('dev-logger-kit'),
    npm: npm('dev-logger-kit'),
  },
  {
    id: 'node-cli-banner',
    name: 'node-cli-banner',
    group: 'library',
    status: 'live',
    language: 'TypeScript',
    npmVersion: '1.0.1',
    description:
      'Beautiful startup dashboard for Node.js CLIs — version, environment, git branch, Node, memory, CPU, and uptime.',
    tags: ['cli', 'node', 'dx'],
    github: gh('node-cli-banner'),
    npm: npm('node-cli-banner'),
  },
  {
    id: 'postgres-toolkit',
    name: 'postgres-toolkit',
    group: 'library',
    status: 'live',
    language: 'JavaScript',
    npmVersion: '1.0.2',
    description:
      'PostgreSQL helper with connection pool, retry, transactions, health checks, query logging, and stats.',
    tags: ['postgres', 'database', 'node'],
    github: gh('postgres-toolkit'),
    npm: npm('postgres-toolkit'),
  },
  {
    id: 'react-email-viewer',
    name: 'react-email-viewer',
    group: 'library',
    status: 'live',
    language: 'TypeScript',
    npmVersion: '1.0.1',
    description:
      'React component for rendering Outlook (.msg) and RFC822 (.eml) emails from Base64, Blob, File, or ArrayBuffer.',
    tags: ['react', 'email', 'frontend'],
    github: gh('react-email-viewer'),
    npm: npm('react-email-viewer'),
  },
  {
    id: 'structured-logger-kit',
    name: 'structured-logger-kit',
    group: 'library',
    status: 'live',
    language: 'TypeScript',
    npmVersion: '1.0.1',
    description:
      'Structured logger for Node.js — JSON/pretty output, request IDs, OpenTelemetry hooks, and cloud logging formats.',
    tags: ['logging', 'opentelemetry', 'node'],
    github: gh('structured-logger-kit'),
    npm: npm('structured-logger-kit'),
  },
];

export const featuredLibraryIds = [
  'streamflow-ai',
  'deploy-doctor-cli',
  'mcp-server-plus',
  'express-api-starter',
  'rag-toolkit',
  'ai-telemetry-kit',
  'node-gen',
  'env-ok',
] as const;

export function libraryProducts(): Product[] {
  return productsCatalog.filter((p) => p.group === 'library');
}

export function featuredLibraryProducts(): Product[] {
  const byId = new Map(productsCatalog.map((p) => [p.id, p]));
  return featuredLibraryIds.map((id) => byId.get(id)).filter((p): p is Product => Boolean(p));
}

export function upcomingProducts(): Product[] {
  return productsCatalog.filter((p) => p.status === 'coming-soon' || p.status === 'in-progress');
}

export function productMatchesTab(product: Product, tab: ProductTab): boolean {
  if (tab === 'all') return true;
  if (tab === 'v-cards') return product.group === 'v-cards';
  if (tab === 'libraries') return product.group === 'library';
  return product.status === 'coming-soon' || product.status === 'in-progress';
}

export const productStatusLabel: Record<ProductStatus, string> = {
  live: 'Live',
  beta: 'Beta',
  'in-progress': 'In progress',
  'coming-soon': 'Coming soon',
};
