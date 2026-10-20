import type { L } from '../i18n/utils';

export interface Role {
  company: string;
  title: L;
  period: L;
  context?: L;
  current?: boolean;
  highlights: L<string[]>;
  stack?: string[];
}

export const experience: Role[] = [
  {
    company: 'Pxsol',
    title: { es: 'Software Engineer · AI Engineer', en: 'Software Engineer · AI Engineer' },
    period: { es: 'Jul 2026 — hoy', en: 'Jul 2026 — present' },
    context: {
      es: 'Remoto · SaaS B2B para agencias de viajes',
      en: 'Remote · B2B SaaS for travel agencies',
    },
    current: true,
    highlights: {
      es: [
        'Transformé un módulo básico de contactos en un CRM omnicanal: ficha 360, casilla de correo propia (IMAP), email marketing con métricas y WhatsApp con la API de Meta.',
        'Construí dos asistentes de IA, uno con la API de Claude y otro con DeepSeek, y bajé a centavos las conversaciones caras con prompt caching, confirmación por lotes y topes por cliente.',
        'Implementé RBAC en pantallas, rutas y endpoints, y lideré una auditoría de seguridad que cerró endpoints expuestos.',
        'Llevé al equipo a trabajar con Spec-Driven Development y agentes de IA en paralelo.',
      ],
      en: [
        'Turned a basic contacts module into an omnichannel CRM: 360° profile, a built-in mailbox (IMAP), email marketing with metrics and WhatsApp through the Meta API.',
        'Built two AI assistants, one on the Claude API and one on DeepSeek, and cut runaway conversations down to cents with prompt caching, batch confirmation and per-customer caps.',
        'Implemented RBAC across screens, routes and endpoints, and led a security audit that closed exposed endpoints.',
        'Moved the team to Spec-Driven Development with AI agents working in parallel.',
      ],
    },
    stack: ['TypeScript', 'Next.js 15', 'React 19', 'Prisma', 'PostgreSQL', 'BullMQ', 'Railway'],
  },
  {
    company: 'Pxsol',
    title: { es: 'QA Automation Engineer', en: 'QA Automation Engineer' },
    period: { es: 'Abr 2025 — Jul 2026', en: 'Apr 2025 — Jul 2026' },
    context: { es: 'Sistemas de gestión hotelera (PMS, ERP y web)', en: 'Hotel management systems (PMS, ERP and web)' },
    highlights: {
      es: [
        'Automaticé pruebas smoke, funcionales y de regresión con Playwright, integradas al CI con GitHub Actions.',
        'Creé una herramienta interna de QA asistida por IA.',
        'Contribuí a bajar los bugs reportados por clientes de 555 a 55 (−90 %).',
      ],
      en: [
        'Automated smoke, functional and regression tests with Playwright, wired into CI with GitHub Actions.',
        'Built an internal AI-assisted QA tool.',
        'Helped cut customer-reported bugs from 555 to 55 (−90%).',
      ],
    },
    stack: ['Playwright', 'GitHub Actions'],
  },
  {
    company: 'Pxsol',
    title: { es: 'Customer Success Manager', en: 'Customer Success Manager' },
    period: { es: 'Oct 2023 — Abr 2025', en: 'Oct 2023 — Apr 2025' },
    context: { es: 'Latinoamérica', en: 'Latin America' },
    highlights: {
      es: [
        'Lideré el onboarding y la implementación de más de 100 hoteles: PMS, ERP, motor de reservas, Channel Manager e integraciones con OTAs.',
        'Gestioné Colombia y Perú, y amplié la cartera colombiana de 40 a más de 80 hoteles.',
      ],
      en: [
        'Led onboarding and implementation for 100+ hotels: PMS, ERP, booking engine, Channel Manager and OTA integrations.',
        'Managed Colombia and Peru, and grew the Colombian portfolio from 40 to 80+ hotels.',
      ],
    },
  },
  {
    company: 'Pxsol',
    title: { es: 'Analista de Soporte de Software', en: 'Software Support Analyst' },
    period: { es: 'Mar 2023 — Oct 2023', en: 'Mar 2023 — Oct 2023' },
    highlights: {
      es: [
        'Resolví entre 100 y 120 tickets por mes de PMS, ERP, Channel Manager y sitios web.',
        'Personalicé sitios de clientes con HTML, CSS y JavaScript.',
      ],
      en: [
        'Solved 100–120 tickets a month across PMS, ERP, Channel Manager and websites.',
        'Customized client websites with HTML, CSS and JavaScript.',
      ],
    },
  },
  {
    company: 'Evoltis',
    title: { es: 'Back Office y Ventas', en: 'Back Office & Sales' },
    period: { es: 'Nov 2020 — Jun 2023', en: 'Nov 2020 — Jun 2023' },
    context: { es: 'Córdoba', en: 'Córdoba' },
    highlights: {
      es: [
        'Coordiné el seguimiento comercial de un equipo de 8 vendedores, del pedido a la entrega.',
        'Como vendedor, superé los objetivos mensuales.',
      ],
      en: [
        'Coordinated sales follow-up for a team of 8 sellers, from order to delivery.',
        'As a sales rep, beat monthly targets.',
      ],
    },
  },
  {
    company: 'Voicenter S.A.',
    title: { es: 'Vendedor', en: 'Sales Representative' },
    period: { es: 'May 2018 — Ene 2020', en: 'May 2018 — Jan 2020' },
    context: { es: 'Córdoba', en: 'Córdoba' },
    highlights: {
      es: ['Superé de forma sostenida los objetivos mensuales de ventas.'],
      en: ['Consistently beat monthly sales targets.'],
    },
  },
];

export const education: { title: L; place: string; period: L }[] = [
  {
    title: { es: 'Ingeniería en Sistemas de Información', en: 'Information Systems Engineering' },
    place: 'UTN',
    period: { es: 'En curso, desde 2026', en: 'In progress, since 2026' },
  },
  {
    title: { es: 'Full Stack Web Developer', en: 'Full Stack Web Developer' },
    place: 'Henry',
    period: { es: 'Ago 2022 — Ene 2023', en: 'Aug 2022 — Jan 2023' },
  },
];
