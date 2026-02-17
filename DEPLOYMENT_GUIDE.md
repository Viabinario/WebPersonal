# Guía de Despliegue - WebPersonal

## ⚠️ REGLA DE ORO

**NUNCA commitear `docs/` manualmente (excepto en emergencias)**

El workflow de GitHub Actions se encarga automáticamente de:
- Hacer `npm run build`
- Actualizar `docs/` (usando `git add -f` para archivos JS)
- Desplegar a GitHub Pages

**IMPORTANTE:** Debido a que `.gitignore` bloquea `*.js`, los archivos JS en `docs/assets/` 
requieren `git add -f` para ser incluidos. El workflow lo hace automáticamente.

---

## 📋 Protocolo de Push (Sin Conflictos)

### Para cambios en código (`src/`):

```bash
# 1. Desarrollar localmente con servidor de desarrollo
npm run dev

# 2. Commitear SOLO código fuente
git add src/
git commit -m "feat: descripción del cambio"

# 3. Sincronizar + Push (comando único)
git fetch origin fsanchez && \
git pull --rebase origin fsanchez && \
git push origin fsanchez

# 4. Esperar ~1 minuto
# El workflow automáticamente:
# - Hace el build
# - Actualiza docs/
# - Despliega a fsanchez.suroesteintegral.com
```

### Para cambios en configuración/dependencias:

```bash
# Ejemplo: modificar package.json, vite.config.ts, etc.
git add package.json vite.config.ts
git commit -m "chore: actualizar configuración"

# Push (mismo protocolo)
git fetch origin fsanchez && \
git pull --rebase origin fsanchez && \
git push origin fsanchez
```

---

## 🔍 Verificación del Despliegue

### 1. GitHub Actions (inmediato)
**URL:** `https://github.com/Viabinario/WebPersonal/actions`

Verificar:
- ✅ Workflow "Deploy to GitHub Pages" → verde
- ✅ Workflow "pages build and deployment" → verde

### 2. Sitio en producción (~1-2 minutos)
**URL:** `https://fsanchez.suroesteintegral.com`

Verificar:
- ✅ Página carga correctamente
- ✅ Sin errores en consola (F12 → Console)
- ✅ Cambios visibles

---

## 📧 Formulario de contacto (VITE_CONTACT_API_URL)

El build en GitHub Actions inyecta la URL del API de contacto **solo si está configurada** en el repositorio. Si falta, el formulario mostrará: *"El formulario no está configurado (falta URL del API)"*.

### Configurar en GitHub (obligatorio para que el formulario funcione)

1. Ir a **GitHub** → repositorio **Viabinario/WebPersonal** → **Settings** → **Secrets and variables** → **Actions**.
2. Pestaña **Variables** (o **Secrets** si prefieres; el workflow acepta ambos).
3. Añadir o editar:
   - **Nombre:** `VITE_CONTACT_API_URL`  
     **Valor:** URL completa de tu API (ej: `https://tu-proyecto.vercel.app/api/contact`).  
     Debe ser la URL del endpoint que envía el email (p. ej. serverless en Vercel con Resend).
   - **Opcional:** `VITE_CONTACT_EMAIL` → correo que se muestra y se copia en "Copiar dirección de correo".

4. Guardar. El **próximo** push a `fsanchez` hará un build con estas variables; no hace falta tocar código.

**Si las variables ya están creadas y el formulario sigue sin URL:**  
- El workflow usa **Repository variables** (Settings → Secrets and variables → Actions → pestaña **Variables**). Ahí deben estar `VITE_CONTACT_API_URL` y (opcional) `VITE_CONTACT_EMAIL`. **No hace falta** añadirlas en un Environment (github-pages, Production, etc.): las variables de repositorio están disponibles en todos los workflows.
- Si el workflow falla con *"VITE_CONTACT_API_URL no está disponible"*, revisa que existan en **Variables** (o **Secrets**) a nivel de repositorio, con el nombre exacto.

### Backend (Vercel / API)

En el proyecto donde está desplegada la API (p. ej. Vercel), configurar en **Environment Variables**:

- `RESEND_API_KEY` (tu clave de Resend)
- `RESEND_FROM_EMAIL` (ej: `Contacto <onboarding@resend.dev>`)
- `RESEND_TO_EMAIL` (correo que recibe los mensajes; puede ser el mismo que `VITE_CONTACT_EMAIL`)

### Build local con formulario

Para probar el envío en local, crear o editar `.env` en la raíz del proyecto (no se commitea):

