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
import fitnetDesktop from '../assets/proyectos/fitnet-escritorio.webp';
import fitnetMobile from '../assets/proyectos/fitnet-celular.webp';

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
  /** Qué hice en el proyecto, en lenguaje de cliente. */
  services?: L<string[]>;
  /** Links extra además del sitio (por ejemplo, Instagram). */
  links?: { label: L; url: string; icon?: 'instagram' | 'external' }[];
  /** Captura de celular para superponer en la tarjeta destacada. */
  mobile?: Shot;
  /** Se muestra como tarjeta grande. */
  featured?: boolean;
  /** Texto del botón principal cuando no hay caso de estudio. */
  cta?: L;
}

export const projects: Project[] = [
  {
    slug: 'favalio',
    name: 'Favalio',
    featured: true,
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
    slug: 'fitnet',
    name: 'FitNet × Comprafit',
    featured: true,
    tagline: {
      es: 'Catálogo online con precios exclusivos para socios',
      en: 'Online catalog with members-only prices',
    },
    summary: {
      es: 'Comprafit, una tienda de suplementos que gestiona todo con Favalio, se asoció con el gimnasio FitNet: sus socios entran a un catálogo propio con descuento, eligen su sucursal, ven el stock real de ese local y piden para retirar en el gimnasio.',
      en: 'Comprafit, a supplement store that runs on Favalio, partnered with FitNet gym: members get their own discounted catalog, pick a branch, see that store’s real stock and order for pickup at the gym.',
    },
    role: { es: 'Producto y desarrollo, sobre Favalio', en: 'Product and development, on Favalio' },
    period: { es: '2026', en: '2026' },
    status: { es: 'Online', en: 'Live' },
    tags: ['Favalio', 'React', 'Catálogo online', 'Stock en tiempo real'],
    services: {
      es: ['Catálogo con la marca del cliente', 'Precios de socio', 'Stock por sucursal', 'Retiro en el gimnasio'],
      en: ['Catalog with the client’s branding', 'Member pricing', 'Per-branch stock', 'Pickup at the gym'],
    },
    url: 'https://tienda.favalio.com/c/fitnet',
    cta: { es: 'Ver el catálogo', en: 'See the catalog' },
    cover: {
      src: fitnetDesktop,
      alt: { es: 'Catálogo de FitNet con suplementos y precios de socio', en: 'FitNet catalog with supplements and member prices' },
    },
    mobile: {
      src: fitnetMobile,
      alt: { es: 'El mismo catálogo en el celular', en: 'The same catalog on mobile' },
    },
  },
  {
    slug: 'leovalestore',
    name: 'Leovalestore',
    tagline: { es: 'Web y campañas en Meta Ads para un estudio de manicura', en: 'Website and Meta Ads campaigns for a nail studio' },
    summary: {
      es: 'Diseñé y desarrollé su sitio, con servicios, precios, galería y reserva de turnos, y llevo sus campañas en Instagram y Facebook para atraer nuevas clientas.',
      en: 'I designed and built the website, with services, prices, a gallery and booking, and I run their Instagram and Facebook campaigns to bring in new clients.',
    },
    role: { es: 'Diseño, desarrollo y campañas', en: 'Design, development and ads' },
    period: { es: '2026', en: '2026' },
    status: { es: 'Online', en: 'Live' },
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Meta Ads'],
    services: {
      es: ['Diseño web', 'Desarrollo', 'Campañas en Meta Ads'],
      en: ['Web design', 'Development', 'Meta Ads campaigns'],
    },
    url: 'https://renevalderrey.github.io/leovalestore/',
    links: [{ label: { es: '@leovalestore', en: '@leovalestore' }, url: 'https://www.instagram.com/leovalestore/', icon: 'instagram' }],
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
    services: {
      es: ['Diseño web', 'Desarrollo'],
      en: ['Web design', 'Development'],
    },
    url: 'https://ceralternativas.com/',
    cover: {
      src: cer,
      alt: { es: 'Portada del sitio de CER Alternativas', en: 'CER Alternativas website hero' },
    },
  },
];

export const featured = projects[0];
export const highlighted = projects.filter((p) => p.featured);
export const others = projects.filter((p) => !p.featured);
