/**
 * URL del endpoint del formulario de contacto (Resend u otro backend).
 * Configurar en .env como VITE_CONTACT_API_URL.
 * Ejemplo: https://tu-proyecto.vercel.app/api/contact
 */
export const contactApiUrl =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_CONTACT_API_URL) || '';

/**
 * Correo de contacto (copiar al portapapeles). Configurar en .env como VITE_CONTACT_EMAIL.
 * Debe coincidir con el email destino del API (ej: RESEND_TO_EMAIL) si usas Resend.
 */
export const contactEmail =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_CONTACT_EMAIL) || '';
