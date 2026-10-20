import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { CONTACT_FROM, CONTACT_TO, RESEND_API_KEY } from 'astro:env/server';
import { Resend } from 'resend';

const MIN_FILL_MS = 3000;

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export const server = {
  contacto: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().trim().min(2).max(100),
      email: z.string().trim().email().max(200),
      message: z.string().trim().min(10).max(5000),
      lang: z.enum(['es', 'en']).default('es'),
      // Trampas para bots: campo oculto que debe quedar vacío y tiempo de llenado.
      website: z.string().optional(),
      startedAt: z.coerce.number().optional(),
    }),
    handler: async (input) => {
      const tooFast = !!input.startedAt && Date.now() - input.startedAt < MIN_FILL_MS;
      if (input.website || tooFast) {
        // Al bot se le responde como si hubiera salido bien.
        return { ok: true };
      }

      if (!RESEND_API_KEY || !CONTACT_TO) {
        console.error('[contacto] faltan RESEND_API_KEY o CONTACT_TO');
        throw new ActionError({ code: 'INTERNAL_SERVER_ERROR', message: 'Contact form is not configured' });
      }

      const resend = new Resend(RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: CONTACT_FROM,
        to: CONTACT_TO,
        replyTo: input.email,
        subject: `Portfolio: mensaje de ${input.name}`,
        text: `Nombre: ${input.name}\nEmail: ${input.email}\nIdioma: ${input.lang}\n\n${input.message}`,
        html: `<p><strong>Nombre:</strong> ${escape(input.name)}<br><strong>Email:</strong> ${escape(input.email)}<br><strong>Idioma:</strong> ${input.lang}</p><p style="white-space:pre-wrap">${escape(input.message)}</p>`,
      });

      if (error) {
        console.error('[contacto] Resend rechazó el envío:', error.name, error.message);
        throw new ActionError({ code: 'INTERNAL_SERVER_ERROR', message: 'Email provider error' });
      }
      return { ok: true };
    },
  }),
};
