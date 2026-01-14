# Sitio Web Personal - Francisco Sánchez

Sitio web personal profesional diseñado en Figma y desarrollado con React, TypeScript y Tailwind CSS.

## 🚀 Características

- **Diseño Responsivo**: Adaptado para dispositivos móviles, tablets y desktop
- **Navegación Intuitiva**: Sistema de navegación con vista de cuadrícula y zoom
- **Secciones Principales**:
  - Presentación
  - Sobre mí
  - Casos de estudio
  - Contacto (con formulario funcional)
- **Tecnologías Modernas**: React 18, TypeScript, Tailwind CSS, Vite

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn

## 🛠️ Instalación

1. Clona el repositorio o navega al directorio del proyecto
2. Instala las dependencias:

```bash
npm install
```

## 🏃 Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## 🏗️ Construcción

Para crear una versión de producción:

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

## 📁 Estructura del Proyecto

```
DEV_WebPersonal/
├── src/
│   ├── assets/          # Imágenes y recursos estáticos
│   ├── components/      # Componentes React
│   │   ├── ui/          # Componentes de UI (shadcn/ui)
│   │   └── ...
│   ├── styles/          # Estilos globales
│   ├── utils/           # Utilidades y helpers
│   ├── App.tsx          # Componente principal
│   └── main.tsx         # Punto de entrada
├── index.html
├── package.json
├── tailwind.config.js   # Configuración de Tailwind CSS
├── tsconfig.json        # Configuración de TypeScript
└── vite.config.ts       # Configuración de Vite
```

## 🎨 Tecnologías Utilizadas

- **React 18.3.1**: Biblioteca de UI
- **TypeScript**: Tipado estático
- **Vite 6.3.5**: Build tool y dev server
- **Tailwind CSS 3.4.13**: Framework de CSS utility-first
- **Radix UI**: Componentes accesibles
- **Supabase**: Backend para formulario de contacto

## 📱 Responsive Design

El sitio está optimizado para:
- **Mobile**: < 1024px - Diseño de scroll vertical con navegación simplificada
- **Desktop**: ≥ 1024px - Diseño original con canvas de 2560x1664px y navegación por cuadrícula

## 🔧 Configuración

### Variables de Entorno

El proyecto utiliza Supabase para el formulario de contacto. 

**⚠️ IMPORTANTE - Seguridad:**
- Las credenciales NO deben estar hardcodeadas en el código
- Usa variables de entorno para credenciales sensibles

**Configuración recomendada:**

1. Copia el archivo de ejemplo:
```bash
cp .env.example .env
```

2. Edita `.env` con tus credenciales reales:
```
VITE_SUPABASE_PROJECT_ID=tu-project-id
VITE_SUPABASE_PUBLIC_ANON_KEY=tu-anon-key
```

3. Actualiza `src/utils/supabase/info.tsx` para usar variables de entorno:
```typescript
export const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
export const publicAnonKey = import.meta.env.VITE_SUPABASE_PUBLIC_ANON_KEY;
```

**Nota:** El archivo `.env` está en `.gitignore` y NO se subirá al repositorio.

## 📝 Notas de Desarrollo

- El proyecto fue originalmente generado desde Figma Make
- Se ha mejorado con:
  - Configuración adecuada de Tailwind CSS
  - Sistema responsivo mobile-first
  - Limpieza de código y optimizaciones
  - Actualización de dependencias a versiones estables
  - Implementación de medidas de seguridad en el formulario de contacto

## 🔒 Seguridad

### Archivos Excluidos del Repositorio

El proyecto incluye un `.gitignore` completo que protege:
- ✅ Credenciales y secretos (`.env`, `*.key`, `*.pem`, etc.)
- ✅ Archivos de build (`dist/`, `build/`)
- ✅ Dependencias (`node_modules/`)
- ✅ Archivos temporales y logs
- ✅ Archivos del sistema operativo
- ✅ Archivos de IDEs y editores

**⚠️ IMPORTANTE:** 
- Nunca subas archivos con credenciales reales al repositorio
- Usa variables de entorno para información sensible
- Consulta `GITIGNORE_GUIDE.md` para más detalles sobre seguridad

### Documentación de Seguridad

- `SECURITY.md` - Medidas de seguridad del formulario de contacto
- `GITIGNORE_GUIDE.md` - Guía sobre archivos excluidos y mejores prácticas

## 📄 Licencia

Este proyecto es privado y personal.
