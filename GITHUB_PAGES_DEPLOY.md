# Guía de Publicación en GitHub Pages

## ✅ ¿Es posible publicar este proyecto en GitHub Pages?

**SÍ**, es totalmente posible publicar este proyecto en GitHub Pages con todas sus propiedades. Sin embargo, requiere algunos ajustes de configuración.

## 📋 Requisitos Previos

1. ✅ **SPA (Single Page Application)**: El proyecto es compatible
2. ✅ **Supabase Edge Functions**: Funcionarán desde GitHub Pages (son endpoints públicos)
3. ⚠️ **Credenciales**: Deben estar en variables de entorno o secrets de GitHub
4. ⚠️ **Base Path**: Necesita configuración si el repo no es `username.github.io`

## 🔧 Pasos para Publicar

### 1. Preparar la Rama Pública

```bash
# Crear una nueva rama para la versión pública
git checkout -b gh-pages-source

# Asegúrate de que NO incluyas credenciales sensibles
# Verifica que src/utils/supabase/info.tsx use variables de entorno
```

### 2. Configurar Variables de Entorno

**Opción A: Usar Secrets de GitHub (Recomendado)**

1. Ve a tu repositorio en GitHub
2. Settings → Secrets and variables → Actions
3. Añade estos secrets:
   - `VITE_SUPABASE_PROJECT_ID`
   - `VITE_SUPABASE_PUBLIC_ANON_KEY`

**Opción B: Variables de Entorno en el Workflow**

Edita `.github/workflows/deploy-gh-pages.yml` y descomenta las líneas de variables de entorno.

### 3. Actualizar `vite.config.ts`

Si tu repositorio es `username.github.io`, no necesitas `base`.
Si tu repositorio es otro nombre (ej: `mi-sitio-web`), necesitas:

```typescript
export default defineConfig({
  base: '/nombre-del-repositorio/',  // Cambia esto
  // ... resto de la configuración
});
```

### 4. Habilitar GitHub Pages

1. Ve a Settings → Pages en tu repositorio
2. Source: Deploy from a branch
3. Branch: `gh-pages` (se crea automáticamente)
4. Folder: `/ (root)`
5. Guarda

### 5. Hacer Push de la Rama

```bash
git push origin gh-pages-source
```

El workflow de GitHub Actions se ejecutará automáticamente y desplegará el sitio.

## ⚠️ Consideraciones Importantes

### Seguridad de Credenciales

**CRÍTICO**: Antes de publicar, asegúrate de:

1. ✅ `src/utils/supabase/info.tsx` usa variables de entorno:
   ```typescript
   export const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
   export const publicAnonKey = import.meta.env.VITE_SUPABASE_PUBLIC_ANON_KEY;
   ```

2. ✅ El archivo `.env` está en `.gitignore`
3. ✅ No hay credenciales hardcodeadas en el código

### Funcionalidades que Funcionarán

- ✅ Navegación entre secciones
- ✅ Zoom del canvas
- ✅ Diseño responsive
- ✅ Formulario de contacto (si Supabase está configurado)
- ✅ Todos los efectos visuales y animaciones

### Limitaciones de GitHub Pages

- ⚠️ Solo archivos estáticos (SPA funciona perfecto)
- ⚠️ No hay backend (pero Supabase Edge Functions funcionan)
- ⚠️ HTTPS automático (bueno para seguridad)

## 🔍 Verificar el Despliegue

1. Espera a que el workflow termine (Actions → Deploy to GitHub Pages)
2. Ve a Settings → Pages para ver la URL
3. La URL será: `https://username.github.io/nombre-repo/`

## 📝 Estructura de Ramas Recomendada

```
main                    → Desarrollo (privado, con credenciales)
gh-pages-source         → Versión pública (sin credenciales)
gh-pages               → Generada automáticamente por GitHub Actions
```

## 🛠️ Solución de Problemas

### Las rutas no funcionan

- Verifica el `base` en `vite.config.ts`
- Asegúrate de que coincida con el nombre del repositorio

### El formulario no funciona

- Verifica que las variables de entorno estén configuradas en GitHub Secrets
- Revisa la consola del navegador para errores de CORS

### Los assets no cargan

- Verifica que las rutas sean relativas
- Revisa que `base` esté configurado correctamente

## 📚 Recursos Adicionales

- [Documentación de GitHub Pages](https://docs.github.com/en/pages)
- [Vite - Deploying a Static Site](https://vitejs.dev/guide/static-deploy.html#github-pages)
