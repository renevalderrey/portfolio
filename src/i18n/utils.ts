export const langs = ['es', 'en'] as const;
export type Lang = (typeof langs)[number];

/** Texto en los dos idiomas. */
export type L<T = string> = Record<Lang, T>;

export function getLang(locale: string | undefined): Lang {
  return locale === 'en' ? 'en' : 'es';
}

export const routes = {
  home: { es: '/', en: '/en/' },
  project: (slug: string): L => ({ es: `/proyectos/${slug}/`, en: `/en/projects/${slug}/` }),
  thanks: { es: '/gracias/', en: '/en/thanks/' },
} satisfies Record<string, L | ((slug: string) => L)>;

/** Ancla dentro de la home del idioma. */
export function homeAnchor(lang: Lang, id: string) {
  return `${routes.home[lang]}#${id}`;
}

export const profile = {
  name: 'René Valderrey',
  linkedin: 'https://www.linkedin.com/in/rvalderrey/',
  github: 'https://github.com/renevalderrey',
  // Vacío hasta tener una versión del CV sin teléfono ni email.
  cv: { es: '', en: '' } as L,
};
