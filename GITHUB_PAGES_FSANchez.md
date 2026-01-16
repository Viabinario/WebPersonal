# Guía de Publicación en GitHub Pages - Rama fsanchez

## 📋 Estado Actual

- **Rama activa**: `fsanchez`
- **Repositorio**: `Viabinario/WebPersonal`
- **URL esperada**: `https://viabinario.github.io/WebPersonal/`

## ✅ Configuración Completada

### 1. Workflow de GitHub Actions

El archivo `.github/workflows/deploy-gh-pages.yml` está configurado para:
- ✅ Ejecutarse en la rama `fsanchez`
- ✅ Usar variables de entorno de Supabase desde GitHub Secrets
- ✅ Desplegar automáticamente a GitHub Pages

### 2. Configuración de Vite

El archivo `vite.config.ts` está configurado con:
- ✅ Base path: `/WebPersonal/` (para GitHub Pages)
- ✅ Base path: `/` (para desarrollo local)

### 3. Variables de Entorno

El proyecto usa variables de entorno para Supabase:
- ✅ `VITE_SUPABASE_PROJECT_ID`
- ✅ `VITE_SUPABASE_PUBLIC_ANON_KEY`

## 🔧 Pasos para Publicar

### Paso 1: Configurar GitHub Secrets

1. Ve a tu repositorio: https://github.com/Viabinario/WebPersonal
2. Settings → Secrets and variables → Actions
3. Click en "New repository secret"
4. Añade estos secrets:

   **Secret 1:**
   - **Name**: `VITE_SUPABASE_PROJECT_ID`
   - **Value**: `yejjhcrhbsrfvriojqzb` (o tu project ID)

   **Secret 2:**
   - **Name**: `VITE_SUPABASE_PUBLIC_ANON_KEY`
   - **Value**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (tu anon key completa)

### Paso 2: Habilitar GitHub Pages

1. Ve a Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` (se crea automáticamente por el workflow)
4. Folder: `/ (root)`
5. Click "Save"

### Paso 3: Hacer Push de los Cambios

```bash
# Asegúrate de estar en la rama fsanchez
git checkout fsanchez

# Añade los cambios
git add .

# Commit
git commit -m "Configurar GitHub Pages para rama fsanchez"

# Push
git push origin fsanchez
```

### Paso 4: Verificar el Despliegue

1. Ve a la pestaña **Actions** en GitHub
2. Deberías ver el workflow "Deploy to GitHub Pages" ejecutándose
3. Espera a que termine (1-2 minutos)
4. Ve a Settings → Pages para ver la URL de tu sitio
5. Tu sitio estará disponible en: `https://viabinario.github.io/WebPersonal/`

## 🔍 Verificación Post-Despliegue

### Verificar que el sitio carga correctamente

1. Abre la URL: `https://viabinario.github.io/WebPersonal/`
2. Verifica que:
   - ✅ La navegación funciona
   - ✅ El zoom del canvas funciona
   - ✅ El diseño responsive funciona
   - ✅ El formulario de contacto carga

### Verificar que el formulario funciona

1. Abre la sección de Contacto
2. Intenta enviar un mensaje de prueba
3. Verifica que:
   - ✅ Los campos se validan correctamente
   - ✅ El mensaje se envía a Supabase
   - ✅ Aparece el modal de éxito

## ⚠️ Solución de Problemas

### El sitio no carga / Error 404

- Verifica que el `base` en `vite.config.ts` sea `/WebPersonal/`
- Asegúrate de que el workflow se haya ejecutado correctamente
- Revisa los logs del workflow en Actions

### El formulario no funciona

- Verifica que los GitHub Secrets estén configurados correctamente
- Revisa la consola del navegador para errores
- Verifica que las variables de entorno estén en los secrets:
  - `VITE_SUPABASE_PROJECT_ID`
  - `VITE_SUPABASE_PUBLIC_ANON_KEY`

### Los assets no cargan

- Verifica que el `base` path sea correcto
- Asegúrate de que las rutas sean relativas
- Revisa la consola del navegador para errores 404

### El workflow falla

- Revisa los logs del workflow en Actions
- Verifica que los secrets estén bien escritos (sin espacios)
- Asegúrate de que `npm ci` y `npm run build` funcionen localmente

## 📝 Notas Importantes

1. **Base Path**: El sitio está configurado para `/WebPersonal/` porque el repositorio se llama `WebPersonal`
2. **Variables de Entorno**: Las credenciales de Supabase deben estar en GitHub Secrets, NO en el código
3. **Rama**: El workflow se ejecuta automáticamente cuando haces push a `fsanchez`
4. **Actualizaciones**: Cada push a `fsanchez` desplegará automáticamente una nueva versión

## 🔄 Actualizar el Sitio

Para actualizar el sitio después de hacer cambios:

```bash
# Asegúrate de estar en fsanchez
git checkout fsanchez

# Haz tus cambios...

# Commit y push
git add .
git commit -m "Descripción de los cambios"
git push origin fsanchez
```

El workflow se ejecutará automáticamente y desplegará los cambios en 1-2 minutos.

## 🔗 Enlaces Útiles

- **Repositorio**: https://github.com/Viabinario/WebPersonal
- **Actions**: https://github.com/Viabinario/WebPersonal/actions
- **Pages Settings**: https://github.com/Viabinario/WebPersonal/settings/pages
- **Secrets**: https://github.com/Viabinario/WebPersonal/settings/secrets/actions
