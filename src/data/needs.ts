/** Opciones de «¿Qué necesitás?» del formulario. Las comparten la UI y la Action. */
export const NEEDS = ['software', 'web', 'seo', 'ads', 'ai', 'other'] as const;
export type Need = (typeof NEEDS)[number];
