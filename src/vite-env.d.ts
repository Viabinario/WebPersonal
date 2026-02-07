/// <reference types="vite/client" />

// Variables de entorno (Vite sustituye en build)
interface ImportMetaEnv {
  readonly VITE_CONTACT_API_URL?: string;
  /** Correo de contacto mostrado y copiable (ej: contacto@tudominio.com). */
  readonly VITE_CONTACT_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}
