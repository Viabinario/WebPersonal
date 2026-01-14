# Guía de .gitignore - Seguridad y Privacidad

Este documento explica qué archivos están excluidos del repositorio y por qué es importante para la seguridad.

## 🔒 Archivos Excluidos por Seguridad

### 1. Credenciales y Secretos
- `.env*` - Variables de entorno con credenciales
- `*.key`, `*.pem`, `*.secret` - Claves privadas y certificados
- `credentials.json`, `secrets.json` - Archivos con información sensible

**⚠️ IMPORTANTE:** Nunca subas archivos con credenciales reales al repositorio.

### 2. Archivos de Build
- `dist/`, `build/` - Archivos compilados
- `*.js.map` - Source maps que pueden revelar código fuente
- Archivos `.js` compilados (excepto los necesarios)

### 3. Dependencias
- `node_modules/` - Paquetes instalados (se pueden reinstalar con `npm install`)

### 4. Archivos Temporales
- `*.log` - Logs que pueden contener información sensible
- `*.tmp`, `*.temp` - Archivos temporales
- `.cache/` - Archivos de caché

### 5. Archivos del Sistema
- `.DS_Store` (macOS)
- `Thumbs.db` (Windows)
- Archivos de configuración de IDEs

## 📋 Checklist de Seguridad

Antes de hacer commit, verifica:

- [ ] No hay archivos `.env` con credenciales reales
- [ ] No hay archivos con claves privadas (`.key`, `.pem`)
- [ ] No hay archivos de log con información sensible
- [ ] No hay archivos de base de datos local
- [ ] Las credenciales están en variables de entorno, no hardcodeadas

## 🚨 Si Accidentalmente Subiste Credenciales

Si accidentalmente subiste credenciales al repositorio:

1. **INMEDIATAMENTE** revoca/regenera las credenciales expuestas
2. Elimina el archivo del historial de Git:
   ```bash
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch ruta/al/archivo" \
     --prune-empty --tag-name-filter cat -- --all
   ```
3. Fuerza el push (solo si es necesario y tienes permiso):
   ```bash
   git push origin --force --all
   ```
4. Notifica a tu equipo si trabajas en grupo

## 📝 Mejores Prácticas

1. **Usa variables de entorno** para todas las credenciales
2. **Crea archivos `.example`** para mostrar qué variables se necesitan
3. **Revisa el .gitignore** antes de hacer commit
4. **Usa herramientas de escaneo** como `git-secrets` o `truffleHog`
5. **Nunca hardcodees** credenciales en el código

## 🔍 Verificar Archivos Sensibles

Para verificar qué archivos sensibles podrían estar en el repositorio:

```bash
# Buscar posibles credenciales
git grep -i "password\|secret\|key\|token" -- "*.ts" "*.tsx" "*.js"

# Verificar qué archivos están siendo rastreados
git ls-files

# Verificar si un archivo está siendo ignorado
git check-ignore -v ruta/al/archivo
```

## 📚 Recursos Adicionales

- [GitHub: Removing sensitive data](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)
- [OWASP: Secrets Management](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)
