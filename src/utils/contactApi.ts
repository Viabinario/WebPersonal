/**
 * URL del endpoint del formulario de contacto (Resend u otro backend).
 * Configurar en .env como VITE_CONTACT_API_URL.
 * Ejemplo: https://tu-proyecto.vercel.app/api/contact
 */
export const contactApiUrl =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_CONTACT_API_URL) || '';
