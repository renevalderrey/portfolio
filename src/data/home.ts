import type { L } from '../i18n/utils';

export interface Stat {
  value: string;
  label: L;
  detail: L;
  span?: 'wide';
}

export const stats: Stat[] = [
  {
    value: '−90 %',
    label: { es: 'menos errores reportados por clientes', en: 'fewer customer-reported bugs' },
    detail: {
      es: 'De 555 a 55 gracias a pruebas automáticas antes de cada entrega.',
      en: 'From 555 to 55 thanks to automated tests before every release.',
    },
    span: 'wide',
  },
  {
    value: '100+',
    label: { es: 'hoteles implementados', en: 'hotels onboarded' },
    detail: { es: 'Sistemas, motores de reserva e integraciones.', en: 'Systems, booking engines and integrations.' },
  },
  {
    value: '2×',
    label: { es: 'cartera de clientes en Colombia', en: 'client portfolio in Colombia' },
    detail: { es: 'De 40 a más de 80 hoteles.', en: 'From 40 to 80+ hotels.' },
  },
  {
    value: '1',
    label: { es: 'SaaS propio en producción', en: 'own SaaS in production' },
    detail: { es: 'Favalio, con un cliente que paga por usarlo.', en: 'Favalio, with a customer paying to use it.' },
  },
  {
    value: '70+',
    label: { es: 'modelos de datos', en: 'data models' },
    detail: { es: 'En un sistema diseñado por una sola persona.', en: 'In a system designed by one person.' },
  },
  {
    value: '¢',
    label: { es: 'por conversación con IA', en: 'per AI conversation' },
    detail: {
      es: 'Bajé a centavos el costo de un asistente con prompt caching y topes por cliente.',
      en: 'I cut an assistant’s cost to cents with prompt caching and per-customer caps.',
    },
    span: 'wide',
  },
];

export type IconName = 'code' | 'globe' | 'search' | 'target' | 'spark' | 'shield';

export interface Service {
  icon: IconName;
  title: L;
  body: L;
  items: L<string[]>;
}

export const services: Service[] = [
  {
    icon: 'code',
    title: { es: 'Software a medida', en: 'Custom software' },
    body: {
      es: 'Sistemas de gestión, puntos de venta, paneles y apps web hechos para cómo trabaja tu negocio, no al revés.',
      en: 'Management systems, point of sale, dashboards and web apps built around how your business works, not the other way round.',
    },
    items: {
      es: ['Facturación electrónica AFIP/ARCA', 'Stock y ventas', 'Mercado Pago'],
      en: ['AFIP/ARCA e-invoicing', 'Stock and sales', 'Mercado Pago'],
    },
  },
  {
    icon: 'globe',
    title: { es: 'Sitios web y tiendas online', en: 'Websites and online stores' },
    body: {
      es: 'Webs rápidas, que se ven perfectas en el celular y están pensadas para que el visitante te consulte o te compre.',
      en: 'Fast websites that look great on mobile and are designed to turn visitors into inquiries and sales.',
    },
    items: {
      es: ['Landing pages', 'Tiendanube', 'Formularios y WhatsApp'],
      en: ['Landing pages', 'Tiendanube', 'Forms and WhatsApp'],
    },
  },
  {
    icon: 'search',
    title: { es: 'SEO y palabras clave', en: 'SEO and keywords' },
    body: {
      es: 'Investigo cómo te buscan tus clientes y optimizo tu sitio para aparecer en Google cuando te necesitan.',
      en: 'I research how your customers search and optimize your site to show up on Google when they need you.',
    },
    items: {
      es: ['Investigación de palabras clave', 'SEO técnico', 'Contenido que posiciona'],
      en: ['Keyword research', 'Technical SEO', 'Content that ranks'],
    },
  },
  {
    icon: 'target',
    title: { es: 'Google Ads y Meta Ads', en: 'Google Ads and Meta Ads' },
    body: {
      es: 'Campañas en Google, Instagram y Facebook con seguimiento de conversiones, para que cada peso invertido se pueda medir.',
      en: 'Campaigns on Google, Instagram and Facebook with conversion tracking, so every dollar spent can be measured.',
    },
    items: {
      es: ['Configuración y segmentación', 'Seguimiento de conversiones', 'Optimización continua'],
      en: ['Setup and targeting', 'Conversion tracking', 'Ongoing optimization'],
    },
  },
  {
    icon: 'spark',
    title: { es: 'IA para tu negocio', en: 'AI for your business' },
    body: {
      es: 'Asistentes que responden a tus clientes con tu información y automatizaciones que te ahorran horas, con costos bajo control.',
      en: 'Assistants that answer your customers with your own information, and automations that save you hours, with costs under control.',
    },
    items: {
      es: ['Atención por WhatsApp', 'Base de conocimiento', 'Automatizaciones'],
      en: ['WhatsApp support', 'Knowledge base', 'Automations'],
    },
  },
  {
    icon: 'shield',
    title: { es: 'Soporte y mantenimiento', en: 'Support and maintenance' },
    body: {
      es: 'Tu sistema o tu web siempre funcionando: actualizaciones, respaldos, seguridad y mejoras cuando las necesites.',
      en: 'Your system or website always running: updates, backups, security and improvements whenever you need them.',
    },
    items: {
      es: ['Respaldos', 'Seguridad', 'Mejoras continuas'],
      en: ['Backups', 'Security', 'Ongoing improvements'],
    },
  },
];