```
VITE_CONTACT_API_URL=https://tu-proyecto.vercel.app/api/contact
VITE_CONTACT_EMAIL=tu-email@ejemplo.com
```

Luego `npm run build` o `npm run dev` usarán estas variables.

---

## ❌ Qué NO Hacer

```bash
# ❌ NO hacer build local para commitear
npm run build
git add docs/  # ¡NO! (El workflow lo hace automáticamente)

# ❌ NO copiar dist/ a docs/ para commitear
Copy-Item dist\* docs\  # ¡NO!

# ❌ NO forzar push sin rebase
git push --force  # ¡PELIGROSO!

# ❌ NO commitear docs/ sin -f para los JS
git add docs/assets/*.js  # ¡Esto NO funcionará! Los JS son ignorados por .gitignore
```

### ⚠️ Si EXCEPCIONALMENTE necesitas commitear docs/ manualmente:

```bash
# 1. Hacer build
npm run build

# 2. Copiar a docs/
Remove-Item -Recurse -Force docs
mkdir docs
Copy-Item -Recurse "dist\*" docs\
echo "fsanchez.suroesteintegral.com" > docs\CNAME
New-Item -ItemType File -Path "docs\.nojekyll" -Force

# 3. Añadir con -f para los JS (IMPORTANTE)
git add docs/
git add -f docs/assets/*.js  # ← FORZAR porque .gitignore bloquea *.js

# 4. Commitear y push con protocolo
git commit -m "build: actualizar docs/ manualmente"
git fetch origin fsanchez && git pull --rebase origin fsanchez && git push origin fsanchez
```

---

## ✅ Qué SÍ Hacer

### Build local solo para desarrollo:

```bash
# ✅ Servidor de desarrollo (recomendado)
npm run dev
# Abrir: http://localhost:5173

# ✅ Preview del build (sin commitear)
npm run build
npm run preview
# Abrir: http://localhost:4173
```

### Verificar estado antes de push:

```bash
# Ver qué se va a commitear
git status
git diff --staged

# Ver si hay commits remotos nuevos
git fetch origin fsanchez
git log HEAD..origin/fsanchez --oneline
```

---

## 🐛 Resolución de Problemas

### "failed to push (non-fast-forward)"

**Causa:** Hay commits remotos que no tienes localmente (probablemente del workflow).

**Solución:**
```bash
git pull --rebase origin fsanchez
git push origin fsanchez
```

### "Conflicto en docs/index.html"

**Causa:** Commiteaste `docs/` localmente (violaste la regla de oro).

**Solución:**
```bash
# Opción 1: Aceptar versión remota (recomendado)
git checkout --theirs docs/index.html
git add docs/index.html
git rebase --continue
git push origin fsanchez

# Opción 2: Abortar y empezar de nuevo
git rebase --abort
# Eliminar cambios locales en docs/
git restore docs/
# Commitear solo src/
git add src/
git commit -m "feat: cambios"
git push origin fsanchez
```

### "Página en blanco / 404 en assets JS"

**Causa:** El build en `docs/` está desactualizado.

**Solución:**
```bash
# Esperar a que el workflow complete
# Si persiste después de 2 minutos:
git fetch origin fsanchez
git pull --rebase origin fsanchez
# Verificar que docs/ tiene los archivos JS correctos
```

---

## 📝 Alias Útiles (Opcional)

Añade a tu `.gitconfig` o perfil de PowerShell:

### PowerShell (`$PROFILE`):

```powershell
# Alias para push seguro
function gps {
    git fetch origin fsanchez
    git pull --rebase origin fsanchez
    git push origin fsanchez
}

# Alias para dev
function dev {
    npm run dev
}
```

### Git Config:

```bash
git config alias.sync "!git fetch origin fsanchez && git pull --rebase origin fsanchez && git push origin fsanchez"
```

Uso:
```bash
# PowerShell
gps

# Git
git sync
```

---

## 🎯 Resumen de 3 Pasos

```bash
# 1. Commitear código fuente
git add src/
git commit -m "feat: cambio"

# 2. Push con sincronización
git fetch origin fsanchez && git pull --rebase origin fsanchez && git push origin fsanchez

# 3. Verificar en ~1 minuto
# https://fsanchez.suroesteintegral.com
```

---

## 📚 Recursos

- **Repositorio:** `https://github.com/Viabinario/WebPersonal`
- **Sitio:** `https://fsanchez.suroesteintegral.com`
- **Actions:** `https://github.com/Viabinario/WebPersonal/actions`
- **Workflow:** `.github/workflows/deploy-gh-pages.yml`
