/**
 * URL del endpoint del formulario de contacto. Sustituida en build por Vite (.env.production o define).
 * Configurar VITE_CONTACT_API_URL en Repository variables (GitHub Actions) o en .env (local).
 */
export const contactApiUrl: string = (import.meta.env.VITE_CONTACT_API_URL ?? '').trim();

/**
 * Correo de contacto (copiar al portapapeles).
 */
export const contactEmail: string = (import.meta.env.VITE_CONTACT_EMAIL ?? '').trim();
