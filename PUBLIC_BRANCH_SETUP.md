# Configuración de Rama Pública para GitHub Pages

## 🎯 Objetivo

Crear una rama pública (`gh-pages-source`) que contenga la versión del proyecto lista para publicar en GitHub Pages, sin credenciales sensibles.

## 📝 Pasos para Crear la Rama Pública

### 1. Verificar Estado Actual

```bash
# Asegúrate de estar en la rama main y tener todos los cambios guardados
git status
git checkout main
```

### 2. Crear Rama Pública

```bash
# Crear nueva rama desde main
git checkout -b gh-pages-source

# Verificar que estás en la nueva rama
git branch
```

### 3. Asegurar que las Credenciales Usen Variables de Entorno

**IMPORTANTE**: Antes de hacer push, verifica que la URL del API de contacto use variables de entorno (`VITE_CONTACT_API_URL`) y que no haya URLs o claves hardcodeadas en el código.

### 4. Verificar Archivos Excluidos

Asegúrate de que estos archivos NO se suban:

- `.env` y variantes (`.env.local`, etc.)
- Cualquier archivo con credenciales o secrets

### 5. Hacer Commit y Push

```bash
# Añadir todos los cambios
git add .

# Commit
git commit -m "Preparar rama pública para GitHub Pages"

# Push de la nueva rama
git push origin gh-pages-source
```

### 6. Configurar GitHub Secrets (para el formulario de contacto)

1. Ve a tu repositorio en GitHub
2. Settings → Secrets and variables → Actions
3. Añade la variable (o secret) que use tu workflow para el build:
   - **Name**: `VITE_CONTACT_API_URL`
   - **Value**: URL completa del API de contacto (ej: `https://tu-proyecto.vercel.app/api/contact`)

Ver **RESEND_SETUP.md** para la configuración completa del formulario.

### 7. Habilitar GitHub Pages

1. Ve a Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` (se crea automáticamente por el workflow)
4. Folder: `/ (root)`
5. Click "Save"

### 8. Verificar el Despliegue

1. Ve a Actions en tu repositorio
2. Deberías ver el workflow "Deploy to GitHub Pages" ejecutándose
3. Espera a que termine (puede tomar 1-2 minutos)
4. Ve a Settings → Pages para ver la URL de tu sitio

## 🔒 Seguridad

### Checklist de Seguridad

- [ ] `.env` está en `.gitignore`
- [ ] No hay credenciales hardcodeadas en el código
- [ ] Los secrets/variables están configurados en GitHub (p. ej. `VITE_CONTACT_API_URL` si usas el formulario)
- [ ] La rama `main` sigue siendo privada (si es necesario)

### Archivos que NO deben estar en la rama pública

- Cualquier archivo con credenciales
- `.env` y variantes
- Archivos de configuración local
- Secrets o tokens

## 📋 Estructura de Ramas

```
main (privada)
  ├── Desarrollo activo
  ├── Credenciales locales
  └── Configuración completa

gh-pages-source (pública)
  ├── Versión limpia para producción
  ├── Variables de entorno (sin valores)
  └── Lista para GitHub Pages

gh-pages (generada automáticamente)
  └── Build final desplegado
```

## 🔄 Mantenimiento

### Actualizar la Rama Pública

```bash
# Cambiar a la rama pública
git checkout gh-pages-source

# Traer cambios de main (sin credenciales)
git merge main

# Resolver conflictos si los hay
# Asegúrate de mantener las variables de entorno

# Push
git push origin gh-pages-source
```

### Sincronizar Cambios

Cuando hagas cambios en `main` que quieras publicar:

1. Merge de `main` a `gh-pages-source`
2. Verifica que no se incluyan credenciales
3. Push a `gh-pages-source`
4. El workflow se ejecutará automáticamente

## ⚠️ Notas Importantes

1. **Nunca hagas push de credenciales** a la rama pública
2. **Usa siempre variables de entorno** para información sensible
3. **Verifica el workflow** después de cada push
4. **Mantén `main` privada** si contiene información sensible

## 🆘 Solución de Problemas

### El workflow falla

- Verifica que los secrets estén configurados en GitHub
- Revisa los logs del workflow en Actions
- Asegúrate de que `vite.config.ts` tenga el `base` correcto

### Las credenciales no funcionan

- Verifica que los secrets estén bien escritos (sin espacios)
- Asegúrate de que la app use `import.meta.env.VITE_CONTACT_API_URL` para el formulario
- Revisa la consola del navegador para errores

### El sitio no carga

- Verifica el `base` en `vite.config.ts`
- Asegúrate de que coincida con el nombre del repositorio
- Revisa la URL en Settings → Pages
