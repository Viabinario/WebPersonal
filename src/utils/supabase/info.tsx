/**
 * Configuración de Supabase usando variables de entorno
 * 
 * IMPORTANTE: Las credenciales deben estar en un archivo .env
 * que NO se sube al repositorio (está en .gitignore)
 * 
 * Para configurar:
 * 1. Copia .env.example a .env
 * 2. Añade tus credenciales reales de Supabase
 * 3. El archivo .env está en .gitignore y no se subirá al repositorio
 */

export const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID || '';
export const publicAnonKey = import.meta.env.VITE_SUPABASE_PUBLIC_ANON_KEY || '';

// Validación en desarrollo
if (import.meta.env.DEV) {
  if (!projectId || !publicAnonKey) {
    console.warn(
      '⚠️ Advertencia: Las variables de entorno de Supabase no están configuradas.\n' +
      'Por favor, crea un archivo .env con VITE_SUPABASE_PROJECT_ID y VITE_SUPABASE_PUBLIC_ANON_KEY'
    );
  }
}