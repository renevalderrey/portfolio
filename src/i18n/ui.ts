import type { Lang } from './utils';

const es = {
  meta: {
    title: 'René Valderrey — Software & AI Engineer',
    description:
      'Software Engineer y AI Engineer en Córdoba, Argentina. Construyo productos con IA aplicada, los lanzo y los hago crecer: desarrollo, SEO, Google Ads y Meta Ads.',
  },
  nav: {
    projects: 'Proyectos',
    services: 'Servicios',
    experience: 'Experiencia',
    method: 'Método',
    contact: 'Contacto',
    skip: 'Saltar al contenido',
    menu: 'Menú',
    langLabel: 'Cambiar idioma',
  },
  hero: {
    status: 'Disponible para remoto o reubicación',
    role: 'Software Engineer · AI Engineer',
    titleA: 'Construyo tu producto,',
    titleB: 'lo lanzo y lo hago crecer.',
    lead:
      'Vengo de cinco años en ventas y tres en soporte y customer success. Por eso, antes de escribir código entiendo el problema del cliente, y después de desplegar mido si lo resolví.',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Hablemos',
    ctaCv: 'Descargar CV',
    location: 'Córdoba, Argentina',
  },
  stats: {
    title: 'Resultados, no promesas',
    lead: 'Números de mi trabajo en Pxsol y en Favalio.',
  },
  services: {
    eyebrow: 'Servicios',
    title: 'Todo para poner en marcha tu negocio',
    lead: 'Del primer boceto al primer cliente: un solo responsable para el producto, la IA y la salida al mercado.',
  },
  projects: {
    eyebrow: 'Proyectos',
    title: 'Lo que construí',
    lead: 'Productos en producción y trabajos para clientes reales.',
    featured: 'Proyecto principal',
    caseStudy: 'Ver caso completo',
    visit: 'Visitar sitio',
    soon: 'Próximamente',
    noLive: 'Sitio dado de baja',
  },
  experience: {
    eyebrow: 'Experiencia',
    title: 'De vender soluciones a construirlas',
    lead: 'Cada puesto me acercó un paso más al código, sin perder de vista al cliente.',
    education: 'Formación',
    current: 'Actualidad',
  },
  method: {
    eyebrow: 'Cómo trabajo',
    title: 'Agentes de IA, con método',
    lead: 'Trabajo con agentes de IA y Spec-Driven Development: la IA acelera y el método se encarga de que lo entregado sea correcto.',
  },
  stack: {
    eyebrow: 'Stack',
    title: 'Herramientas que uso a diario',
  },
  contact: {
    eyebrow: 'Contacto',
    title: '¿Tenés un proyecto en mente?',
    lead: 'Contame qué necesitás y te respondo lo antes posible.',
    name: 'Nombre',
    email: 'Email',
    emailHint: 'Para responderte. No lo comparto con nadie.',
    message: 'Mensaje',
    messageHint: 'Qué querés construir, plazos y cualquier dato útil.',
    honeypot: 'No completar este campo',
    send: 'Enviar mensaje',
    sending: 'Enviando…',
    ok: '¡Gracias! Recibí tu mensaje y te respondo pronto.',
    error: 'No se pudo enviar el mensaje. Probá de nuevo en unos minutos o escribime por LinkedIn.',
    invalid: 'Revisá los campos marcados.',
    errName: 'Escribí tu nombre (2 caracteres o más).',
    errEmail: 'Escribí un email válido, por ejemplo nombre@dominio.com.',
    errMessage: 'Contame un poco más (10 caracteres o más).',
    or: 'O encontrame en',
  },
  thanks: {
    title: 'Mensaje enviado',
    ok: 'Gracias por escribirme. Te respondo lo antes posible.',
    fail: 'No se pudo enviar el mensaje.',
    back: 'Volver al inicio',
  },
  project: {
    back: 'Todos los proyectos',
    role: 'Rol',
    period: 'Período',
    status: 'Estado',
    problem: 'El problema',
    built: 'Qué construí',
    decisions: 'Decisiones técnicas',
    stack: 'Stack',
    gallery: 'Capturas',
    next: '¿Querés algo así para tu negocio?',
  },
  footer: {
    built: 'Hecho con Astro y Tailwind. Diseñado y desarrollado por René.',
  },
};

