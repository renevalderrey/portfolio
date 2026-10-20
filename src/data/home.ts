import type { L } from '../i18n/utils';

export interface Stat {
  value: string;
  label: L;
  detail: L;
  span?: 'wide' | 'tall';
}

export const stats: Stat[] = [
  {
    value: '−90 %',
    label: { es: 'bugs reportados por clientes', en: 'customer-reported bugs' },
    detail: {
      es: 'De 555 a 55 con pruebas automatizadas en el CI.',
      en: 'From 555 to 55 with automated tests in CI.',
    },
    span: 'wide',
  },
  {
    value: '100+',
    label: { es: 'hoteles implementados', en: 'hotels onboarded' },
    detail: { es: 'PMS, ERP, motor de reservas y OTAs.', en: 'PMS, ERP, booking engine and OTAs.' },
  },
  {
    value: '2×',
    label: { es: 'cartera de Colombia', en: 'Colombian portfolio' },
    detail: { es: 'De 40 a más de 80 hoteles.', en: 'From 40 to 80+ hotels.' },
  },
  {
    value: '~490',
    label: { es: 'archivos de test en Favalio', en: 'test files in Favalio' },
    detail: {
      es: 'Incluyen guardias que fallan si una consulta no filtra por empresa.',
      en: 'Including guards that fail if a query does not filter by company.',
    },
  },
  {
    value: '70+',
    label: { es: 'modelos de datos', en: 'data models' },
    detail: { es: 'Diseñados y mantenidos por una sola persona.', en: 'Designed and maintained by one person.' },
  },
  {
    value: '¢',
    label: { es: 'costo por conversación de IA', en: 'cost per AI conversation' },
    detail: {
      es: 'Prompt caching, lotes y topes por cliente bajaron las conversaciones caras a centavos.',
      en: 'Prompt caching, batching and per-customer caps cut expensive chats down to cents.',
    },
    span: 'wide',
  },
];

export interface Service {
  icon: 'code' | 'spark' | 'shield' | 'rocket';
  title: L;
  body: L;
  items: L<string[]>;
}

export const services: Service[] = [
  {
    icon: 'code',
    title: { es: 'Producto a medida', en: 'Custom product' },
    body: {
      es: 'SaaS, paneles de gestión, tiendas online y APIs, pensados para durar y para que otra persona pueda mantenerlos.',
      en: 'SaaS, admin dashboards, online stores and APIs, built to last and easy for someone else to maintain.',
    },
    items: {
      es: ['Facturación AFIP/ARCA', 'Mercado Pago y Tiendanube', 'WhatsApp e email'],
      en: ['AFIP/ARCA e-invoicing', 'Mercado Pago and Tiendanube', 'WhatsApp and email'],
    },
  },
  {
    icon: 'spark',
    title: { es: 'IA aplicada', en: 'Applied AI' },
    body: {
      es: 'Asistentes y automatizaciones con Claude o DeepSeek que responden con tu información, con supervisión humana y costos bajo control.',
      en: 'Assistants and automations on Claude or DeepSeek that answer from your own data, with human oversight and controlled costs.',
    },
    items: {
      es: ['RAG y base de conocimiento', 'Agentes y MCP', 'Optimización de costos'],
      en: ['RAG and knowledge bases', 'Agents and MCP', 'Cost optimization'],
    },
  },
  {
    icon: 'shield',
    title: { es: 'Calidad y despliegue', en: 'Quality and delivery' },
    body: {
      es: 'Pruebas automatizadas, CI/CD, seguridad e infraestructura, para que lo que funciona hoy siga funcionando mañana.',
      en: 'Automated testing, CI/CD, security and infrastructure, so what works today keeps working tomorrow.',
    },
    items: {
      es: ['Playwright, Jest y Vitest', 'RBAC y auditorías', 'Docker, VPS y Railway'],
      en: ['Playwright, Jest and Vitest', 'RBAC and audits', 'Docker, VPS and Railway'],
    },
  },
  {
    icon: 'rocket',
    title: { es: 'Lanzamiento y crecimiento', en: 'Launch and growth' },
    body: {
      es: 'Un buen producto necesita clientes. Lo posiciono en buscadores y armo campañas pagas que miden lo que importa: consultas y ventas.',
      en: 'A great product needs customers. I get it found on search engines and run paid campaigns that measure what matters: leads and sales.',
    },
    items: {
      es: ['SEO técnico y de contenido', 'Google Ads', 'Meta Ads'],
      en: ['Technical and content SEO', 'Google Ads', 'Meta Ads'],
    },
  },
];

export const method: { step: string; title: L; body: L }[] = [
  {
    step: '01',
    title: { es: 'Entender', en: 'Understand' },
    body: {
      es: 'Relevo el problema con quien lo vive. Defino qué es éxito y cómo se va a medir.',
      en: 'I map the problem with the people who live it, and define what success is and how it will be measured.',
    },
  },
  {
    step: '02',
    title: { es: 'Especificar', en: 'Specify' },
    body: {
      es: 'Escribo una spec con criterios de aceptación verificables antes de tocar una línea de código.',
      en: 'I write a spec with verifiable acceptance criteria before touching a line of code.',
    },
  },
  {
    step: '03',
    title: { es: 'Construir con agentes', en: 'Build with agents' },
    body: {
      es: 'Agentes de IA en paralelo implementan plan y tareas, con hooks de calidad y revisión humana en cada paso.',
      en: 'AI agents work in parallel on the plan and tasks, with quality hooks and human review at every step.',
    },
  },
  {
    step: '04',
    title: { es: 'Verificar y medir', en: 'Verify and measure' },
    body: {
      es: 'Una verificación independiente contrasta el resultado con la spec. Después del despliegue, mido si resolvió el problema.',
      en: 'An independent check compares the result with the spec. After shipping, I measure whether it solved the problem.',
    },
  },
];

export const stack: { group: L; items: string[] }[] = [
  {
    group: { es: 'Desarrollo', en: 'Development' },
    items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Sequelize', 'BullMQ', 'Tailwind', 'Astro', 'Vite', 'Turborepo'],
  },
  {
    group: { es: 'IA aplicada', en: 'Applied AI' },
    items: ['Claude API', 'Claude Code', 'DeepSeek', 'RAG', 'MCP', 'Prompt caching', 'Human-in-the-loop', 'Red-teaming'],
  },
  {
    group: { es: 'Calidad y despliegue', en: 'Quality and delivery' },
    items: ['Playwright', 'Jest', 'Vitest', 'GitHub Actions', 'Docker', 'Caddy', 'Railway', 'Vercel'],
  },
  {
    group: { es: 'Integraciones', en: 'Integrations' },
    items: ['AFIP/ARCA (WSAA, WSFE)', 'Mercado Pago', 'Tiendanube', 'WhatsApp / Meta API', 'IMAP', 'Amazon SES', 'Auth0'],
  },
  {
    group: { es: 'Marketing y crecimiento', en: 'Marketing and growth' },
    items: ['SEO', 'Google Ads', 'Meta Ads', 'HubSpot'],
  },
];
