# Sitio Web Personal — Francisco Sánchez

Portfolio y sitio web personal de presentación profesional. Diseñado en Figma (Design & Make), desarrollado en TypeScript/React y desplegado en GitHub Pages.

---

## Sobre el proyecto

El sitio funciona como un **lienzo único**: todas las secciones quedan visibles en una misma vista, con navegación por cuadrícula y zoom para acceder al detalle. La experiencia está optimizada para **desktop (1280×832)** y en evolución hacia una mejor adaptación móvil.

### Secciones

- **Presentación** — Introducción al proyecto y enlaces a redes (LinkedIn, GitHub, Behance, Notion, YouTube).
- **Sobre mí** — Perfil y contexto profesional.
- **Casos de estudio** — Dos proyectos detallados con contenido en scroll horizontal y navegación entre casos.
- **Contacto** — Formulario de envío de mensajes y opción de copiar el correo.

### Diseño y desarrollo

- **Diseño y prototipo**: Figma (Design & Make).
- **Frontend**: React 18, TypeScript, TSX, Tailwind CSS, Vite.
- **Herramientas**: Cursor (AI) para modelado de código y pruebas en tiempo real.
- **Formulario de contacto**: lógica de backend en Vercel; envío de correos vía API.
- **Despliegue**: GitHub Pages con dominio propio.

El contenido compartido (texto de presentación, redes, estilos de enlaces de texto) está centralizado en `src/components/case-shared` para mantener una única fuente de verdad en todo el sitio.

---

## Cómo ejecutarlo en local

**Requisitos:** Node.js 18+ y npm (o yarn).

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
```

El sitio se sirve en `http://localhost:5173` (o el puerto que indique Vite).

**Build de producción:**

```bash
npm run build
```

La salida se genera en `dist/`. El formulario de contacto requiere configuración mediante variables de entorno (no incluidas en el repositorio).

---

## Estructura del proyecto

```
src/
├── assets/           # Imágenes y recursos (casos, redes, perfil)
├── components/       # Componentes React (secciones, navegación, case-shared, ui)
├── imports/          # Contenido de casos de estudio (Case1, Case2) y pantallas
├── styles/           # Estilos globales
├── utils/            # Utilidades (API de contacto, etc.)
├── App.tsx
├── main.tsx
└── index.css
```

---

## Tecnologías

- **React** + **TypeScript** (TSX)
- **Vite** — build y dev server
- **Tailwind CSS** — estilos y tema (colores, tipografía Roboto)
- **Radix UI** — base de componentes accesibles (shadcn/ui)
- **Resend** — envío de emails desde el backend del formulario

---

## Nota sobre seguridad

Las credenciales y datos sensibles no forman parte del repositorio. La configuración del formulario de contacto y del despliegue se hace mediante variables de entorno y documentación interna cuando aplica.

---

## Licencia

Proyecto de uso personal y privado.