export const process: { step: string; title: L; body: L }[] = [
  {
    step: '01',
    title: { es: 'Charlamos', en: 'We talk' },
    body: {
      es: 'Me contás tu negocio y qué querés lograr. Defino con vos qué es éxito y cómo lo vamos a medir.',
      en: 'You tell me about your business and your goals. Together we define what success looks like and how we will measure it.',
    },
  },
  {
    step: '02',
    title: { es: 'Propuesta clara', en: 'Clear proposal' },
    body: {
      es: 'Te paso qué voy a hacer, en cuánto tiempo y cuánto cuesta. Sin letra chica.',
      en: 'You get what I will do, how long it takes and what it costs. No fine print.',
    },
  },
  {
    step: '03',
    title: { es: 'Construyo con avances', en: 'I build, you see progress' },
    body: {
      es: 'Ves el avance a medida que se construye y lo ajustamos antes de salir.',
      en: 'You see progress as it gets built and we adjust before launch.',
    },
  },
  {
    step: '04',
    title: { es: 'Lanzamos y crecemos', en: 'Launch and grow' },
    body: {
      es: 'Publicamos, lo posiciono en Google, activamos campañas y medimos resultados para seguir mejorando.',
      en: 'We go live, I get it ranking on Google, we launch campaigns and measure results to keep improving.',
    },
  },
];

export const stack: { group: L; items: string[] }[] = [
  {
    group: { es: 'Desarrollo', en: 'Development' },
    items: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind', 'Astro'],
  },
  {
    group: { es: 'Marketing y crecimiento', en: 'Marketing and growth' },
    items: ['SEO', 'Google Ads', 'Meta Ads', 'HubSpot'],
  },
  {
    group: { es: 'IA aplicada', en: 'Applied AI' },
    items: ['Claude API', 'Claude Code', 'DeepSeek', 'RAG', 'MCP'],
  },
  {
    group: { es: 'Integraciones', en: 'Integrations' },
    items: ['AFIP/ARCA', 'Mercado Pago', 'Tiendanube', 'WhatsApp / Meta API', 'Auth0'],
  },
  {
    group: { es: 'Calidad y despliegue', en: 'Quality and delivery' },
    items: ['Playwright', 'Jest', 'Vitest', 'GitHub Actions', 'Docker', 'Vercel', 'Railway'],
  },
];
