// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// Dominio provisorio hasta comprar el propio: cambiar acá y en Vercel.
const SITE = 'https://renevalderrey.vercel.app';

export default defineConfig({
  site: SITE,
  adapter: vercel(),
  integrations: [
    sitemap({
      filter: (page) => !/\/(gracias|thanks)\/?$/.test(page),
      i18n: { defaultLocale: 'es', locales: { es: 'es-AR', en: 'en' } },
    }),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_TO: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_FROM: envField.string({
        context: 'server',
        access: 'secret',
        default: 'Portfolio <onboarding@resend.dev>',
      }),
    },
  },
  vite: { plugins: [tailwindcss()] },
});