type Dict = typeof es;

const en: Dict = {
  meta: {
    title: 'René Valderrey — Software & AI Engineer',
    description:
      'Software Engineer and AI Engineer based in Córdoba, Argentina. I build AI-powered products, launch them and help them grow: development, SEO, Google Ads and Meta Ads.',
  },
  nav: {
    projects: 'Projects',
    services: 'Services',
    experience: 'Experience',
    method: 'Method',
    contact: 'Contact',
    skip: 'Skip to content',
    menu: 'Menu',
    langLabel: 'Change language',
  },
  hero: {
    status: 'Open to remote work or relocation',
    role: 'Software Engineer · AI Engineer',
    titleA: 'I build your product,',
    titleB: 'launch it and make it grow.',
    lead:
      'I spent five years in sales and three in support and customer success. That is why I understand the customer’s problem before writing code, and after shipping I measure whether I solved it.',
    ctaProjects: 'See projects',
    ctaContact: "Let's talk",
    ctaCv: 'Download CV',
    location: 'Córdoba, Argentina',
  },
  stats: {
    title: 'Results, not promises',
    lead: 'Numbers from my work at Pxsol and on Favalio.',
  },
  services: {
    eyebrow: 'Services',
    title: 'Everything to get your business going',
    lead: 'From the first sketch to the first customer: one person accountable for the product, the AI and the go-to-market.',
  },
  projects: {
    eyebrow: 'Projects',
    title: 'What I have built',
    lead: 'Products in production and work for real clients.',
    featured: 'Featured project',
    caseStudy: 'Read the case study',
    visit: 'Visit site',
    soon: 'Coming soon',
    noLive: 'Site taken down',
  },
  experience: {
    eyebrow: 'Experience',
    title: 'From selling solutions to building them',
    lead: 'Every role brought me one step closer to code, without losing sight of the customer.',
    education: 'Education',
    current: 'Present',
  },
  method: {
    eyebrow: 'How I work',
    title: 'AI agents, with a method',
    lead: 'I work with AI agents and Spec-Driven Development: AI brings the speed, the method makes sure what ships is correct.',
  },
  stack: {
    eyebrow: 'Stack',
    title: 'Tools I use every day',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Have a project in mind?',
    lead: 'Tell me what you need and I will get back to you as soon as I can.',
    name: 'Name',
    email: 'Email',
    emailHint: 'So I can reply. I never share it.',
    message: 'Message',
    messageHint: 'What you want to build, timelines and anything useful.',
    honeypot: 'Leave this field empty',
    send: 'Send message',
    sending: 'Sending…',
    ok: 'Thanks! I got your message and will reply soon.',
    error: 'The message could not be sent. Please try again in a few minutes or reach me on LinkedIn.',
    invalid: 'Please check the highlighted fields.',
    errName: 'Enter your name (2 characters or more).',
    errEmail: 'Enter a valid email, for example name@domain.com.',
    errMessage: 'Tell me a bit more (10 characters or more).',
    or: 'Or find me on',
  },
  thanks: {
    title: 'Message sent',
    ok: 'Thanks for reaching out. I will reply as soon as I can.',
    fail: 'The message could not be sent.',
    back: 'Back to home',
  },
  project: {
    back: 'All projects',
    role: 'Role',
    period: 'Period',
    status: 'Status',
    problem: 'The problem',
    built: 'What I built',
    decisions: 'Technical decisions',
    stack: 'Stack',
    gallery: 'Screenshots',
    next: 'Want something like this for your business?',
  },
  footer: {
    built: 'Built with Astro and Tailwind. Designed and developed by René.',
  },
};

export const ui: Record<Lang, Dict> = { es, en };

export function useT(lang: Lang) {
  return ui[lang];
}
