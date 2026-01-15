/**
 * ARCHIVO DE EJEMPLO - NO CONTIENE CREDENCIALES REALES
 * 
 * Este archivo muestra cómo debería verse info.tsx usando variables de entorno.
 * 
 * INSTRUCCIONES:
 * 1. El archivo info.tsx ya está configurado para usar variables de entorno
 * 2. Crea un archivo .env en la raíz del proyecto (copia .env.example)
 * 3. Añade tus credenciales reales de Supabase en el archivo .env
 * 4. El archivo .env está en .gitignore y NO se subirá al repositorio
 * 
 * ESTRUCTURA DEL .env:
 * VITE_SUPABASE_PROJECT_ID=tu-project-id
 * VITE_SUPABASE_PUBLIC_ANON_KEY=tu-anon-key
 * 
 * Obtén tus credenciales desde:
 * https://supabase.com/dashboard/project/YOUR_PROJECT_ID/settings/api
 */

// Este es un ejemplo de cómo se ve el código actual en info.tsx
// (usando variables de entorno en lugar de valores hardcodeados)

export const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID || '';
export const publicAnonKey = import.meta.env.VITE_SUPABASE_PUBLIC_ANON_KEY || '';
