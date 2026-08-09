/**
 * URL base do site.
 *
 * Ordem de resolução:
 *  1. NEXT_PUBLIC_SITE_URL — domínio próprio, quando configurado.
 *  2. VERCEL_PROJECT_PRODUCTION_URL — domínio de produção injetado pela Vercel.
 *  3. localhost — desenvolvimento.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();