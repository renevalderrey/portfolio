import type { ImageMetadata } from 'astro';
import type { L } from '../i18n/utils';

import pdv from '../assets/favalio/punto-de-venta-oscuro.webp';
import inventario from '../assets/favalio/inventario-oscuro.webp';
import equilibrio from '../assets/favalio/punto-de-equilibrio-oscuro.webp';
import ventas from '../assets/favalio/ventas-oscuro.webp';
import proveedores from '../assets/favalio/proveedores-oscuro.webp';
import ordenes from '../assets/favalio/ordenes-de-compra-oscuro.webp';
import catalogos from '../assets/favalio/catalogos.webp';
import faltantes from '../assets/favalio/faltantes.webp';
import leovale from '../assets/proyectos/leovalestore.webp';
import cer from '../assets/proyectos/ceralternativas.webp';

export interface Shot {
  src: ImageMetadata;
  alt: L;
}

export interface Project {
  slug: string;
  name: string;
  tagline: L;
  summary: L;
  role: L;
  period: L;
  status: L;
  tags: string[];
  url?: string;
  cover?: Shot;
  /** Solo los proyectos con caso de estudio tienen página propia. */
  caseStudy?: {
    problem: L;
    built: L<string[]>;
    decisions: L<string[]>;
    gallery: Shot[];
  };
  soon?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'favalio',
    name: 'Favalio',
    tagline: {
      es: 'SaaS de gestión comercial y facturación electrónica',
      en: 'Business management and e-invoicing SaaS',
    },
    summary: {
      es: 'Punto de venta, inventario multisucursal, compras y facturación electrónica ante AFIP/ARCA en una sola plataforma multiempresa. Lo diseñé y construí solo, y hoy opera con un cliente pago.',
      en: 'Point of sale, multi-branch inventory, purchasing and AFIP/ARCA e-invoicing in a single multi-tenant platform. I designed and built it alone, and it now runs for a paying customer.',
    },
    role: { es: 'Fundador y único desarrollador', en: 'Founder and sole developer' },
    period: { es: 'Mayo 2026 — hoy', en: 'May 2026 — present' },
    status: { es: 'En producción · cliente pago', en: 'In production · paying customer' },
    tags: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Tailwind', 'Docker', 'AFIP/ARCA', 'Mercado Pago'],
    url: 'https://www.favalio.com',
    cover: {
      src: pdv,
      alt: { es: 'Punto de venta de Favalio en modo oscuro', en: 'Favalio point of sale in dark mode' },
    },
    caseStudy: {
      problem: {
        es: 'Un comercio con varias sucursales necesitaba dejar su sistema anterior y manejar desde un solo lugar las ventas, el stock de cada sucursal, las compras a proveedores y la facturación electrónica, sin perder los datos que ya tenía cargados.',
        en: 'A multi-branch retailer needed to leave its old system and run sales, per-branch stock, supplier purchasing and electronic invoicing from a single place, without losing the data it already had.',
      },
      built: {
        es: [
          'El producto completo: API, panel web, tienda online y landing. Más de 70 modelos de datos y 32 funcionalidades especificadas.',
          'Punto de venta, inventario multisucursal, compras con cuenta corriente de proveedores y un tablero de indicadores con punto de equilibrio.',
          'Facturación electrónica con los web services de AFIP/ARCA (WSAA y WSFE), cobros con Mercado Pago, sincronización con Tiendanube y una API de catálogo para terceros.',
          'La migración de los datos del sistema anterior del primer cliente, que hoy opera y paga por la plataforma. También atiendo su soporte.',
        ],
        en: [
          'The whole product: API, web dashboard, online store and landing page. Over 70 data models and 32 specified features.',
          'Point of sale, multi-branch inventory, purchasing with supplier current accounts and a KPI dashboard with break-even analysis.',
          'E-invoicing through the AFIP/ARCA web services (WSAA and WSFE), Mercado Pago payments, Tiendanube sync and a catalog API for third parties.',
          'The data migration from the first customer’s old system. They now run on the platform and pay for it, and I handle their support.',
        ],
      },
      decisions: {
        es: [
          'Aislamiento entre empresas garantizado con tests de guardia: la suite (unos 490 archivos) falla si una consulta no filtra por empresa.',
          'Cada funcionalidad pasa por Spec-Driven Development: spec, plan, tareas, implementación con agentes de IA y verificación independiente contra la spec.',
          'Infraestructura propia en un VPS: Docker, Caddy, despliegue continuo, respaldos por empresa y runbooks para incidentes.',
          'Auditorías de seguridad, de facturación y de lógica financiera antes de cada etapa importante.',
        ],
        en: [
          'Tenant isolation enforced by guard tests: the suite (about 490 files) fails if any query does not filter by company.',
          'Every feature goes through Spec-Driven Development: spec, plan, tasks, implementation with AI agents and independent verification against the spec.',
          'Self-managed infrastructure on a VPS: Docker, Caddy, continuous deployment, per-company backups and incident runbooks.',
          'Security, invoicing and financial-logic audits before every major milestone.',
        ],
      },
      gallery: [
        { src: pdv, alt: { es: 'Punto de venta', en: 'Point of sale' } },
        { src: inventario, alt: { es: 'Inventario multisucursal', en: 'Multi-branch inventory' } },
        { src: equilibrio, alt: { es: 'Tablero con punto de equilibrio', en: 'Break-even dashboard' } },
        { src: ventas, alt: { es: 'Listado de ventas', en: 'Sales list' } },
        { src: proveedores, alt: { es: 'Cuenta corriente de proveedores', en: 'Supplier accounts' } },
        { src: ordenes, alt: { es: 'Órdenes de compra', en: 'Purchase orders' } },
        { src: catalogos, alt: { es: 'Catálogos en modo claro', en: 'Catalogs in light mode' } },
        { src: faltantes, alt: { es: 'Faltantes de stock en modo claro', en: 'Stock shortages in light mode' } },
      ],
    },
  },
  {
    slug: 'leovalestore',
    name: 'Leovalestore',
    tagline: { es: 'Sitio para un estudio de manicura', en: 'Website for a nail studio' },
    summary: {
      es: 'Landing elegante para un estudio de manicura: servicios con precios, galería de trabajos y reserva de turnos. Construida con Next.js y desplegada como sitio estático.',
      en: 'An elegant landing page for a nail studio: priced services, a portfolio gallery and appointment booking. Built with Next.js and deployed as a static site.',
    },
    role: { es: 'Diseño y desarrollo', en: 'Design and development' },
    period: { es: '2026', en: '2026' },
    status: { es: 'Online', en: 'Live' },
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'GitHub Pages'],
    url: 'https://renevalderrey.github.io/leovalestore/',
    cover: {
      src: leovale,
      alt: { es: 'Portada del sitio del estudio de manicura', en: 'Nail studio website hero' },
    },
  },
  {
    slug: 'ceralternativas',
    name: 'CER Alternativas',
    tagline: { es: 'Sitio para una consultora de colocación laboral', en: 'Website for a job placement agency' },
    summary: {
      es: 'Sitio para una consultora que conecta candidatos con empleos: buscador de búsquedas activas, vacantes en el exterior, programas y contacto, con modo oscuro.',
      en: 'Website for an agency that connects candidates with jobs: active openings search, jobs abroad, programs and contact, with dark mode.',
    },
    role: { es: 'Diseño y desarrollo', en: 'Design and development' },
    period: { es: 'Cliente', en: 'Client' },
    status: { es: 'Online', en: 'Live' },
    tags: ['React', 'Vite', 'Bootstrap'],
    url: 'https://ceralternativas.com/',
    cover: {
      src: cer,
      alt: { es: 'Portada del sitio de CER Alternativas', en: 'CER Alternativas website hero' },
    },
  },
  {
    slug: 'a-solas',
    name: 'A Solas',
    tagline: { es: 'Tienda online para un cliente', en: 'Online store for a client' },
    summary: {
      es: 'Mi primer trabajo para un cliente real: tienda con catálogo, panel de administración con carga de imágenes y cobro con Mercado Pago. Lo hice antes de trabajar con IA; el cliente dio de baja el dominio.',
      en: 'My first job for a real client: a store with a catalog, an admin panel with image uploads and Mercado Pago checkout. Built before I worked with AI; the client later dropped the domain.',
    },
    role: { es: 'Full stack', en: 'Full stack' },
    period: { es: '2023', en: '2023' },
    status: { es: 'Sitio dado de baja', en: 'Site taken down' },
    tags: ['React', 'Redux', 'Express', 'MongoDB', 'Cloudinary', 'Mercado Pago'],
  },
  {
    slug: 'fideliapp',
    name: 'Fideliapp',
    tagline: { es: 'Programa de fidelización para comercios', en: 'Loyalty program for retailers' },
    summary: {
      es: 'Un nuevo producto en camino.',
      en: 'A new product on the way.',
    },
    role: { es: 'Fundador', en: 'Founder' },
    period: { es: 'Próximamente', en: 'Coming soon' },
    status: { es: 'En diseño', en: 'In design' },
    tags: [],
    soon: true,
  },
];

export const featured = projects[0];
