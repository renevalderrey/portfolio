# Portfolio — René Valderrey

Sitio personal bilingüe (ES/EN): proyectos, experiencia, servicios y formulario de contacto.

**Stack:** Astro 5 · Tailwind v4 · TypeScript · Astro Actions + Resend · Vercel

## Desarrollo

```sh
npm install
cp .env.example .env   # completar RESEND_API_KEY y CONTACT_TO
npm run dev            # http://localhost:4321
npm run check          # tipos
npm run build
```

## Dónde está cada cosa

| Qué | Dónde |
|---|---|
| Textos de la interfaz (ES y EN) | `src/i18n/ui.ts` |
| Proyectos y casos de estudio | `src/data/projects.ts` |
| Experiencia y formación | `src/data/experience.ts` |
| Métricas, servicios, método y stack | `src/data/home.ts` |
| Colores, tipografía y efectos | `src/styles/global.css` (tokens en `@theme`) |
| Formulario de contacto (servidor) | `src/actions/index.ts` |
| Links de LinkedIn, GitHub y CV | `src/i18n/utils.ts` → `profile` |

Rutas: español en `/`, inglés en `/en/`. Los casos de estudio viven en
`/proyectos/<slug>/` y `/en/projects/<slug>/`; se generan solos para cada
proyecto que tenga `caseStudy`.

## Reglas

- Cero colores hex en los componentes: todo sale de los tokens de `global.css`.
- Toda animación respeta `prefers-reduced-motion`.
- Funciona sin scroll horizontal a 375 px y con objetivos táctiles de 44 px.

## Formulario de contacto

La Action `contacto` valida con Zod, descarta bots (campo trampa y envíos en
menos de 3 s) y manda el mail con Resend, con `replyTo` = el visitante. Sin JS,
el formulario hace POST a `/gracias/` (o `/en/thanks/`), que muestra el resultado.

Variables (en Vercel → Settings → Environment Variables):

- `RESEND_API_KEY`
- `CONTACT_TO`: casilla que recibe los mensajes (no se publica)
- `CONTACT_FROM`: opcional. Sin dominio verificado en Resend queda
  `onboarding@resend.dev`, que solo puede enviarle al dueño de la cuenta.

## Al comprar el dominio

1. Cambiar `SITE` en `astro.config.mjs`.
2. Agregar el dominio en Vercel.
3. Verificar el dominio en Resend y poner `CONTACT_FROM=Portfolio <contacto@tu-dominio>`.
