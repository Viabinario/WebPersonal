# Guía de Despliegue - WebPersonal

## ⚠️ REGLA DE ORO

**NUNCA commitear `docs/` manualmente**

El workflow de GitHub Actions se encarga automáticamente de:
- Hacer `npm run build`
- Actualizar `docs/`
- Desplegar a GitHub Pages

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

## ❌ Qué NO Hacer

```bash
# ❌ NO hacer build local para commitear
npm run build
git add docs/  # ¡NO!

# ❌ NO copiar dist/ a docs/
Copy-Item dist\* docs\  # ¡NO!

# ❌ NO forzar push sin rebase
git push --force  # ¡PELIGROSO!
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
